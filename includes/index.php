<?php
    include("connect.php");
    include("functions.php");

    if(isset($_GET["id"])) {
        $targetID = $_GET["id"];
        $result=getSingleUser($pdo, $targetID);
    } else {
		$result=getAllUsers($pdo);
    }
//	$result=null;

	if(!isset($result)||empty($result)){
		echo json_encode(array("code"=>1,"msg"=>"there has no data!!"));
		exit;
	}
	echo json_encode($result);
?>