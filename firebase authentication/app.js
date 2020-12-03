let login = () => {
  // create app in developers for facebook app then paste the Id and password into the firebase application
  // and enable the authentication than paste the all required links of firebase authentication
  // then create product of fb social and paste the link of firebae auth link
  //then click save 
  // add local server from chrome extensin chrome web server
 // then create privacy policy if dont run on incognito mode
  // paste the link of privacy policy into developers facebook 
  // and also paste into quick start site link 
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  window.location = "index.html"
  console.log("user data ",user)
  console.log("Welcome ",user.displayName)
  // display facebook user name
  // ...
}).catch(function(error) {
  // Handle Errors here.
  
  var errorMessage = error.message;
  console.log(errorMessage)
});
}

let signOut = () => {
  firebase.auth().signOut()
  .then(()=>{
    window.location = "login"
  })
  .catch(()=>{
    window.location = "try again"
  })
}
