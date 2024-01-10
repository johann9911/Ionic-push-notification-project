importScripts(
  "https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js"
);
importScripts(
  "https://masiv-push-cdn-prod.s3.amazonaws.com/PushMasivWeb_v2.0-prod/MasivPushWebServiceWorker-prod/masivPushWebService.js"
);

const pushWebService = new masivPushWebService(
  "1:962904260310:web:53a611753ac32e2c93d377"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBKPiK9IshLMWYT9odAmT8XQ4wfLc30oW8",
  authDomain: "masivianpush.firebaseapp.com",
  databaseURL: "https://masivianpush.firebaseio.com",
  projectId: "masivianpush",
  storageBucket: "masivianpush.appspot.com",
  messagingSenderId: "962904260310",
  appId: "1:962904260310:web:53a611753ac32e2c93d377",
  measurementId: "G-L52ZKBZX3N",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(async (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.data.title;
  const notificationBody = payload.data.message;
  const notificationImage = payload.data.imageUrl;

  var options = {
    body: notificationBody,
    image: notificationImage,
    data: payload.data,
  };

  self.registration.showNotification(notificationTitle, options);
  try {
    let respEventReceived = await pushWebService.registerEventReceived(
      payload.data
    );
    console.log("Response EventReceived: ", respEventReceived);
  } catch (e) {
    console.log("Error: ", e);
  }
});

self.addEventListener("notificationclick", async (event) => {
  console.log(event);
  try {
    let respEventOpened = await pushWebService.registerEventOpened(
      event.notification.data
    );
    console.log("Response EventOpened: ", respEventOpened);
  } catch (e) {
    console.log("Error: ", e);
  }
});
