import { InstancePerScope } from "eye-oh-see";
import { COUNTER_SCOPE } from "./CounterDomain";
import { CounterIntent } from "./CounterIntent";
import { CounterModel } from "./CounterModel";

@InstancePerScope(COUNTER_SCOPE)
export class CounterComponent {
  constructor(public state: CounterModel,
              public intent: CounterIntent) {}
}
