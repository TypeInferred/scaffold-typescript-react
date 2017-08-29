import { Callbacks , reactive } from "eye-oh-see-react/dist/Reactive";
import * as React from "react";
import * as style from "./Counter.styl";
import { ICounterIntent , ICounterState } from "./CounterDomain";

export interface ICounterProps {
  state: ICounterState;
  intent: Callbacks<ICounterIntent>;
}

const DumbCounterView = (props: ICounterProps) =>
  <div>
    <p className={style.count}>Count: {props.state.count}</p>
    <button onClick={() => props.intent.increment(null)}>Increment</button>
    <button onClick={() => props.intent.decrement(null)}>Decrement</button>
  </div>;

export const CounterView = reactive(DumbCounterView);
