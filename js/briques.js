
//Sources : https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over

/*Recup du canvas*/
let canvas = document.getElementById("monCanvas");
//Le contexte de rendu (2d ou 3d)
let context = canvas.getContext('2d');
//position de la balle abscisse
let x = canvas.width/2;
//position en bas au centre en ordonnées
let y = canvas.height-30;
//On ajoute a x et y une valeur pour le deplacement soit +2 en x et -2 en y pour quelle monte
//Ceci creer une diagonale
let dx = 2;
let dy = -2;
//Les collision = rayon de la balle
let ballRadius = 15;

//Le player
let playerHeight = 15;
let playerWidth = 100;

//Position horizontale du player
//lageur du canvas - largeur du player (75) / 2 pour la moitier
let playerX = (canvas.width - playerWidth) / 2

//Les booleens pour la pression des touche gauche et droite
let rightPressed = false;
let leftPressed = false;

//Evenement lors de pression et relachement des touches
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//Les briques
//3 ligne de biques
let brickRowCount = 3;
//5 briques par ligne
let brickColumnCount = 9;
//Largeur d'une brique 75 comme le player
let brickWidth = 75;
//Jauteur de la bique
let brickHeight = 20;
//Espace entre les briques
let brickPadding = 10;
//Marge en haut
let brickOffSetTop = 30;
//Marge a gauche
let brickOffSetLeft = 30;

//on creer un tableau de biques vide
let bricks = [];
//Boucle de lecture des colonnes
for(let c = 0; c < brickColumnCount; c++){
    //On rempli le tableau vide
    bricks[c] = [];
    //Boucle de lecture de lignes
    for(let r = 0; r < brickRowCount; r++){
        //Tableau a 2 dimenssion retourne un objet et les position x + y
        bricks[c][r] = {
            x: 0,
            y: 0,
            //On ajoute le status
            status:1
        }
    }
}


//Le score
let score = 0;

//Nombre de vies
let lives = 3;


//Afficher les vies
function drawLives(){
    context.font = "18px Arial";
    context.fillStyle = "#0095DD";
    context.fillText("VIES : " + lives, canvas.width - 80, 20);
}

//Fonction afficher le score
function drawScore(){
    //La police et la taille
    context.font = "18px Arial";
    //La couleur
    context.fillStyle = "#0095DD";
    //le texte + la position en x et y
    context.fillText("SCORE: " + score, 8, 20)
}

//Quand on appuie sur la touche
function keyDownHandler(event){
    if(event.key === "Right" || event.key === "ArrowRight"){
        rightPressed = true;
    }else if(event.key === "Left" || event.key === "ArrowLeft"){
        leftPressed = true;
    }
}

//Touche relachée
function keyUpHandler(event){
    if(event.key === "Right" || event.key === "ArrowRight"){
        rightPressed = false;
    }else if(event.key === "Left" || event.key === "ArrowLeft"){
        leftPressed = false;
    }
}

//Collison avec les briques
//Boucle des colonnes
function collisionDetection(){
    for(let c = 0; c < brickColumnCount; c++){
        for(let r = 0; r < brickRowCount; r++){
            //On stock ke collisonn dans une variable
            //b pour briques
            let b = bricks[c][r];
            //Si le status des brique est 1
            if(b.status === 1){

                //Si posX balle > a posX Brique et posX < posX brique + sa largeur
                //Si posY balle > a posY Brique et posY < posY brique + sa hauteur
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    //On inverse les directions en Y
                    dy = -dy;
                    //Le status de la brique passe de 1 a o = la bique disparait
                    b.status = 0;
                    //Si la brique disparait on incremente le score
                    score++;
                    //Si toutes les briques sont detruites
                    if(score === brickRowCount * brickColumnCount){
                        //Message
                        alert("BRAVO, VOUS AVEZ GAGNEZ !!!");
                        //Rechagement de la page
                        document.location.reload();
                        //et stop la balle

                    }
                }
            }
        }
    }
}


