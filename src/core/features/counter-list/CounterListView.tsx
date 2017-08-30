import { Reactive } from "eye-oh-see-react/dist/Reactive";
import * as React from "react";
import { CounterView } from "./counter/CounterView";
import { ICounterListIntent , ICounterListState } from "./CounterListDomain";

export type CounterListProps = ICounterListState & ICounterListIntent;

const DumbCounterListView = (props: CounterListProps) =>
  <div>
    <p>Total: {props.total}</p>
    <div><button onClick={() => props.add()}>Add</button></div>
    <div>
       {props.counters.map(component => <CounterView {...component} />)}
    </div>
  </div>;

export const CounterListView = Reactive(DumbCounterListView);
