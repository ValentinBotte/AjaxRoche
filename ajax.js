//Initialisation du xhr
xhr = creationXHR();

document.getElementById("ville").onchange=function(){
    e = document.getElementById("ville");
    alert(e.options[e.selectedIndex].text);
};

function createVillesSelect(){
    
    xhr.open('GET', 'php/getVilles.php', false); 
    xhr.send(null);

    if(xhr.status == 200){
        response = JSON.parse(xhr.responseText);
   
        var arr = response.toString().split(",");

        
        for (var i in arr) {
            var option = document.createElement("option");
            option.value = arr[i];
            option.text = arr[i];

            document.getElementById("ville").add(option);
        }

    }


}


