import { Reactive } from "eye-oh-see-react/dist/Reactive";
import * as React from "react";
import * as style from "./Counter.styl";
import { ICounterIntent , ICounterState } from "./CounterDomain";

export type CounterProps = ICounterState & ICounterIntent;

const DumbCounterView = (props: CounterProps) =>
  <div>
    <p className={style.count}>Count: {props.count}</p>
    <button onClick={() => props.increment()}>Increment</button>
    <button onClick={() => props.decrement()}>Decrement</button>
  </div>;

export const CounterView = Reactive(DumbCounterView);
