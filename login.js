
if(localStorage.getItem("fname") != undefined){
  window.location.href = "index.html";
}

// Tableau pour stocker les utilisateurs
var users = [
    {
      fname: "Razane",
      lname: "Zouine",
      phone: "0644640879",
      email: "razane@gmail.com",
      password: "rrrr"
    }
  ];
  
  // Validation de connexion
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
  
    // Vérification de l'email et du mot de passe
    var foundUser = users.find(function(user) {
      return user.email === email && user.password === password;
    });
  
    if (foundUser) {
      // Connexion réussie, rediriger ou effectuer d'autres actions nécessaires
      alert('Connexion réussie !');
      window.location.href = "index.html";
    } 
    else {
      // Afficher un message d'erreur en cas d'échec de connexion
      alert('Erreur de connexion. Veuillez saisir un email et un mot de passe valides.');
    }
});
// Validation et enregistrement de l'utilisateur lors de l'inscription
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var lname = document.getElementById('signup-lname').value;
    var fname = document.getElementById('signup-fname').value;
    var email = document.getElementById('signup-email').value;
    var phone = document.getElementById('signup-phone').value;
    var password = document.getElementById('signup-password').value;

    // Vérification si tous les champs sont remplis
    if (lname && fname && phone && email && password) {
      // Création d'un objet utilisateur
      var user = {
        fname: fname,    
        lname: lname,    
        phone: phone,
        email: email,
        password: password
      };

      // Ajout de l'utilisateur au tableau
      users.push(user);

      //save

      localStorage.setItem("fname", fname)
      localStorage.setItem("lname", lname)
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      

      // Réinitialisation des champs du formulaire
      document.getElementById('signup-lname').value = '';
      document.getElementById('signup-fname').value = '';
      document.getElementById('signup-email').value = '';
      document.getElementById('signup-phone').value = '';
      document.getElementById('signup-password').value = '';

      // Affichage d'un message de succès (tu peux personnaliser ceci selon tes besoins)
      alert('Inscription réussie !');
    } else {
      // Affichage d'un message d'erreur si tous les champs ne sont pas remplis
      alert('Veuillez remplir tous les champs.');
    }
  });