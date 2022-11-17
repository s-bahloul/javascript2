let quatriemeBloc = document.getElementById("bloc4");
quatriemeBloc.innerHTML = 
`
<div class = "contact">
    <h2 class = "h2-B4">CONTACT ME<h2>

    <form action="form-b3">
        <div class="formulaire">
            <lable for="nom"></lable>
            <input class = "formB4" type = "text" id="nom" placeholder="Full name">
        </div>
        <div class="formulaire">
            <lable for="email"></lable>
            <input class = "formB4" type = "email" id="email" placeholder="Email address">
        </div>

        <div class="formulaire">
            <lable for="nember"></lable>
            <input class = "formB4" type = "number" id="téléphone" placeholder="Phone number">
        </div>

        <div class="formulaire">
            <label for="message"></label>
            <input class="formB4"  id="message" rows="4" placeholder="Message"></input>
        </div>

    <button id="btn-form" class="btn-valider">Envoyer</button>
    </form>
</div>
`

  