import {useState, useEffect} from 'react'
import './App.css'

const App = () => {
  const [userInput, setUserInput] = useState('')

  const [words, setWords] = useState([])

  const [wordsCount, setWordsCount] = useState(0)

  const [characterCount, setCharacterCount] = useState(0)

  const [stringToSearch, setStringToSearch] = useState('')

  const [stringToReplace, setstringToReplace] = useState('')

  useEffect(() => {
    setWords(
      userInput
        .split(/\s|[^\w]/)
        .filter(word => word !== '')
        .map(word => word.toLowerCase()),
    )
  }, [userInput])

  useEffect(() => {
    setWordsCount(new Set(words).size)
    let count = 0
    const characterCountFun = x => {
      count += x.length
      setCharacterCount(count)
    }
    if (words.length) {
      words.forEach(characterCountFun)
    } else {
      setCharacterCount(0)
    }
  }, [words])

  useEffect(() => {
    const searchText = stringToSearch
    if (searchText !== '') {
      const modifiedText = userInput.replaceAll(searchText,`<span style="background-color: yellow;">${stringToSearch}</span>`)
      const textareaele = document.getElementById('textarea')
    textareaele.innerHTML = modifiedText
    }
    setUserInput(userInput)
  },[stringToSearch, userInput])

  const updateUserInput = event => {
    setUserInput(event.target.value)
  }

  const updateSearchText = event => {
    setStringToSearch(event.target.value)
  }
  
  const updateReplaceText = event => {
    setstringToReplace(event.target.value)
  }

  const replaceText=event=>{
    event.preventDefault()
    if (replaceText !== '') {
      const modifiedText = userInput.replaceAll(stringToSearch,stringToReplace)
      setUserInput(modifiedText)
      setstringToReplace("")
      setStringToSearch("")
    }
  }

  return (
    <div className="container">
      <textarea
        onChange={updateUserInput}
        value={userInput}
        id="textarea"
        className="textarea">
          ""
        </textarea>
      <div className="word-info-container">
        <p className="word-count">
          Unique Word Count :{' '}
          <span className="word-count-value">{wordsCount}</span>
        </p>
        <p className="word-count">
          Character Count :{' '}
          <span className="word-count-value">{characterCount}</span>
        </p>
      </div>
      <form className='form-container' onSubmit={replaceText}>
          <div className='input-container'>
            <label htmlFor="Search" className='input-label'>SEARCH</label>
            <input
              value={stringToSearch}
              type="search"
              className='input'
              onChange={updateSearchText}
              id="Search"
            />
            <label htmlFor="Replace" className='input-label'>REPLACE</label>
            <input
              value={stringToReplace}
              type="text"
              className='input'
              onChange={updateReplaceText}
              id="Replace"
            />
            </div>
        <button className='replace-btn' type="submit">Replace</button>
      </form>
    </div>
  )
}

export default App
