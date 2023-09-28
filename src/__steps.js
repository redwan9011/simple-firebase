/**
 * 
        -------------
        INITIAL INSTALLATION
        -------------
 1. visit: console.firebase.google.com
 2. create a project (skip the google analytics)
 3. register app (create config)
 4. install firebase : npm install firebase
 5. add config file to your projects
 6. DANGER: Do not publish or make firebase config to public by pushing those to github

        ----------------------
        INTEGRATION
        ----------------------
 7. go to docs > build > authentication > web > get started
 8. export app from the firebase.config.js file : export default app
 9. login.jsx: import getAuth form firebase/auth
 10. create  const auth = getAuth(app)

        --------------------
        PROVIDER SETUP
        --------------------

 11. import GoogleAuthProvider and create a new provider
 12. use signWithPopup and pass auth and provider
 13. activate sign in method(google, Facebook, Github)
 14. [vite]: change 127.0.0.1 to localhost:
 */