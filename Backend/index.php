<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$user = file_get_file_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO users(id, name, password) VALUES(null, :name, :password)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':password', $user->password);
        if($stmt->execute()){
            $response = ['status' =>1, 'message'=> 'Record created'];

        }else{
            $response = ['status' =>1, 'message'=> 'Failed'];
        }
        break;
}