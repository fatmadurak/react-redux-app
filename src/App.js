
import React from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement } from './redux/CounterSlice';
function App() {

  const value=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  
  return (
  <>
  
  {value}

<button onClick={()=>dispatch(increment())}>arttır</button>
<button onClick={()=>dispatch(decrement())}>azalt</button>
  
  </>
  );
}

export default App;
