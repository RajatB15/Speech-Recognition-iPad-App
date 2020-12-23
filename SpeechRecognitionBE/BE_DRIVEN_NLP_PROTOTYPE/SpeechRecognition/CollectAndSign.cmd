# 2>nul || @echo off & cls
# 2>nul || copy %~f0 %~dpn0.ps1 >nul || goto :EOF
# 2>nul || powershell.exe %~dpn0.ps1 %*
# 2>nul || IF NOT EXIST %~dpn0.ps1 goto :EOF
# 2>nul || del %~dpn0.ps1 & goto :EOF

#============================================================================
#
#  Component	   : Somaris 10 Tooling
#
#  Name            : CollectAndSign.cmd
#
#  Author          : Uwe Bayer; Healthcare GmbH HC DI CT R&D ES SWC
#
#  Language        : Somaris 10 Powershell Script
#
#  Creation Date   : 13. July. 2016
#
#  Description     : collect som/10 target per given search pattern and 
#                    and sign those with CT certificate 
#============================================================================
# Copyright (C) Siemens AG 2016 All Rights Reserved
#============================================================================

# Implement user interface and command line options
Param (	
    [String]$e,					# exclude	
	[String]$f,					# file pattern
    [Switch]$r,					# recursive
    [Switch]$cm,				# signing by CM 
    [Switch]$h					# print usage
)

# Set strict mode for current scope and its child scopes
Set-StrictMode -version 3.0

#----------------------------------------------------------------------------
#----------------------------------------------------------------------------
# Function: Main
#----------------------------------------------------------------------------
#----------------------------------------------------------------------------
function Main
{
    $progName = Split-Path $MyInvocation.ScriptName -leaf
    $exitCode = 0
	$thumbPrint = "8010C43B1BC61693812420689F2BE82B9D0187FB"

    if ($h) { ShowUsage; exit }

    if ( $f.Length -eq 0 )
    {
        Write-Host "ERROR: Argument -f <file pattern> not set" -foregroundcolor "red"
        ShowUsage;
        exit -1
    }

    if ($cm) { $script:thumbPrint = "AEB7097ECA0D7A4098DFF389A972ECA677149E29" }

	$cert=gci cert:\LocalMachine\My\ -codesigning | Where-Object {$_.ThumbPrint -eq $thumbPrint}
    if ( $cert -eq $null )
    {
        Write-Host "ERROR: CT Healthcare certificate not found in Personal store of local machine" -foregroundcolor "red"
        exit -1
    }

	$now = get-date
    Write-Host ""
    Write-Host "#============================================================"
    Write-Host "# Start $progName at $now ... "
    Write-Host "#		Argument file Pattern: $f"
    Write-Host "#		Option recursive scan: $r"
    Write-Host "#============================================================"
    Write-Host ""

    $f=$f.Replace("/", "\")
    $scanDir = Split-Path $f
    $pattern = $f.Split("\")
    $pattern = $pattern[$pattern.length-1]

    $params = @{ Filter=$pattern;File=1}
    if ($r) { $params = @{ Filter=$pattern;File=1;Recurse=1} }

    if ($pattern.EndsWith("*"))
    {
		if ( $e.Length -eq 0)
		{
			$filesFound = Get-ChildItem $scanDir @params | where{$_.Extension -match "exe|dll|ps1"} | Select-Object -Property FullName
		}
		else
		{
			$filesFound = Get-ChildItem $scanDir @params | where{$_.Extension -match "exe|dll|ps1"} | where{$_.FullName -NotMatch "$e"} | Select-Object -Property FullName
		}
	} 
    else
    {
		if ( $e.Length -eq 0)
		{
			$filesFound = Get-ChildItem $scanDir @params | Select-Object -Property FullName
		}
		else
		{
			$filesFound = Get-ChildItem $scanDir @params | where{$_.FullName -NotMatch "$e"} | Select-Object -Property FullName
		}
    }

    if ( $filesFound -eq $null )
    {
        Write-Warning "WARNING: no files found matching pattern '$f'" 
        exit 0
    }

    $fileCounter=0;
    $signCounter=0;
    foreach ($file in $filesFound)
    {  
        $fileCounter++;
        try {
		if ($cm)	
            {
              Set-AuthenticodeSignature $file.FullName -certificate $cert -TimestampServer http://timestamp.verisign.com/scripts/timestamp.dll -HashAlgorithm sha256 -force | Format-Table -Property Status,Path -AutoSize -hidetableheaders
            } else
            {
              Set-AuthenticodeSignature $file.FullName -certificate $cert -HashAlgorithm sha256 -force | Format-Table -Property Status,Path -AutoSize -hidetableheaders
            }
            $signCounter++;
        }
        catch {
            Write-Host "ERROR: $file.FullName could not be signed" -foregroundcolor "red"
            $exitCode = -1
            continue;
        }
    }
    
    $now = get-date
    Write-Host ""
    Write-Host "#============================================================"
    Write-Host "# Finish $progName at $now ... "
    Write-Host "#		 Files found:  $fileCounter"
    Write-Host "#		 Files signed: $signCounter"
    Write-Host "#		 Exit code:    $exitCode"
    Write-Host "#============================================================"
    Write-Host ""

    exit $exitCode
}
#----------------------------------------------------------------------------
#---- End Function Main -----------------------------------------------------
#----------------------------------------------------------------------------

function ShowUsage
{
    $usageFooter = @"

  -f <file search pattern>
`tmandatory, search pattern with full or relative file path. 
`texamples: 
`td:\CTS\INT\bin\Debug\CT.*
`t`tall exe and dll named CT.* in given path 
`tH.*
`t`tall exe and dll named H.* in current working directory 
`td:\CTS\INT\bin\Debug\*.Exam.Bolus.*
`t`tall exe and dll named *.Exam.Bolus.* in given path
`td:\CTS\INT\bin\Debug\CT.Exam.Bolus.BE.Impl.dll
`t`texplicitly CT.Exam.Bolus.BE.Impl.dll in given path
  -r	
`toptional, collect files recursively 
  -e	
`toptional, exclude files and directory with <NAME>
  -h	
`toptional, displays the usage

"@
    
      Write-Host
      Write-Host "CollectAndSign -f <file search pattern> [-r -h]"
      Write-Host
      Write-Host "Tool collect files and sign it with CT code signing certificate"
      $usageFooter
    
    exit 
}

##============================================================================
#----------------------------------------------------------------------------
# Execution
#----------------------------------------------------------------------------
##============================================================================
. Main

#============================================================================
# Copyright (C) Siemens AG 2016 All Rights Reserved
#============================================================================