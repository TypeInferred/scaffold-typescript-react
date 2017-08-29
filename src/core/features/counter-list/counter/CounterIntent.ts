import { InstancePerScope } from "eye-oh-see";
import { Subjects } from "eye-oh-see-react/dist/Reactive";
import { Subject } from "rx";
import { COUNTER_SCOPE, ICounterIntent } from "./CounterDomain";

@InstancePerScope(COUNTER_SCOPE)
export class CounterIntent implements Subjects<ICounterIntent> {
  public readonly increment = new Subject<null>();
  public readonly decrement = new Subject<null>();
}
