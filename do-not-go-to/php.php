<!DOCTYPE html>
<html>
<body>

<?php
function getUserBrowser(){
  $fullUserBrowser = (!empty($_SERVER['HTTP_USER_AGENT'])? 
  $_SERVER['HTTP_USER_AGENT']:getenv('HTTP_USER_AGENT'));
  $userBrowser = explode(')', $fullUserBrowser);
  $userBrowser = $userBrowser[count($userBrowser)-1];

  if((!$userBrowser || $userBrowser === '' || $userBrowser === ' ' || strpos($userBrowser, 'like Gecko') === 1) && strpos($fullUserBrowser, 'Windows') !== false){
    return 'Internet-Explorer';
  }else if((strpos($userBrowser, 'Edge/') !== false || strpos($userBrowser, 'Edg/') !== false) && strpos($fullUserBrowser, 'Windows') !== false){
    return 'Microsoft-Edge';
  }else if(strpos($userBrowser, 'Chrome/') === 1 || strpos($userBrowser, 'CriOS/') === 1){
    return 'Google-Chrome';
  }else if(strpos($userBrowser, 'Firefox/') !== false || strpos($userBrowser, 'FxiOS/') !== false){
    return 'Mozilla-Firefox';
  }else if(strpos($userBrowser, 'Safari/') !== false && strpos($fullUserBrowser, 'Mac') !== false){
    return 'Safari';
  }else if(strpos($userBrowser, 'OPR/') !== false && strpos($fullUserBrowser, 'Opera Mini') !== false){
    return 'Opera-Mini';
  }else if(strpos($userBrowser, 'OPR/') !== false){
    return 'Opera';
  }
  return false;
}

echo 'browser detect: '.getUserBrowser();
echo 'full known: '
?>


</body>
</html>
