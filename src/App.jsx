import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [showTimer, setShowTimer] = useState(true);
  // useEffect(()=>{*kodeblokk*},[*dependecy array])
  // useffect består av to hovedeler, en kodeblokk (hva som skal skje) og et dependency array (når det skal skje)
  // et tomt dependecy array betyr "kun på første render"
  // kodeblokken kan også inneholde en return statement, den kjører når du "dismounter" (av-tegner)
  // return skal inneholde en funklsjon, denne kalles en cleanup function

  useEffect(() => {
    //--------------------------
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    console.log("setinterval");

    //----------------------------

    return () => {
      clearInterval(timer);

      console.log("clearInterval");
    };
  }, [showTimer]);
  return (
    <>
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Stop" : "Start"}
      </button>
      {showTimer && <h1>{seconds}</h1>}
    </>
  );
}

export default App;
