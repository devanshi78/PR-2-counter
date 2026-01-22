import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    const oldCount = localStorage.getItem('count');
    const oldValue = localStorage.getItem('value');
    setCount(Number(oldCount));
    setValue(Number(oldValue));
  }, [])

  const handleIncrement = () => {
    let newCount = count + (value ?? 1);
    setCount(newCount);
    localStorage.setItem('count', newCount);
  }

  const handleDecrement = () => {
    let newCount = count - (value ?? 1);
    setCount(newCount);
    localStorage.setItem('count', newCount);
  }

  const handleSave = (e) => {
    e.preventDefault();
    setValue(Number(inputRef.current.value));
    localStorage.setItem('value', inputRef.current.value);
    inputRef.current.value = "";
  }

  const handleReset = () => {
    setCount(0);
    setValue(null);
    localStorage.removeItem('count');
    localStorage.removeItem('value');
  }

  console.log(count);

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-6'>
            <div className='card'>
              <h2>counter : {count}</h2>
              <form onSubmit={handleSave}>
                <input type="text" min={1} max={40} name='value' id='value' ref={inputRef} />
                <button type='submit'>save</button>
              </form>
              {value ? <h2>Count By : {value}</h2> : null}
              <button type='button' onClick={handleIncrement}>Increment</button>
              <button type='button' onClick={handleDecrement}>Decrement</button>
              <button type='button' onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
