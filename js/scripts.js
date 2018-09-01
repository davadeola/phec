AOS.init();
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB_tfW8uAT1rFDqm23TNT5UCIAP-OVjcTI",
  authDomain: "phec-619ee.firebaseapp.com",
  databaseURL: "https://phec-619ee.firebaseio.com",
  projectId: "phec-619ee",
  storageBucket: "",
  messagingSenderId: "17767272575"
};
firebase.initializeApp(config);
// Get a reference to the database service
var ref = firebase.database().ref();
var flowers;

$(document).ready(function() {

  ref.once("value", function(snapshot) {
    flowers = snapshot.val();
    for (var color in flowers) {
      if (flowers.hasOwnProperty(color)) {
        flowers[color].forEach(function(flower) {
          $("#nav-" + color + " .card-columns").append(' <div class="card" id="my' + flower.image + '" data-toggle="modal" data-target="#' + flower.image + 'Modal"><img class="card-img-top" src="https://gdurl.com/' + flower.image + '" alt="' + flower.name + ' image"/><div class="card-body"><h3 class="card-title text-center">' + flower.name.toUpperCase() + '</h3></div></div>');
          $(".showUp").append('<div class="modal fade" id="' + flower.image + 'Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h1>' + flower.name.toUpperCase() + '</h1><button type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><div class="row"><div class="col-md-12"><img class="card-img-top" src="https://gdurl.com/' + flower.image + '" alt="' + flower.name + ' image"/></div></div><div class="row"><div class="col-md-12"><p class="card-text text-left common-text">' + flower.description + '</p><p class="card-text common-text"><small class="text-muted">' + flower.type + '</small></p></div></div></div></div></div></div>');
        });
      };
    };

  }, function(error) {
    console.log("Error is " + error.code);
  });

  setInterval(function() {

    $(".showWeb").css("display", "block").fadeIn("slow");
    $(".loading-screen").fadeOut(150);
  }, 7500);

});
