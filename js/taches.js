

// Créez un nouvel élément de liste en cliquant sur le bouton "Ajouter"
// appeler la fonction définit dans html onclick da la span
function nouvelElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("tacheInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  //condituon
  if (inputValue === '') {
    alert("Vous devez écrire quelque chose!");
  } else {
    document.getElementById("tacheUL").appendChild(li);
  }
  document.getElementById("tacheInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Créez un bouton "fermer" et ajoutez-le à chaque élément de la liste
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Cliquez sur un bouton de fermeture pour masquer l'élément de liste actuel
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Ajouter un symbole "coché" lorsque vous cliquez sur un élément de la liste
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);