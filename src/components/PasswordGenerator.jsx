import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef 
  const passwordRef = useRef()

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_{}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      console.log(pass);
    }

    setPassword(pass);
    // console.log(setPassword(pass + '/////23'));
  }, [length, numAllowed, charAllowed, setPassword]);

  
const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0 ,100);
    window.navigator.clipboard.writeText(password)
    
},[password])

  useEffect(() => {
    PasswordGenerator();
    // console.log(PasswordGenerator(password) + "////28");
  }, [length, numAllowed, charAllowed, PasswordGenerator]);

//   console.log("////////28");
//   console.log(PasswordGenerator());


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Generate Your Password"
            readOnly
            ref= {passwordRef}

          />

          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            
            COPY
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={8}
              max={100}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="lengthInput">Length : {length} </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers  </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="CharacterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="CharacterInput">Characters  </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;