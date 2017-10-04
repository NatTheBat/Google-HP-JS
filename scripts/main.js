let boutonCentral = document.getElementById('bouton-central');
let elementsCentraux = document.getElementById('elements-centraux');
let boutonRecherche = document.getElementById('bouton-recherche');

/*let rechercheGoogle = document.getElementById('bouton-recherche').value ('recherche-google'); */

boutonCentral.onclick = function() {
	boutonCentral.style.display='none';
	elementsCentraux.style.display='block';
}

boutonRecherche.onclick = function() {
	let contenuRecherche = document.getElementById('recherche-google').value;
	document.location.href='http://www.google.fr/#q=' + contenuRecherche ;
}


//document.onload = setTimeout(function () { alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please'); }, 10000);


 function ouvrePopUp()
     {
      window.open('popup/index.html','nom_de_ma_popup','menubar=no, scrollbars=no, top=100, left=100, width=700, height=700');
     }

//document.onload = setTimeout(ouvrePopUp(), 10000);

setTimeout(ouvrePopUp, 3000); 