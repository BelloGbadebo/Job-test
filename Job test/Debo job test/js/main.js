 /*
  ==========================================================
 |Main javascript file of test page                
  ==========================================================
  */
class displayStatus{
/*================================================================================
|*This class is used to display and hide stuffs on the page in different ways |====================================
|*If the stuff to be displayed is to be displayed as a css "block", then the showStuffs() method of the class is called|===
|*If the stuff to be displayed is to be displayed as a css "flex", then the showFlexStuffs() method of the class is called|===============
|*If an element is to be hidden on the page, either it was displayed as "flex", or "block" the hideStuffs() method of the class is called|
========================================================================================================================================
*/
	/* The showStuffs() method displays stuffs as a "block" css style  */
	static showStuffs(stuff){
		stuff.style.display = "block";
	}
	/* The showFlexStuffs() method displays stuffs as a "flex" css style  */
	static showFlexStuffs(stuff){
		stuff.style.display = "flex";
	}
	static hideStuffs(stuff){
		stuff.style.display = "none";
	}
	/* The showInlineBlockStuffs() method displays stuffs as a "inline-css" css style  */
	static showInlineBlockStuffs(){
		stuff.style.display = "inline-block";
	}
}
//The function below shows the loader when the page loads and shows it for just 3 seconds
setTimeout(function(){showIt()}, 3000);
function showIt(){
	const loader = document.querySelector('#loader_container');
	const registerContainer = document.querySelector('#register_container');
	const registeredContainer = document.getElementById('registeredContainer');
	displayStatus.hideStuffs(loader);
	displayStatus.showFlexStuffs(registerContainer);
}
//showing password in plain letters when eye opener icon is clicked
function show_password(){ 
	const confirmPassword = document.querySelector('#confirmpassword');
	confirmPassword.type = "text"; //show password as plain text
	const eyeOpenBody = document.querySelector('#pass_show'); 
	const eyeClosedBody = document.querySelector('#pass_hide');
	displayStatus.hideStuffs(eyeOpenBody); //hides the eye open icon
	displayStatus.showStuffs(eyeClosedBody); // shows the eye closed icon
}
function hide_password(){
	const confirmPassword = document.querySelector('#confirmpassword');
	confirmPassword.type = "password"; //converts password from plain text to password format
	const eyeOpenBody = document.querySelector('#pass_show');
	const eyeClosedBody = document.querySelector('#pass_hide');
	displayStatus.hideStuffs(eyeClosedBody); //hides eye closed icon
	displayStatus.showStuffs(eyeOpenBody); //shows eye open icon
}
//Validating inputed password 
function valid_password(password){
/*=============================================================================================
| The inputed password by the user is validated to force the iser to input a secure password
| =========================================================================================
|*password must be atleast 8 characters long
|*password must start with an uppercase letter
|*password must contain a number 
|*an error message that indicates whats wrong with the inputted password pops up once a user starts typin in his password
|*wrong password formats input are highlighted in red
||*when the wrong inpout is corrected, the password is marked in green
|**************
|*The validation below uses try catch code blocks to catch different errors in the users inputs
|*an if statement in the try block check the input
|*if it returns false, it throes an exception
|*the catch block catches the exception an display errors based on the type of exception caught
 ============================================================================================*/
	try{
		if(password.charAt(0).search(/[A-Z]/g) == -1) throw "not capitalized"; //Password must start with an upper case lettter
		else{
			document.querySelector('#valid1').style.color = "";
		    document.querySelector('#valid1').style.background = "white";
		    displayStatus.showStuffs(document.querySelector('#checktoggle1'));
		    displayStatus.showStuffs(document.querySelector('#valid_password'));
		}
		if(password.search(/[0-9]/g) == -1) throw "no number"; // Password must contain atleast a number
		else{
			document.querySelector('#valid3').style.color = "";
		    document.querySelector('#valid3').style.background = "white";
		    displayStatus.showStuffs(document.querySelector('#checktoggle3'));
		    displayStatus.showStuffs(document.querySelector('#valid_password'));
		}
		if(password.length < 8) throw "password length issue"; // password must be atleast 8 characters long
		else{
			document.querySelector('#valid2').style.color = "";
		    document.querySelector('#valid2').style.background = "white";
		    displayStatus.showStuffs(document.querySelector('#checktoggle2'));
		    displayStatus.Stuffs(document.querySelector('#valid_password'));
		}
	}
	catch(err){
		if(err == "not capitalized"){ //if exception caught is "not capitalized"...when password does not start with a capital letter
		    document.querySelector('#valid1').style.color = "";
		    document.querySelector('#valid1').style.background = "rgb(241, 207, 204)";
		    displayStatus.hideStuffs(document.querySelector('#checktoggle1'));
		    displayStatus.showStuffs(document.querySelector('#valid_password'));
		}
		else if(err == "no number"){//if exception caught is "no number"...when password does not contain atleast a number
		    document.querySelector('#valid3').style.color = "red";
		    document.querySelector('#valid3').style.background = "rgb(241, 207, 204)";
		    displayStatus.hideStuffs(document.querySelector('#checktoggle3'));
		    displayStatus.showStuffs(document.querySelector('#valid_password'));
		}
		else if(err == "password length issue"){//if exception caught is "password length issue"..when password is lesser that 8 characters
		    document.querySelector('#valid2').style.color = "red";
		    document.querySelector('#valid2').style.background = "rgb(241, 207, 204)";
		    displayStatus.hideStuffs(document.querySelector('#checktoggle2'));
		    displayStatus.showStuffs(document.querySelector('#valid_password'));
		}
		else{
			displayStatus.hideStuffs(document.querySelector('#valid_password')); //closes the validation container after validation
		}
	}
	finally{
		window.addEventListener('click', function(){
			displayStatus.hideStuffs(document.querySelector('#valid_password')); // closes the validation container when it looses focus
		});
	}
}
//Comparing inputed passwords to check if password was correctly inputed
function comparePassword(){
	var password = document.querySelector('#password').value; //inputed password
	var passwordConfirm = document.querySelector('#confirmpassword').value; //inputed confirmed password
	var confirmPassword = (String(password) == String(passwordConfirm)) ? true : false; //check if they match
	if(confirmPassword == false){
		const passMismatch = document.querySelector('#pass_confirm'); //error message
		displayStatus.showStuffs(passMismatch); //show error message
		passMismatch.innerHTML = "Passwords do not match"; //error message to be displayed
	}
	else{
		//if password matches
		const passMismatch = document.querySelector('#pass_confirm');
		passMismatch.innerHTML = "Passwords match"; //shows success message
	}
}
//The function below makes sure all input fields are not empty
function check_empty(){
	const lastname = document.querySelector('#lastname').value;
	const firstname = document.querySelector('#firstname').value;
	const email = document.querySelector('#email').value;
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;
	const confirmPassword = document.querySelector('#confirmpassword').value;
	const gender = document.registrationForm.gender.value;
	if(lastname == "" || firstname == "" || email == "" || username == "" || password == "" || confirmpassword == "" || gender == ""){
		//If any field inputs is empty
		alert("All fields must be filled out")
	}
	else if(lastname !== "" && firstname !== "" && email !== "" && username !== "" && password !== "" && confirmpassword !== "" && gender !== ""){
		//If all inputs has been filled out 
		//Show loading animations till the server responds
		const pageOverlay = document.querySelector('#pageOverlay'); // Page overlay body
		const registeringLoader = document.querySelector('#registering_loader_container'); //Registration loader body
		displayStatus.showStuffs(pageOverlay);
		displayStatus.showFlexStuffs(registeringLoader);
/*=========================================================================================================================================
| All database queries are made in this code block, this is done because users has to fill in data appropriately to correct fields before |
| data is been sent to the database...Firebase is used for the backend|====================================================================
|======================================================================
|**********************************************************************************************************************
|**********************************************************************************************************************
|**********************************************************************************************************************
|==========================================================================================================================================*/
		const firestore = firebase.firestore();
		const settings = {/* your settings... */ timestampsInSnapshots: true};
		firestore.settings(settings);
		//Initialize Cloud Firestore through Firebase
        const db = firebase.firestore();
        db.collection("Registers").add({
        	lastname: lastname,
        	firstname: firstname,
        	email: email,
        	username: username,
        	password: confirmPassword,
        	Gender: gender
        })
        .then(function(docRef) {
        	console.log("Document written with ID: ", docRef.id);
        	window.location.assign('registered.html');
        })
        .catch(function(error) {
        	console.error("Error adding document: ", error);
        });
	}
}
function hey(){
	const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
	// Initialize Cloud Firestore through Firebase
    const registeredBody = document.querySelector('#registered_list');
    const registeredBodyDesktop = document.querySelector('#registered1');
    const db = firebase.firestore();
    db.collection("Registers").orderBy('lastname', 'asc').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    	const lastname = doc.data().lastname;
    	const firstname = doc.data().firstname;
    	const email = doc.data().email;
    	const username = doc.data().username;
    	const password = doc.data().password;
    	const gender = doc.data().Gender;
        //console.log(`${doc.id} => ${doc.data().lastname}`);
        registeredBody.innerHTML += `
        <li class='collection-item avatar' onclick="showDetails(this)">
           <img src='images/male_avatar.png' alt='' class='circle'>
           <span class='flow-text getName'>${doc.data().lastname} ${doc.data().firstname}</span>
           <p class="title userEmail">${doc.data().email}</p>
           <div class="hide userUsername">fataiBello</div>
            <div class="hide userGender">female</div>
        </li>
        `;
        registeredBodyDesktop.innerHTML +=`
        <div class="user" onclick="showDetails(this)">
            <div class="users z-depth-2" onclick="showDetails(this)">
                <div class="userImg ">
                    <img src="images/male_avatar.png" class="img">
                </div>
                    <div class="userDetails">
                        <div class="userName"><h5 class="getName">${lastname} ${firstname}</h5></div>
                        <div class="userEmail grey-text">${email}</div>
                        <div class="hide userUsername">${username}</div>
                        <div class="hide userGender">${gender}</div>
                    </div>
            </div>
        </div>
        `
      });
    });
}
function showDetails(data){
	const overlay = document.querySelector('#pageOverlay');
	const usersMoreBody = document.querySelector('#userMoreBody');
	const userBody = document.querySelector('#usersMore');
	displayStatus.showStuffs(overlay);
	displayStatus.showFlexStuffs(usersMoreBody);
	displayStatus.showStuffs(userBody);
	//getting values from clicked element
	const getName = data.getElementsByClassName('getName')[0].innerHTML;
	const getEmail = data.getElementsByClassName('userEmail')[0].innerHTML;
	const getUsername = data.getElementsByClassName('userUsername')[0].innerHTML;
	const getGender = data.getElementsByClassName('userGender')[0].innerHTML;
	//values to display
	var name = document.querySelector('#iname');
	var username = document.querySelector('#iusername');
	var email = document.querySelector('#iemail');
	var gender = document.querySelector('#igender');
	//Update values when user is clicked
	name.innerHTML = getName;
	username.innerHTML = getUsername;
	email.innerHTML = getEmail;
	gender.innerHTML = getGender;
}
function hideDetails(){
	const overlay = document.querySelector('#pageOverlay');
	const usersMoreBody = document.querySelector('#userMoreBody');
	const userBody = document.querySelector('#usersMore');
	displayStatus.hideStuffs(overlay);
	displayStatus.hideStuffs(usersMoreBody);
	displayStatus.hideStuffs(userBody);
}