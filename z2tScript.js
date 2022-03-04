
/*This is the very start of the Z2Tracker app on 3MAR2022.  I have no idea what I'm doing
Let's do this!*/

const { GarminConnect } = require('garmin-connect');                    //Links the library
const GCClient = new GarminConnect();                                   //Create a new Garmin Connect Client

//have to use the async function to be able to us await.
//must actually get logged in prior to asking for info.
const main = async () => {

await GCClient.login('email@email.com', 'Password1');            //Uses credentials from the garmin.config.json or uses supplied params
const userInfo = await GCClient.getUserInfo();

console.log(userInfo);

const myDevices = await GCClient.getDeviceInfo();

console.log(myDevices[0]);
};

main();

