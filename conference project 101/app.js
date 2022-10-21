const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".cont");

left.addEventListener("mouseenter", e => {
  container.classList.add("hover-left");
});
left.addEventListener("mouseleave", e => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", e => {
  container.classList.add("hover-right");
});
right.addEventListener("mouseleave", e => {
  container.classList.remove("hover-right");
});

const signUpPageLink = document.querySelector('#signup-page-link');
const loginPageLink = document.querySelector('#login-page-link');
const wrapper = document.querySelector('.wrapper');

const loginButton = document.querySelector('#signup-button');
const loginEmail = document.querySelector('#signup-email');
const loginPassword = document.querySelector('#signup-password');
const loginTitle = document.querySelector('#signup-title');
const loginName = document.querySelector('#signup-name');
const loginSurname = document.querySelector('#signup-surname');
const loginOrganization = document.querySelector('#signup-organization');

const signoutButton = document.querySelector('#signout-button');

// Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyCQoexxyoMjn6sWeTMZQAa-UnmR29E1yZU",
            authDomain: "conference-ab26d.firebaseapp.com",
            projectId: "conference-ab26d",
            storageBucket: "conference-ab26d.appspot.com",
            messagingSenderId: "479712284243",
            appId: "1:479712284243:web:b98ac4de84a31f5b7a80a6",
            measurementId: "G-QED5JR7VG2"
          };
        
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          const auth = firebase.getAuth();
    

signUpPageLink.addEventListener('click', function(){
    wrapper.style.top = '-100%';
})
loginPageLink.addEventListener('click', function(){
    wrapper.style.top = '0%';
})
signUpButton.addEventListener('click', function(){
    auth.createUserWithEmailAndPassword(signUpEmail.value, signUpPassword.value)
    .then(userCredential.user)=> {
        var user = userCredential.user;
        var currentUser = auth.currentUser;
        currentUser.updateProfile({
            displayName: signUpName.value,
        })
   })
    .catch((error) => {
        console.log(e.message);
      });     
});
signoutButton.addEventListener('click', function(){
    auth.signOut();
 
})
auth.onAuthStateChanged('user)=>{
    if(user){
        wrapper.style.display = 'none'
    }else{
        wrapper.style.display = 'block';
    }
})