//Dessin de la balle
function drawBall(){
    //Entre begin et close path on dessine des elements
    context.beginPath();
    context.moveTo(50,50);
    //On dessine un rond = la balle
    //position x + position y + rayon du cercle + debut de l'angle + fin de l'angle
    context.arc(x, y, ballRadius, 0, Math.PI*2, false);
    //la couleur
    context.fillStyle = "#0095DD";
    //On colore le rond
    context.fill();
    context.closePath();
}

//Dessiner le player (rectangle)
function drawPlayer(){
    context.beginPath();
    //le rectangle
    //pos x, pos y, largeur et hauteur
    context.rect(playerX, canvas.height-playerHeight, playerWidth, playerHeight);
    context.fillStyle = "#a04040";
    context.fill();
    context.closePath();
}

//Dessinner le briques
//Tableau a 2 dimmension les lignes + les colonnes
function drawBricks(){
    //Boucle de lecture des colonnes
    for (let c = 0; c < brickColumnCount; c++){
        //Boucle de lecture des lignes
        for(let r= 0; r < brickRowCount; r++){

            //Si le status des biques est 1
            if(bricks[c][r].status === 1){
                //Position des briques en x
                //Nombre de brique * (lageur + padding)) + la marge externe
                let bricksX = (c * (brickWidth + brickPadding)) + brickOffSetLeft;
                //En y
                let bricksY = (r * (brickHeight + brickPadding)) + brickOffSetTop;
                //position de toutes les briques en x
                bricks[c][r].x = bricksX;
                bricks[c][r].y = bricksY;
                //Le dessin
                context.beginPath();
                //On dessine des rectangle
                //posX, posY, largeur, hauteur
                context.rect(bricksX, bricksY, brickWidth, brickHeight);
                //La couleur
                context.fillStyle = "#0095DD";
                //On colore les briques
                context.fill();
                //On ferme les forme
                context.closePath();
            }
        }
    }
}

//Deux fonction pour utiliser les touches (presser et relacher)



//On creer une fonction appelée en continu
function draw(){
    //Toute les 10ms le canevas efface l'ancienne position de la balle
    //Ceci a pour effet de ne pas laisser de trace
    context.clearRect(0,0, canvas.width, canvas.height);
    //on dessine les briques
    drawBricks();
    //Appel de la fonction dessine la balle
    drawBall();
    //Appel de la fonction dessine le player
    drawPlayer();
    //Les collision avec les briques
    collisionDetection();
    //Afficher le score
    drawScore();
    //Afficher les vies
    drawLives();

    //Les collision avec les bords du canvas

    //Si la position x + 2 > la largeur du canvas - 10 (rayon de la balle)
    //ou position x + 2 < 10
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
        //On inverse la direction
        dx = -dx
    }
    //Si la position y - 2 > la largeur du canvas - 10 (rayon de la balle)
    //ou position y - 2 < 10
    if(y + dy < ballRadius){
        //On inverse la direction
        dy = -dy
    }else if(y + dy > canvas.height - ballRadius){
        //le game over
        //Si pos de la balle est > a la pos du player et pos de la balle < pos du player + sa largeur
        //en gros si on loupe la balle
        if(x > playerX && x < playerX + playerWidth){
            dy = -dy;
        }else{
            lives--;
            if(!lives){
                alert("GAME OVER");
                document.location.reload();
            }else{

                //Reset de la position de la balle apres perte d'une vie
                x = canvas.width/2;
                y =  canvas.height-30;
                //La vitesse de la balle
                dx = 2;
                dy = -2;
                //Position du player
                playerX = (canvas.width-playerWidth)/2;

            }
        }
    }


    //Deplacement du player
    //Si on presse a droite et position du player x est < lageur du canvas - lageur du player
    if(rightPressed && playerX < canvas.width - playerWidth){
        //Vitesse du player
        playerX += 7;
    }else if(leftPressed && playerX > 0){
        playerX -= 7;
    }

    //on ajoute au position +2 en x et -2 en y
    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}

canvas.addEventListener('click', () => {

})
//Elle est appelée toutes 10ms
draw();

