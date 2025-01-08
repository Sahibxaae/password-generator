  import React,{useState} from 'react'

  function Main(){
      const [password, setPassword] = useState("");
      const [length, setlength] = useState(6);
      const [includeUppercase, setIncludeUppercase] = useState(false);
      const [includeLowercase, setIncludeLowercase] = useState(false);
      const [includeNumbers, setIncludeNumbers] = useState(false);
      const [includeSymbols, setIncludeSymbols] = useState(false);

      const generatePassword = () =>{
          const upperCaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          const lowerCaseLetter ="abcdefghijklmnopqrstuvwxyz";
          const numbers = 1234567890;
          const symbols ="!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
          let characters = "";
          if(includeUppercase) characters += upperCaseLetters;
          if(includeLowercase) characters += lowerCaseLetter;
          if(includeNumbers) characters += numbers;
          if(includeSymbols) characters += symbols;
      
      if(characters === 0){
        alert("Please select atleast one character type");
      }
      let passwordGenerate = "";
      for(let i=0;i<length;i++){
        let random = Math.floor(Math.random()*characters.length);
        passwordGenerate += characters[random];
      }
      setPassword(generatePassword);
    };
    return (
      <div className='container'>
          <h1>Password generator</h1>
          <label htmlFor="textbox">Password length</label>
          <input type="text" id="textbox"/>
          <div>
              <input type="checkbox" name="include uppercase letters" id="uppercase" />
              <label htmlFor="uppercase">include uppercase letters</label>
              <input type="checkbox" name="include lowercase letters" id="lowercase" />
              <label htmlFor="lowercase">include lowercase letters</label>
              <input type="checkbox" name="include numbers" id="numbers" />
              <label htmlFor="numbers">include numbers</label>
              <input type="checkbox" name="include symbols" id="symbols" />
              <label htmlFor="symbols">include symbols</label>
          </div>
          <button>Generate password</button>
          <div>
              <label htmlFor="pwd">Generated password</label>
              <input type="text" id='pwd'/>
          </div>
      </div>
    )
  }

  export default Main