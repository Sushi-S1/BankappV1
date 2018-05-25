$(function () {
  $('[data-toggle="popover"]').popover()
})


function loginOpen(){


  $("#loginmodal").modal();

}

function paydebtopen(){
  $("#paydebt").modal();
}

function getloanopen(){
  $("#loanmodal").modal();
}

var config = {
  apiKey: "AIzaSyDtKc57CagQvztRh-c1hGlqqlYcPmk7dC8",
  authDomain: "bankapp-a2e08.firebaseapp.com",
  databaseURL: "https://bankapp-a2e08.firebaseio.com",
  projectId: "bankapp-a2e08",
  storageBucket: "bankapp-a2e08.appspot.com",
  messagingSenderId: "794692122802"
};
firebase.initializeApp(config);

function createaccountopen(){
  $("#createmodal").modal();
}

function clearCreate(){
  document.getElementById("createnamefirst").value = "";
  document.getElementById("createnamelast").value = "";
  document.getElementById("createpass").value = "";
  document.getElementById("createpass2").value = "";
}

function clearLOGIN(){
  document.getElementById("username1").value = "";
  document.getElementById("password").value = "";

}
function createUSER(){

}


function changeData(param){
var user = param;

/*var database = firebase.database();
database.ref().once(user, function(snapshot){
    if(snapshot.exists()){
        var content = "";

        snapshot.forEach(function(data){
          var i = 0;
            var val = data.val();
            content +="<tr>";
  //          content += "<th scope="row">" + i + "</th>";
            content += "<td>" + user.DateLoaned[0] + "</td>";
            content += "<td>" + user.Paid+ "</td>";
            content += "<td>" + user.DatePaid + "</td>";
            content += "<td>" + user.LoanAMT+ "</td>";
            content += "<td>" + user.LoanFrom + "</td>";
            content += "<td>" + user.Notes + "</td>";
            content += "</tr>";
        });
        $("transHist > tbody").append(content);
        document.getElementById("currentBAL").innerHTML = user.totalDebt;
        document.getElementById("currentDEBT").innerHTML = user.totalBalence;
        document.getElementById("currentCREDIT").innerHTML = user.totalcred;
    }
});
};*/

function clearLogin(){
  document.getElementById("username1").value = "";
  document.getElementById("password").value = "";
}


}
function val() {
    var infos = snapshot
    var userdata = atob(infos.user);
    var passdata = atob(infos.pass);
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var currUser;
    if (userdata.indexOf(username) != -1 && passdata.indexOf(password) != -1) {
        if (userdata.indexOf(username) != 3 && passdata.indexOf(password) != 3) {
        changeData(username);
        location.assign("transHist.html")
        currUser = username;
        }

        else if ((userdata.indexOf(username) == 3) && (passdata.indexOf(password) == 3)){

          location.assign("adminPg.html")

        }
        else{

          return

        }
    }



    else {
        clearLogin();





    }
}


// trans hist
