//créer un tableau d'obljet
let mesProduits = [
    {
        id:1,
        nomProduit:Canapé Angle ,
        Image: https://www.cocktail-scandinave.fr/produit/canape-angle-alhambra/ ,
        prixHT: 975.00 ,
        tva: 0.2 ,
        prixTTC: 0
    },
    {
        id:2,
        nomProduit:Armoire WELTON ,
        Image:https: https://www.cocktail-scandinave.fr/produit/armoire-40/,
        prixHT: 379.00 ,
        tva: 0.2 ,
        prixTTC: 0
    },
    {
        id:3,
        nomProduit:Lit MAHINA,
        Image:https: https://www.cocktail-scandinave.fr/produit/lit-11 ,
        prixHT: 699.00 ,
        tva: 0.2 ,
        prixTTC: 0
    },
    {
        id:4,
        nomProduit:Etagère MALMOE,
        Image:https: https://www.cocktail-scandinave.fr/produit/etagere-bibiotheque-malmoe-2 ,
        prixHT: 185.00,
        tva: 0.2 ,
        prixTTC: 0


    //Tableau vide
let panier = [];

function afficherProduit(){
    let listeUL = document.getElementById("tableau")

    mesProduits.forEach((donnee) => {
        console.log(donnee)
        let listeItemLI = document.createElement("li");
        listeItemLI.className = "classeLI";
        listeItemLI.id = `monIdUnique-${donnee.id}`



        listeItemLI.innerHTML =
            `
        <p>${donnee.nomProduit}</p>
        <img src="${donnee.image}" alt="${donnee.nomProduit}" title="${donnee.nomProduit}">
      
     
        <p>RRIX HT : ${donnee.prixHT} €</p>
        <p>TAUX DE TVA : 20%</p>
        
        `

        //Ajouter les <li> au parent <ul>
        listeUL.appendChild(listeItemLI);

        //Click sur chaque <li>
        listeItemLI.addEventListener("click", () => {
            //Au clic on ajoute l'objet concerné au tableau apnier
            panier.push(donnee)
            //On cache le produit du tableau produit avec du css
            listeItemLI.style.display = "none"

            console.log("Le tableau panier sous forme d'onjet " + panier);
            //On appel la fonction affciherPanier qui boucle sur le tableau panier
            afficherPanier();
        });
    });
}



    

