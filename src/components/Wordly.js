import * as React from 'react'
import { useState } from 'react'
const styles = {
  container: {
    margin: '1em'
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
  const [inputValue, setInputValue] = useState('')
  const initialArray = ['']
  const [inputWords, setInputWords] = useState(initialArray)
  const inputOnchangeHandler = (event) => {
    setInputValue(event.target.value)
  }
  const onClickSubmitHandler = (event) => {
    event.preventDefault()
    const newWords = [...inputWords]
    newWords.push(inputValue)
    setInputWords(newWords)
    setInputValue('')
  }

  return (
    <div style={styles.container}>
      {inputWords.map((word, index) => {
        console.log(word)
        return <Row key={index} inputWord={word} answerWord={answerWord} />
      })}

      <form>
        <input
          type="text"
          value={inputValue}
          onChange={inputOnchangeHandler}
        ></input>
        <button onClick={onClickSubmitHandler}>submit</button>
      </form>
    </div>
  )
}

function Row(props) {
  const { inputWord, answerWord } = props
  console.log(inputWord, answerWord)
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

  return <div style={{ ...color, ...styles.cell }}>{char}</div>
}
