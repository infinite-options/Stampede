import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

// import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";


import moment from "moment";

export default function Time(props) {


  //For Axios.Get
  const [startTime, setStartTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [timeHasBeenChanged, setTimeHasBeenChanged] = useState(true);
  const [times, setTimes] = useState([]);

  //For Axios.Post
  const [start, setStart] = useState("");
  const [remaining, setRemaining] = useState("");
  const [current, setCurrent] = useState("");

  //event handlers
  const handleTimeStarting = (newStart) => {
    setStart(newStart);
  };

  const handleTimeRemaining = (newRemaining) => {
    setRemaining(newRemaining);
  };

  const handleCurrentTime = (newCurrent) => {
    setCurrent(newCurrent);
  };

  useEffect(() => {
    if (timeHasBeenChanged) {
      axios
        .get(
          "https://something" 
        )
    }
    setTimeHasBeenChanged(false);
  });

  function setTimer(start, remaining, current) {
    
      const sendTime = 0;
      //do the math to get the timer
      //sendTime = what ever number we get
      //compare backend time with system time... system time is more accurate
      setTimes(sendTime);
    
  }



  return (
    <div>
      <button onClick={setTimer}>Start Timer</button>
    </div>
  );
}
