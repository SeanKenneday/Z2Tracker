
/*This is the very start of the Z2Tracker app on 3MAR2022.  I have no idea what I'm doing
Let's do this!*/

const { GarminConnect } = require('garmin-connect');                    //Links the library
const GCClient = new GarminConnect();                                   //Create a new Garmin Connect Client
let username = Username;
let password = Password;

//log in page code

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


/*The following code excecutes when the loginButton is clicked.
Prevents the default behavior of clicking the login (submit) button of submitting the form 
data.
Gets the data input in the username and password fields of the form by:
formElement.nameOfField, where formElement is HTML <form> and nameOfField is the value 
given to the name attribute of the <input> element.
Check to see of the user name and password match the predefined values.
If so display an alert dialog box with the success message.  If not, change the
opacity of the CSS style for the HTML element login-error-msg to unhide the message.
*/
loginButton.addEventListener("click", (event) => {
    event.preventDefault();   
    //
    username = loginForm.username.value;
    password = loginForm.password.value;

   /* if (username === "user" && password ==="web_dev") {
        alert("You have successfully logged in");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }*/
    alert("got the info")



//this code is to connect to the Garmin Connect Client and get information



//have to use the async function to be able to use await.
//must actually get logged in prior to asking for info.
const main = async () => {

await GCClient.login(username, password);            //Uses credentials from the garmin.config.json or uses supplied params
const userInfo = await GCClient.getUserInfo();

console.log(userInfo);

const myDevices = await GCClient.getDeviceInfo();

alert(`Your watch is a ${myDevices[0][0]}`);
};

main();
})


