// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDD0AfymAVweErHAHGYHs8QyGkxTWw46tU",
    authDomain: "todolistapp-5b548.firebaseapp.com",
    databaseURL: "https://todolistapp-5b548.firebaseio.com",
    projectId: "todolistapp-5b548",
    storageBucket: "todolistapp-5b548.appspot.com",
    messagingSenderId: "958486896692"
  }
};
