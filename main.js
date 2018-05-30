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

    // This has no effect because the fields are empty.
    // We need to determine what data will be going into the history
    // I want: Timestamp request was submited, date loan was taken out, loan amount, location of transaction
    firebase.database().ref('USERHIST/' + first).update({
        DateLoaned: [],
        // DatePaid: [],
        // LoanFrom: [],
        LoanAMT: [],
        Notes: []
    });
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


    firebase.database().ref('USERINFO/' + first).update({
        Email: email,
        First: first,
        Last: last,
        Password: password
    });

    firebase.database().ref('USERDATA/' + first).update({

        CreditScore: "0",
        CurrentCredit: "0.00",
        CurrentDebt: "0.00"

    });
    firebase.database().ref('USERHIST/' + first).update({
        DateLoaned: [""],
        DatePaid: [""],
        LoanFrom: [""],
        LoanAMT: [""],
        Notes: [""]

    });




};

function changeData(param) {

    var user = param;
    var refrencecred = firebase.database().ref().child("USERDATA/" + user + "/CreditScore/");

    refrencecred.on("value", snap => {

        document.getElementById("currentCREDIT").innerHTML = snap.val();

    });

    var refrencedebt = firebase.database().ref().child("USERDATA/" + user + "/CurrentDebt/");

    refrencedebt.on("value", snap => {


        document.getElementById("currentDEBT").innerHTML = "$" + snap.val();
    });


    var refrencecredit = firebase.database().ref().child("USERDATA/" + user + "/CurrentCredit/");

    refrencecredit.on("value", snap => {



        document.getElementById("currentBAL").innerHTML = "$" + snap.val();

    });



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

    var name = document.getElementById("username1").value;
    var password = document.getElementById("password").value;
    var firename;
    var firepass;



    var refrencename = firebase.database().ref().child("USERDATA/" + name + "/First");

    refrencename.on("value", snap => {

        firename = snap.val();

    });

    var refrencepass = firebase.database().ref().child("USERDATA/" + name + "/Password");

    refrencepass.on("value", snap => {


        firepass = snap.val();
    });



    if (((firename && firepass) !== undefined && (firename && firepass) !== null)) {
        if ((name == firename && password == firepass)) {
            location.assign("transHist.html")
            changeData(firename);

        } else {

            clearLogin();
            document.getElementById("wronglogin").innerHTML = "Incorrect name or password!"
            console.log("1")
            console.log(firename)
            console.log(firepass)
        }
    } else {
        clearLogin();
        document.getElementById("wronglogin").innerHTML = "Incorrect name or password!"
        console.log("2")
        console.log(firename)
        console.log(firepass)
    }
}
