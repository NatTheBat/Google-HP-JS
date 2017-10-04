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
