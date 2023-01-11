import * as React from 'react'
import { useState } from 'react'
const styles = {
  container: {
    margin: '1em'
  },
  form: {
    marginTop: '1em'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  cell: {
    border: 'solid 2px white',
    width: '2em',
    height: '2em',
    textAlign: 'center',
    paddingTop: '0.3em'
  },
  gray: {
    backgroundColor: 'gray'
  },
  orange: {
    backgroundColor: 'orange'
  },
  green: {
    backgroundColor: 'green'
  }
}

export default function Wordly() {
  const answerWord = 'style'
  const pattern = /^[A-Za-z]+$/
  const [inputValue, setInputValue] = useState('')
  const initialArray = new Array(5).fill('-----')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [inputWords, setInputWords] = useState(initialArray)
  const [alertMessage, setAlertMessage] = useState(null)
  const inputOnchangeHandler = (event) => {
    setInputValue(event.target.value)
  }
  const onClickSubmitHandler = (event) => {
    event.preventDefault()
    if (currentIndex > 5) {
      return
    }
    if (
      inputValue.trim().length > 5 ||
      inputValue.trim().length < 5 ||
      !inputValue.match(pattern)
    ) {
      setAlertMessage(
        <>
          Invalid input. <br /> Pick 5 letter word with only alphabets.
        </>
      )
      return
    } else {
      setAlertMessage(null)
    }
    const newWords = [...inputWords]
    newWords[currentIndex] = inputValue
    setInputWords(newWords)
    setInputValue('')
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <div style={styles.container}>
      {inputWords.map((word, index) => {
        return <Row key={index} inputWord={word} answerWord={answerWord} />
      })}
      {alertMessage}
      <form style={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={inputOnchangeHandler}
        ></input>
        <button onClick={onClickSubmitHandler}>Enter</button>
      </form>
    </div>
  )
}

function Row(props) {
  const { inputWord, answerWord } = props
  const charArray = inputWord.split('')
  return (
    <div style={styles.row}>
      {charArray.map((char, index) => (
        <Cell key={index} char={char} index={index} answerWord={answerWord} />
      ))}
    </div>
  )
}

function Cell(props) {
  const { char, index, answerWord } = props
  let color
  if (answerWord[index] === char) {
    color = styles.green
  } else if (answerWord.includes(char)) {
    color = styles.orange
  } else {
    color = styles.gray
  }

  return (
    <div style={{ ...color, ...styles.cell }}>{char === '-' ? null : char}</div>
  )
}
