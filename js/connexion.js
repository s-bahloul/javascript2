//on va créer les variable de connexion
const email = "email@com";
const password = "Passw@38800";

//nombre aléatoire
const nombre = Math.round(Math.random()*1000);
let afficherNombre =document.getElementById("afficherNombre")
afficherNombre.innerHTML = nombre

//on declare la variable false pour valider ou pas la connexion
let justConnexion = false;

//appeler la fonction
function connexion(){
    //appeler les trois valeurs des input
    let emailUtilisateur =document.getElementById("email").value;
    let passwordUtilisateur = document.getElementById("password").value;
    let nombreAleatoire = document.getElementById("nombre_a").value;
    //pour le debeg
    console.log("Entrer Email =" +  emailUtilisateur );
    console.log("Entrer mot de passe = " +  passwordUtilisateur);
    console.log("Entrer un chifre entre 0 et 999 =" + nombreAleatoire);
    //console.log(nombre)

    //champ  vide
    if(emailUtilisateur === "" || passwordUtilisateur === "" || nombreAleatoire === "" ){
        //afficher
        justConnexion = false;
        

        let diverreur = document.getElementById("erreur");
        diverreur.innerHTML = "Remplir tout les champs";
        console.log("erreur de connexion" + justConnexion )
    }else{
        //si le mail et le MP et le nombre sont bon
        if(emailUtilisateur === email && passwordUtilisateur === password && nombreAleatoire == nombre){
            justConnexion = true;
            console.log("Connectez" + justConnexion);

            //une fois connecté
            if(justConnexion){
                document.getElementById("form-ctnr").style.display = "none";
            //faire apparaitre le loader
            let loader = document.getElementById("loader");
            loader.className = "loader";
           

            function redirect(){
                 window.location ="accueil.html";
                console.log("connexion");
                }
                setTimeout(redirect(), 2000);
            }
            
        }else{
            console.log("Erreur email + mot de passe !")
        }
    }


  

