<?php

    $pdo = new PDO('mysql:host=localhost;dbname=requetemagique', "root", "");

    $requete = $pdo->query("SELECT DISTINCT VILLE FROM PERSONNEL");

    echo json_encode($requete->fetchAll(PDO::FETCH_COLUMN, 0));

?>
