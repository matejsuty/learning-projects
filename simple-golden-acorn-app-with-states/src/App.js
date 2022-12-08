import { useState } from 'react';
import Buttons from './Button';
import Display from './Display';

function App() {
  const [value, setValue] = useState(0);

  function keyUp(event) {
    if(event.key === 'ArrowUp') {
      setValue(value + 1);
    } else if(event.key === 'ArrowDown' && value > 0) {
      setValue(value - 1);
    }
  }

  function buyOne() {
    setValue(value + 1);
  }

  function eatOne() {
    if (value > 0) {
      setValue(value - 1)
    }
  } 

  return (
    <>
      <div onKeyUp={keyUp}>
        <Buttons name = 'Buy one' handler = { buyOne } />
        <Display value = { value } />
        <Buttons name = 'Eat one' handler = { eatOne } />
      </div>
    </>
  )
}

export default App;