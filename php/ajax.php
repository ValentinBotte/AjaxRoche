<?php

    $pdo = new PDO('mysql:host=localhost;dbname=requetemagique', "root", "");

    $requete = $pdo->query("SELECT DISTINCT VILLE FROM PERSONNEL");

    echo json_encode($requete->fetchAll(PDO::FETCH_COLUMN, 0)) . ",";
  
    $requete = $pdo->query("SELECT DISTINCT SEXE FROM PERSONNEL");

    echo json_encode($requete->fetchAll(PDO::FETCH_COLUMN, 0)) . ",";

    $requete = $pdo->query("SELECT DISTINCT CODEPROJET FROM PERSONNEL WHERE CODEPROJET is not null");

    echo json_encode($requete->fetchAll(PDO::FETCH_COLUMN, 0));

?>
