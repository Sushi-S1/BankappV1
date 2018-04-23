var attempt = 3;
var i;
var info = '{"firstname": ["John", "Billy", "barry","admin"], "lastname": ["doe", "bob", "allen", "pass"], "user": ["john", "billy", "barry", "admin"], "pass": ["1234", "3212", "4554", "password"] }';
//var info = <?php echo json_encode($userInfo)?>;
var debtj = 0;
var moneyj = 0;
var debtb1 = 0;
var moneyb1 = 0;
var debtb2 = 0 ;
var moneyb2 = 0;

function val() {
    var infos = JSON.parse(info);
    var userdata = infos.user
    var passdata = infos.pass
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var currUser;
    if (userdata.indexOf(username) != -1 && passdata.indexOf(password) != -1) {
        if (userdata.indexOf(username) != 3 && passdata.indexOf(password) != 3) {
        //changeData();
        location.assign("mainPage.html")
        currUser = username;
        }

        else if ((userdata.indexOf(username) == 3) && (passdata.indexOf(password) == 3)){

          location.assign("adminPg.html")

        }
        else{

          return

        }
    }

    else if (attempt == 0) {
      M.toast({html: "To many tries. Please try again later."})
          document.getElementById("submit").className = "btn disabled";
      }

    else {
        validate();
        attempt--;
         M.toast({html: "Wrong username or password. Please try again."})



    }
}

function takeLoan(){

}

function depositMoney(){

}

function changeData(){

  if (currUser = "john"){
    document.getElementById("debt").innerHTML = debtj;
    document.getElementById("balance").innerHTML = moneyj;

  }

  else if (currUser = "billy"){
    document.getElementById("debt").innerHTML = debtb1;
    document.getElementById("balance").innerHTML = moneyb1;
  }

  else if (currUser = "barry"){
    document.getElementById("debt").innerHTML = debtb2;
    document.getElementById("balance").innerHTML = moneyb2;
  }
  else {
    return
  }

}

function calcIntrest(yr, mon, day, yr2, mon2, day2) {

  var original = 11.3
  var single = 24*60*60*1000;
  var loanStart = new Date(yr,mon,day);
  var LoanEnd = new Date(yr2,mon2,day2);
  var time = Math.round((Math.abs((loanStart.getTime() - LoanEnd.getTime())/(single)))-(1));
  var final = (original) + (time * 0.1);
  final = Math.round(100*final)/100;
  //console.log(final);
  document.getElementById("debt").innerHTML = "$" + final;
}



function addAccount() {
  location.assign("createAccount.html")
}

function validate() {
  document.getElementById("Username").value = "";
  document.getElementById("Password").value = "";
}

function createVal(){

  if ((document.getElementById("createUser").value != "") && (document.getElementById("createPass").value != "")){
    var infos2 = JSON.parse(info);
    var createUsername = document.getElementById("createUser").value;
    var createPassword = document.getElementById("createPass").value;
    infos2.user.push({
      user: createUsername
    });
    infos2.pass.push({
      pass: createPassword
    });
    txt = JSON.stringify(infos2);
    console.log(info);
    clearCreate();
    location.assign("index.html")
    M.toast({html: "Succsess! New account created!"})

  }
  else {
    M.toast({html: "Please fill out all fields."})
  }
}

function send(){
  location.assign("index.html")

}

function clearCreate(){
  document.getElementById("createUser").value = "";
  document.getElementById("createPass").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
}

function borrowpg(){
  location.assign("borrow.html")

}

function lendpg(){
  location.assign("lend.html")

}

function homepg(){
  location.replace("index.html")
  validate();
}

function userCheck(){

}

function showHist(){
  location.assign("transactionHist.html")
}
