import logo from './logo.svg';
import './App.css';
import Confetti from 'react-confetti'
import Die from './Components/Die'
import React, {useState, useEffect} from 'react'
import {nanoid} from "nanoid"


function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push({
              value: Math.ceil(Math.random() * 6),
              isHeld: true,
              id: nanoid()
          })
      }
      console.log(newDice)
      return newDice
    }

  function rollDice() {
      setDice(allNewDice())
  }

  const diceElements = dice.map(die => (
      <Die key={die.id} value={die.value} />
  ))

  return (
      <main>
          <div className="dice-container">
              {diceElements}
          </div>
          <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
  )
}
export default App;
