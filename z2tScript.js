
/*This is the very start of the Z2Tracker app on 3MAR2022.  I have no idea what I'm doing
Let's do this!*/

const { GarminConnect } = require('garmin-connect');                    //Links the library
const GCClient = new GarminConnect();                                   //Create a new Garmin Connect Client

console.log(GCClient);


await GCClient.login('sean.kenneday@gmail.com', 'Z24theWin');            //Uses credentials from the garmin.config.json or uses supplied params

const userInfo = await GCClient.getUserInfo();


console.log(userInfo);