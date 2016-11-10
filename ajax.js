//Initialisation du xhr
xhr = creationXHR();



document.getElementById("ville").onchange=function(){ // Gestion changement de ville
    
    ville = document.getElementById("ville").options[document.getElementById("ville").selectedIndex].text;
    
    updateSelectSexe(ville)
    
};

document.getElementById("sexe").onchange=function(){ // Gestion changement de ville
    
    sexe = document.getElementById("sexe").options[document.getElementById("sexe").selectedIndex].text;
    ville = document.getElementById("ville").options[document.getElementById("ville").selectedIndex].text;
    
    updateCodeProjet(sexe, ville);
    
};




function getAllSelect(){  // Fonction qui charge pour la premiere fois tous les select
    
    xhr.open('GET', 'php/ajax.php', false); 
    xhr.send(null);

    if(xhr.status == 200){
        response = xhr.responseText;
   
        var tab = response.toString().split(",");

        var toutesLesVilles;
        
        for (var i in arr) {
            toutesLesVilles += "<option value=" + arr[i] +">" + arr[i] + "</option>";
        }

        document.getElementById("ville").innerHTML = toutesLesVilles;
        
        var arr = tab[1].toString().split(",");
        var tousLesSexes;
        
        for (var i in arr) {
            tousLesSexes += "<option value=" + arr[i] +">" + arr[i] + "</option>";
        }

        document.getElementById("sexe").innerHTML = tousLesSexes;
        
        var arr = tab[2].toString().split(",");
        var tousLesCodesProjet;
        
        for (var i in arr) {
            toutesLesVilles += "<option value=" + arr[i] +">" + arr[i] + "</option>";
        }

        document.getElementById("code_projet").innerHTML = toutesLesVilles;
    }

   

}

function updateSelectSexe(ville){
    
    xhr.open('GET', 'php/getSexes.php?ville=' + ville, false); 
    xhr.send(null);

    if(xhr.status == 200){
        response = JSON.parse(xhr.responseText);
   
        var arr = response.toString().split(",");

        var tousLesSexe;
        
        for (var i in arr) {
            tousLesSexe += "<option value=" + arr[i] +">" + arr[i] + "</option>";

        }
        
        document.getElementById("sexe").innerHTML = tousLesSexe;
    }


}

function updateCodeProjet(sexe, ville){
    
    xhr.open('GET', 'php/getCodeProjet.php?sexe=' + sexe + '&ville=' + ville, false); 
    xhr.send(null);

    if(xhr.status == 200){
        response = JSON.parse(xhr.responseText);
   
        var arr = response.toString().split(",");

        var tousLesCodeProjet;
        
        for (var i in arr) {
            tousLesCodeProjet += "<option value=" + arr[i] +">" + arr[i] + "</option>";

        }
        
        document.getElementById("code_projet").innerHTML = tousLesCodeProjet;
    }


}

