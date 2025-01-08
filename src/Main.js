import React, { useState } from "react";

function Main() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = 1234567890;
    const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
    let characters = "";
    if (includeUppercase) characters += upperCaseLetters;
    if (includeLowercase) characters += lowerCaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters.length === 0) {
      alert("Please select atleast one character type");
      return;
    }
    let passwordGenerate = "";
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * characters.length);
      passwordGenerate += characters[random];
    }
    setPassword(passwordGenerate);
  };

  return (
    <div className="container">
      <div className="display">
        <h1>Password generator</h1>
        <div className="pwd-length">
          <label htmlFor="lengthbox">Password length:</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            id="lengthbox"
            min="4"
            max="20"
          />
        </div>
        <div className="checkboxes">
          <div className="check">
            <input
              type="checkbox"
              name="include uppercase letters"
              id="uppercase"
              onChange={(e) => setIncludeUppercase(!includeUppercase)}
            />
            <label htmlFor="uppercase">include uppercase letters</label>
          </div>
          <div className="check">
            <input
              type="checkbox"
              name="include lowercase letters"
              id="lowercase"
              onChange={(e) => setIncludeLowercase(!includeLowercase)}
            />
            <label htmlFor="lowercase">include lowercase letters</label>
          </div>
          <div className="check">
            <input
              type="checkbox"
              name="include numbers"
              id="numbers"
              onChange={(e) => setIncludeNumbers(!includeNumbers)}
            />
            <label htmlFor="numbers">include numbers</label>
          </div>
          <div className="check">
            <input
              type="checkbox"
              name="include symbols"
              id="symbols"
              onChange={(e) => setIncludeSymbols(!includeSymbols)}
            />
            <label htmlFor="symbols">include symbols</label>
          </div>
        </div>
        <button onClick={generatePassword} className="pwd-btn">
          Generate password
        </button>
        <div className="pwd">
          <label htmlFor="pwd">Password</label>
          <input type="text" id="pwd" value={password} readOnly />
        </div>
      </div>
    </div>
  );
}

export default Main;
