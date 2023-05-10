import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { conunterActions } from './../store/counter';

const Counter = () => {
  //it gives back disptach function
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(conunterActions.increment());
  };

  const increaseBy5Handler = () => {
    dispatch(conunterActions.increaseBy5(5));
  };

  const decrementHandler = () => {
    dispatch(conunterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(conunterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5Handler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
