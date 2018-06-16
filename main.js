var config = {
    apiKey: "AIzaSyDtKc57CagQvztRh-c1hGlqqlYcPmk7dC8",
    authDomain: "bankapp-a2e08.firebaseapp.com",
    databaseURL: "https://bankapp-a2e08.firebaseio.com",
    projectId: "bankapp-a2e08",
    storageBucket: "bankapp-a2e08.appspot.com",
    messagingSenderId: "794692122802"
};
firebase.initializeApp(config);

$(function() {
    $('[data-toggle="popover"]').popover()
})

function validatedropdown() {

}

function signout() {
    window.location.assign("index.html");
}

function loginOpen() {
    $("#loginmodal").modal();
}

function paydebtopen() {
    $("#paydebt").modal();
}

function getloanopen() {
    $("#loanmodal").modal();
}

function clearLOGIN() {
    document.getElementById("username1").value = "";
    document.getElementById("password").value = "";
}

function createaccountopen() {
    $("#createmodal").modal('toggle');
}

function clearCreate() {
    document.getElementById("createnamefirst").value = "";
    document.getElementById("createnamelast").value = "";
    document.getElementById("createemail").value = "";
    document.getElementById("createpass").value = "";
    document.getElementById("createpass2").value = "";
}

function createUSER(first, last, email, password) {

    firebase.database().ref('USERINFO/' + first).add({
        Email: email,
        First: first,
        Last: last,
        Password: password
    });

    firebase.database().ref('USERDATA/' + first).add({
        CreditScore: "0",
        CurrentCredit: "0.00",
        CurrentDebt: "0.00"
    });

    firebase.database().ref('USERHIST/' + first).add({
        DateLoaned: [""],
        DatePaid: [""],
        LoanFrom: [""],
        LoanAMT: [""],
        Notes: [""]
    });
};

function changeData(param) {

<<<<<<< HEAD
var user = param;
    var refrencecred = firebase.database().ref().child("USERDATA/" + user + "/CreditScore/");

    refrencecred.on("value", snap => {
=======
    var user = "Chandan";
>>>>>>> c0eadf8e24e875947a116cb489b7f4294c8b8a2a

    var referencecred = firebase.database().ref().child("USERDATA/" + user + "/CreditScore/");
    referencecred.on("value", snap => {
        document.getElementById("currentCREDIT").innerHTML = snap.val();
    });

    var referencedebt = firebase.database().ref().child("USERDATA/" + user + "/CurrentDebt/");
    referencedebt.on("value", snap => {
        document.getElementById("currentDEBT").innerHTML = "$" + snap.val();
    });

    var referencecredit = firebase.database().ref().child("USERDATA/" + user + "/CurrentCredit/");
    referencecredit.on("value", snap => {
        document.getElementById("currentBAL").innerHTML = "$" + snap.val();
    });

<<<<<<< HEAD
   document.getElementById("welcome").innerHTML = "Welcome, " + user


=======
    /*var user = "Chandan";
>>>>>>> c0eadf8e24e875947a116cb489b7f4294c8b8a2a



};
<<<<<<< HEAD
=======
// CHANGE TABLE DATA
// Tied to the "Dark" button
function changeTable(user, num) {

    var dateloaned = firebase.database().ref().child("USERHIST/" + user + "/DateLoaned/" + num + "/");
    dateloaned.on("value", snap => {
        if (snap.val() != null) {
            document.getElementById(num + "-dl").innerHTML = snap.val();
        } else {
            return "-"
        }
    });

    var datedue = firebase.database().ref().child("USERHIST/" + user + "/DateDue/" + num + "/");
    datedue.on("value", snap => {
        document.getElementById(num + "-dd").innerHTML = snap.val();
    });

    var datepaid = firebase.database().ref().child("USERHIST/" + user + "/DatePaid/" + num + "/");
    datepaid.on("value", snap => {
        document.getElementById(num + "-dp").innerHTML = snap.val();
    });

    var dayslate = firebase.database().ref().child("USERHIST/" + user + "/DaysLate/" + num + "/");
    dayslate.on("value", snap => {
        document.getElementById(num + "-dla").innerHTML = snap.val();
    });

    var loanamt = firebase.database().ref().child("USERHIST/" + user + "/LoanAMT/" + num + "/");
    loanamt.on("value", snap => {
        document.getElementById(num + "-ab").innerHTML = snap.val();
    });

    var amountpaid = firebase.database().ref().child("USERHIST/" + user + "/AmountPaid/" + num + "/");
    amountpaid.on("value", snap => {
        document.getElementById(num + "-ap").innerHTML = snap.val();
    });

    var notes = firebase.database().ref().child("USERHIST/" + user + "/Notes/" + num + "/");
    notes.on("value", snap => {
        document.getElementById(num + "-n").innerHTML = snap.val();
    });
}

function changeTheData(max) {
    changeData("Eagle");
    for (var i = 0; i < max; i++) {
        changeTable("Eagle", i+1);
    }
}

>>>>>>> c0eadf8e24e875947a116cb489b7f4294c8b8a2a
$(document).ready(function() {
    $(".close").click(function() {
        $("#sucsessfully").alert("close");
    });
});


function SignUp() {
    var first = document.getElementById("createnamefirst").value;
    var last = document.getElementById("createnamelast").value;

    var email = document.getElementById("createemail").value;
    var password = document.getElementById("createpass").value;
    var password2 = document.getElementById("createpass2").value;

    if (first == "" || last == "" || email == "" || password == "" || password2 == "") {
        document.getElementById("fillout").innerHTML = "Please fill out all the fields."
    } else if (password != password2) {
        document.getElementById("passdontmatch").innerHTML = "Passwords don't match!"
    } else {
        createUSER(first, last, email, password);
        $("#sucsessfully").show();
        clearCreate();
        $('#createmodal').modal('hide');
        $('#fillout').modal('hide');
        loginOpen();
        //$("#TOS").modal();
    }
}



function clearLogin() {
    document.getElementById("username1").value = "";
    document.getElementById("password").value = "";
}


function val() {
<<<<<<< HEAD
    var name = document.getElementById("username1").value;
    var password = document.getElementById("password").value;
    var refrencename = firebase.database().ref().child("USERINFO/" + name + "/First/");
    var firename = null;
    refrencename.on("value", snap => {
      firename = snap.val();

=======
    var firename;
    var firepass;

    var name = document.getElementById("username1").value;
    var password = document.getElementById("password").value;

    var refrencename = firebase.database().ref().child("USERINFO/" + name + "/First/");
    refrencename.on("value", snap => {
      firename = refrencename.val();
>>>>>>> c0eadf8e24e875947a116cb489b7f4294c8b8a2a
    });
    var refrencepass = firebase.database().ref().child("USERINFO/" + name + "/Password/");
<<<<<<< HEAD
    var firepass = null;
    refrencepass.on("value", snap => {
      firepass = snap.val();
      if ((((firename && firepass) !== undefined && (firename && firepass) !== null)) && (name && password) !== "") {
              if ((name == firename && password == firepass)) {

                  location.assign("transHist.html");
              changeData(name);
              } else {

                  clearLogin();
                  document.getElementById("wronglogin").innerHTML = "Incorrect name or password!"
=======
    refrencepass.on("value", snap => {
      firepass = refrencepass.val();
    });

>>>>>>> c0eadf8e24e875947a116cb489b7f4294c8b8a2a

              }
          } else {
              clearLogin();
              document.getElementById("wronglogin").innerHTML = "Incorrect name or password!"

          }
    });

}
