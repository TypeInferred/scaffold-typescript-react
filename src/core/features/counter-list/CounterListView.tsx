import { View } from "eye-oh-see-react/dist/View";
import * as React from "react";
import { CounterView } from "./counter/CounterView";
import { ICounterListIntent , ICounterListState } from "./CounterListDomain";

export const CounterListView = View<ICounterListIntent, ICounterListState, {}>(props =>
  <div>
    <p>Total: {props.total}</p>
    <div><button onClick={() => props.add(undefined)}>Add</button></div>
    <div>
       {props.counters.map((component, i) => <CounterView key={i} {...component} />)}
    </div>
  </div>
);
