const menuGauche = document.getElementById("navLateral");

menuGauche.innerHTML =
    `
    <a href="javascript:void(0)" class="fermerBtn" onclick="fermerMenu()">&Chi;</a>
    <a class="lienGauche active" href="">LISTE DES TACHES</a>
    <a class="lienGauche" href="./briques.html">CASSE BRIQUES</a>
    <a class="lienGauche" href="./recettes.html">RECETTES</a>
    <a class="lienGauche" href="./ajax.html">AJAX</a>
    <a class="lienGauche" href="./produits.html">PRODUITS</a>
    `
//Appeler la fonction oncklic et définir la largeur latérale à 250 */
function ouvrirNav(){
    document.getElementById("navLateral").style.width = "250px";
}
//Fixe la largeur de la navigation latérale à 0 */
function fermerMenu(){
    document.getElementById("navLateral").style.width = "0";
}
ouvrirNav();
fermerMenu();