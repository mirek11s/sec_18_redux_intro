import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  //dispatch an action against our redux store
  const dispatch = useDispatch();
  //get the latest counter state
  //initial states taken from /store/index.js
  const counter = useSelector((state) => state.counter_1.counter);
  //will show the counter only if its true
  const show = useSelector((state) => state.counter_1.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment(5)); //redux is transforming this to: {type: SOME_UNIQUI_IDENTIFIER, payload: 10}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrease());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
