import * as classNames from "classnames";
import { StyledView } from "eye-oh-see-react/dist/StyledView";
import * as React from "react";
import { ICounterIntent , ICounterState } from "./CounterDomain";

const style = {
  baseCount: {
    transition: "color 1s"
  },
  negativeCount: {
    color: "red"
  },
  positiveCount: {
    color: "blue"
  }
};

export const CounterView = StyledView<ICounterIntent, ICounterState, typeof style, {}>(style)(props =>
  <div>
    <p className={classNames({
        [props.classes.baseCount]: true,
        [props.classes.negativeCount]: props.count < 0,
        [props.classes.positiveCount]: props.count >= 0
      })}>
      Count: {props.count}
    </p>
    <button onClick={() => props.increment(1)}>Increment</button>
    <button onClick={() => props.decrement(1)}>Decrement</button>
  </div>
);
