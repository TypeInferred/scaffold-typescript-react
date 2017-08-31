import { WriteIntent } from "eye-oh-see-react/dist/MVI";
import { Reactive } from "eye-oh-see-react/dist/Reactive";
import * as React from "react";
import * as style from "./Counter.styl";
import { ICounterIntent , ICounterState } from "./CounterDomain";

export type CounterProps = ICounterState & WriteIntent<ICounterIntent>;

const DumbCounterView = (props: CounterProps) =>
  <div>
    <p className={style.count}>Count: {props.count}</p>
    <button onClick={() => props.increment(1)}>Increment</button>
    <button onClick={() => props.decrement(1)}>Decrement</button>
  </div>;

export const CounterView = Reactive<ICounterIntent, ICounterState>(DumbCounterView);
