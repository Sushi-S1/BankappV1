var config = {
    apiKey: "AIzaSyDtKc57CagQvztRh-c1hGlqqlYcPmk7dC8",
    authDomain: "bankapp-a2e08.firebaseapp.com",
    databaseURL: "https://bankapp-a2e08.firebaseio.com",
    projectId: "bankapp-a2e08",
    storageBucket: "bankapp-a2e08.appspot.com",
    messagingSenderId: "794692122802"
};
firebase.initializeApp(config);

$(function () {
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
    document.getElementById("createusername").value = "";
    document.getElementById("createemail").value = "";
    document.getElementById("createpass").value = "";
    document.getElementById("createpass2").value = "";
}

function createUSER(first, last, username, email, password) {
    firebase.database().ref('USERINFO/' + first + '/').set({
        First: first,
        Last: last,
        Username: username,
        Email: email,
        Password: password
    });

    firebase.database().ref('USERDATA/' + first + '/').set({
        CurrentDebt: 0,
        CurrentCredit: 0,
        CreditScore: 0
    });


}


function changeData(param){

var user = "Eagle";
var refrence = firebase.database().ref().child("USERDATA/" + user);
refrence.on("child_added", snap => {
  var credscore =  snap.child("CreditScore");
  var currcred =  snap.child("CurrentCredit");
  var currdebt =  snap.child("CurrentDebt");

document.getElementById("currentCREDIT").innerHTML =   credscore;
document.getElementById("currentBAL").innerHTML = "$" + currcred;
document.getElementById("currentDEBT").innerHTML = "$" + currdebt;


 });
/*
 var refrence2 = firebase.database().ref().child("USERHIST/" + user);
 refrence2.on("child_added", snap => {
   var dateLoan =  snap.child("CreditScore");
   var datePay =  snap.child("CurrentCredit");
   var lender =  snap.child("CurrentDebt");
 $("#currentCREDIT").append(credscore);
 $("#currentBAL").append(currcred);
 $("#currentDEBT").append(currdebt);
 document.getElementById("currentCREDIT").innerHTML =   credscore;
 document.getElementById("currentBAL").innerHTML = "$" + currcred;
 document.getElementById("currentDEBT").innerHTML = "$" + currdebt;


});*/
/*var user = "Chandan";

var database = firebase.database();
database.ref().once('child_added', function(snapshot){

            var content;
            content +="<tr>";
            content += "<td>" + user.DateLoaned[0] + "</td>";
            content += "<td>" + user.Paid+ "</td>";
            content += "<td>" + user.DatePaid + "</td>";
            content += "<td>" + user.LoanAMT+ "</td>";
            content += "<td>" + user.LoanFrom + "</td>";
            content += "<td>" + user.Notes + "</td>";
            content += "</tr>";

        $("#bodytable").append(content);
        document.getElementById("currentBAL").innerHTML = user.totalDebt;
        document.getElementById("currentDEBT").innerHTML = user.totalBalence;
        document.getElementById("currentCREDIT").innerHTML = user.totalcred;*/
};

$(document).ready(function(){
    $(".close").click(function(){
        $("#sucsessfully").alert("close");
    });
});


function SignUp() {
    var first = document.getElementById("createnamefirst").value;
    var last = document.getElementById("createnamelast").value;
    var username = document.getElementById("createusername").value;
    var email = document.getElementById("createemail").value;
    var password = document.getElementById("createpass").value;
    var password2 = document.getElementById("createpass2").value;
    if(first == "" || last == "" || username == "" || email == "" || password == ""){
    $("rip2").show();
    }
    else if (password != password2) {
        $("rip").show();
    } else {
        createUSER(first, last, username, email, password);
        $("#sucsessfully").show();
        clearCreate();

        $('#createmodal').modal('hide');
    }
}



function clearLogin()
{
  document.getElementById("username1").value = "";
  document.getElementById("password").value = "";
}


function val() {
    var infos = snapshot
    var userdata = atob(infos.user);
    var passdata = atob(infos.pass);
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var currUser;
    if (userdata.indexOf(username) != -1 && passdata.indexOf(password) != -1)
    {
        if (userdata.indexOf(username) != 3 && passdata.indexOf(password) != 3)
        {
        changeData(username);
        location.assign("transHist.html")
        currUser = username;
        }

        else if ((userdata.indexOf(username) == 3) && (passdata.indexOf(password) == 3))
        {

          location.assign("adminPg.html")

        }
        else
        {

          return

        }
    }
    else
    {
        clearLogin();

    }
}
