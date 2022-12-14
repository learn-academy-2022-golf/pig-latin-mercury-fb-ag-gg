import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

    // Use arrayOfUserInput with input words
      // If word begins with a vowel, add "way at the end"
        // Use conditional statement & indexing to check if first letter is a vowel

      // ACTION ITEM: your Pig Latin logic goes here!
      if (eachWord[0] === vowelsArray[0]) {
        return eachWord + "way"
      }
      // Find if qu is in the first sylable 
      //If qu is in the first sylable then move it to the end of the word and then add ay.
      //We can start out by writing a conditional statement using if to start.
      //If the first vowel is a u and the letter before the u is q. 
      //We can cut the first part string, after the u then add qu-ay in its spot. 
      //We are 

      if ( vowelsArray[0] === "u") {
        if(eachWord.indexOf("q") === eachWord.indexOf("u")-1) {
        console.log("weareinthis")
        return eachWord.substring(eachWord.indexOf("u")+1) + eachWord.substring(0,eachWord.indexOf("u")+1)+"ay"
      }
        //Create a copy of the sting before the letter u.
        //Create a copy of the string after the letter u. 
        
        }        

      // Create a conditional statement
        // That checks for:
          // Vowels array is size 0
          // y exists
      if ( vowelsArray.length == 0 && eachWord.includes('y')) {

        // All the consonants placed to the end
          // And add 'ay'

        return eachWord.substring(eachWord.indexOf("y")) + 
           eachWord.substring(0,eachWord.indexOf("y"))+"ay"
          
      } else { return eachWord.substring(eachWord.indexOf(vowelsArray[0])) + 
        eachWord.substring(0,eachWord.indexOf(vowelsArray[0]))+"ay"
        
      }     
      // We want to return the constant starting with its first vowel.
      //Then add the firsat part of word up untile the first vowel to the end of the string and then add ay.
      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord})

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App