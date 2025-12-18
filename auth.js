firebase.auth().onAuthStateChanged(user => {
  if(!user) return;

  firebase.database().ref("users/"+user.uid+"/role")
    .once("value", snap => {
      if(snap.val() === "admin"){
        location.href = "admin.html";
      } else {
        location.href = "user.html";
      }
    });
});
