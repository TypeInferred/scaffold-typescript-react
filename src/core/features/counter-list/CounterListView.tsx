import { Callbacks , reactive } from "eye-oh-see-react/dist/Reactive";
import * as React from "react";
import { CounterView } from "./counter/CounterView";
import { ICounterListIntent , ICounterListState } from "./CounterListDomain";

export interface ICounterListProps {
  state: ICounterListState;
  intent: Callbacks<ICounterListIntent>;
}

const DumbCounterListView = (props: ICounterListProps) =>
  <div>
    <p>Total: {props.state.total}</p>
    <div><button onClick={() => props.intent.add(null)}>Add</button></div>
    <div>
      {console.log.call(console, props.state)
       || props.state.counters
       && props.state.counters.map(component => <CounterView {...component} />)}
    </div>
  </div>;

export const CounterListView = reactive(DumbCounterListView);
