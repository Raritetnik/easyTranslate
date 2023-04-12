import React, { useState } from "react";
import Flower from "./svg/flower";

function Field({ setInput }) {
  const [textInput, setTextInput] = useState("")

  return (
    <div className="field py-4">
      <Flower className="flower-right" fill="rgb(110, 146, 119)" />
      <Flower className="flower-left" fill="rgb(249, 148, 59)" />
      <h1>Translate App</h1>
      <div className="flex justify-center items-center">
        <label>Enter English </label>
        <input
            className="input px-4 py-2 mx-2 text-black"
            onChange={(e) => setTextInput(e.target.value)}
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClickCapture={() => {setInput(textInput)}}>Translate</button>
      </div>
    </div>
  );
}

export default Field;
