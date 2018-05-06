:: echo on&setlocal enabledelayedexpansion

rem
echo copy adb_win_v1.0.26
rem

xcopy /R /Y .\adb_win_v1.0.26\*.*  C:\adb\adb_win_v1.0.26\*.*

rem
echo copy adb_usb.ini
rem

echo f|xcopy /R /Y /F .\adb_usb.ini "%USERPROFILE%\.android\adb_usb.ini"
if not "%ANDROID_SDK_HOME%" == "" xcopy /R /Y .\adb_usb.ini "%ANDROID_SDK_HOME%\.android\adb_usb.ini"

rem
echo Setting environment for using adb.
rem

set path|find "C:\adb\adb_win_v1.0.26"
if "%ERRORLEVEL%"=="1" goto :begin
echo env param already existed.
goto :eof 

:begin
rem cls
set PATH=C:\adb\adb_win_v1.0.26;%PATH%
:: reg add "HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Session Manager\Environment" /v Path /t REG_EXPAND_SZ /d "%PATH%" /f
wmic ENVIRONMENT where "name='path' and username='<SYSTEM>'" set VariableValue='C:\adb\adb_win_v1.0.26;%PATH%'