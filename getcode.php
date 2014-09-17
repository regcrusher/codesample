<? 

require_once('class/db.php');
header('Content-type: application/json');


$verified = false;

// Process only if HTTP request is a POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') { 

	// Let's normalize input to lowercase.
	$strcode = strtolower($_POST['code']);

	// PDO select statement and execution 
	$stmt = $db->prepare('SELECT * FROM invite WHERE code = :code');
	$stmt->execute(array('code' => $strcode));

	// If rows come back from the DB, then we have a match. Return true.
	$code_exists = ($stmt->rowCount() > 0);

	$verified = $code_exists; 
}
else 
{
	$verified = false;
}

// Return the result as a JSON object
echo json_encode($verified);

?>