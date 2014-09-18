<?
ini_set("display_errors", 0);
$HTTP_HOST = $_SERVER['HTTP_HOST'];

error_reporting(0); 

try {

	$host = 'abc123.com';
	$dbname = 'db-name';
	$username = 'db-user';
	$password = 'db-password';
	

	$db = new PDO('mysql:host=' . $host . ';dbname=' .  $dbname, $username, $password);

	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
}

?>