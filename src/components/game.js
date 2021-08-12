// const {
//     Worker,
//     isMainThread,
//     parentPort,
//     workerData,
//     threadId,
//     MessageChannel,
//   } = require("worker_threads");
  
  const envConfig = require("dotenv").config();
  const express = require("express");
  const Ably = require("ably");
  const p2 = require("p2");
  const app = express();
  const ABLY_API_KEY = process.env.ABLY_API_KEY;
  const globalGameName = "main-game-thread";
  const GAME_ROOM_CAPACITY = 6;
  let globalChannel;
  let activeGameRooms = {};
  
  // instantiate to Ably
  const realtime = Ably.Realtime({
    key: ABLY_API_KEY,
    echoMessages: false,
  });


// wait until connection with Ably is established
realtime.connection.once("connected", () => {
    globalChannel = realtime.channels.get(globalGameName);
    // subscribe to new players entering the game
    globalChannel.presence.subscribe("enter", (player) => {
      generateNewGameThread(
        player.data.isHost,
        player.data.nickname,
      );
    });
});

function generateNewGameThread(
    isHost,
    hostNickname,
  ) {
    if (isHost && isMainThread) {
      const worker = new Worker("./game2.js", {
        workerData: {
          hostNickname: hostNickname,
        },
      });
      console.log(`CREATING NEW THREAD WITH ID ${threadId}`);
      worker.on("error", (error) => {
        console.log(`WORKER EXITED DUE TO AN ERROR ${error}`);
      });
      worker.on("exit", (code) => {
        console.log(`WORKER EXITED WITH THREAD ID ${threadId}`);
        if (code !== 0) {
          console.log(`WORKER EXITED DUE TO AN ERROR WITH CODE ${code}`);
        }
      });
    }
  }