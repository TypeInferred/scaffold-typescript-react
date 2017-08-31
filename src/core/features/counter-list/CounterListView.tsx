import { WriteIntent } from "eye-oh-see-react/dist/MVI";
import { Reactive } from "eye-oh-see-react/dist/Reactive";
import * as React from "react";
import { CounterView } from "./counter/CounterView";
import { ICounterListIntent , ICounterListState } from "./CounterListDomain";

export type CounterListProps = ICounterListState & WriteIntent<ICounterListIntent>;

const DumbCounterListView = (props: CounterListProps) =>
  <div>
    <p>Total: {props.total}</p>
    <div><button onClick={() => props.add(undefined)}>Add</button></div>
    <div>
       {props.counters.map((component, i) => <CounterView key={i} {...component} />)}
    </div>
  </div>;

export const CounterListView = Reactive(DumbCounterListView);
