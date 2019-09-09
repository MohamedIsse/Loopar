
var myArray = ["Fotboll","Spel","Mobiler","Hika", "F1"];
var lista = document.getElementById("lista");
for (let i = 0; i < myArray.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = myArray[i];
    lista.appendChild(li);
    }


