// const {
//     Worker,
//     isMainThread,
//     parentPort,
//     threadId,
//     workerData,
// } = require("worker_threads");
  const envConfig = require("dotenv").config();
  const Ably = require("ably");

  
  const ABLY_API_KEY = process.env.ABLY_API_KEY;

  
  let players = {};
  let playerChannels = {};
  let gameOn = false;
 
  let totalPlayers = 0;
//   let hostNickname = workerData.hostNickname;
  let gameRoom;

  
// instantiate to Ably
const realtime = Ably.Realtime({
    key: ABLY_API_KEY,
    echoMessages: false,
});


realtime.connection.once("connected", () => {
    function startGame(){
        gameOn = true;
    }
    function startGame(){
        gameOn = true;
        console.log("The game has started!");
        document.write("The game has started!");
    }
})