<?php 

  $serveur="localhost";
  $dbname="narimanstravel";
  $user="root";
  $mdp="";
  
  try {
         $db=new PDO("mysql:host=$serveur;dbname=$dbname", $user, $mdp);
         print("connection faite avec succes");
  } catch( PDOException $e){
         print("la connection a echoue" .$e->getMessage());

  }




?>