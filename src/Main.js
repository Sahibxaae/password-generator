import React from 'react'

function Main(){
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