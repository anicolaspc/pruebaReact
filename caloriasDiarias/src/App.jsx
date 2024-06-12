import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [system, setSystem] = useState('imperial')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [calories, setCalories] = useState('')
  const [factor, setFactor] = useState('1')

  useEffect(() => {
    calculateCalories()
  }, [system, age, weight, height])

  const handleSystem = (event) => {
    setSystem(event.target.value)
  }

  const handleInput = (event) => {
    const { name, value } = event.target
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      if (name === 'age') setAge(value)
      if (name === 'weight') setWeight(value)
      if (name === 'height') setHeight(value)
    }

    if (system === 'imperial') {
      if (weight < 220) setFactor(1.2);
      if (weight < 200) setFactor(1.4);
      if (weight < 165) setFactor(1.6);
    } else {
      if (weight < 100) setFactor(1.2);
      if (weight < 91) setFactor(1.4);
      if (weight < 75) setFactor(1.6);
    }

  }

  const calculateCalories = () => {
    if (parseInt(age) < 15 || parseInt(age) > 106) return
    if (parseFloat(weight) < 40.50 || parseFloat(weight) > 300) return
    if (parseFloat(height) < 140 || parseFloat(height) > 225) return
    const calories = system === 'metrico' ? (10 * weight + 6.25 * height - 10 * age + 5) * factor : (10 * (weight / 2.205) + 6.25 * (height * 2.54) - 10 * age + 5) * factor
    setCalories(calories.toFixed(2))
  }

  return (
    <>
      <h1>calculador de calorias</h1>
      <form>
        <div>
          <label>
            seleccionar sistema:
            <select value={system} onChange={handleSystem}>
              <option value="imperial">imperial</option>
              <option value="metrico">metrico</option>
            </select>
          </label>
        </div>
        <div className='message-trigger'>
          <label>
            Edad:
            <br />
            <input type="text" name='age' value={age} onChange={handleInput} required />
            {(age != '' && (age < 15 || age > 106)) && (
              <div className='message'>
                <span> <b>La edad debe ser entre 16 a 105 años</b></span>
              </div>
            )}
          </label>
        </div>
        <div className='message-trigger'>
          <label>
            Peso en {system === 'imperial' ? 'Libras' : 'Kilogramos'}:
            <br />
            <input type="text" name='weight' value={weight} onChange={handleInput} required />
            {(weight != '' && (weight < 40.50 || weight > 300)) && (
              <div className='message'>
                <span> <b>El peso debe ser entre {system === 'imperial' ? '89.28 a 661.38 libras' : '40.5 a 300 kilogramos'} </b></span>
              </div>
            )}
          </label>
        </div>
        <div className='message-trigger'>
          <label>
            Altura en {system === 'imperial' ? 'Pulgadas' : 'Centimetros'}:
            <br />
            <input type="text" name='height' value={height} onChange={handleInput} required />
            {(height != '' && (height < 40.50 || height > 300)) && (
              <div className='message'>
                <span> <b>La altura debe ser entre {system === 'imperial' ? '55.11 a 88.58 pulgadas' : '140 a 225 centimetros'} </b></span>
              </div>
            )}
          </label>
        </div>
      </form>
      {calories && (
        <div>
          <h2>calorias diarias necesarias: {calories} cal</h2>
        </div>
      )}
    </>
  )
}

export default App
