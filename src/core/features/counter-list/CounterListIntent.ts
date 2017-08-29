import { InstancePerScope } from "eye-oh-see";
import { Subjects } from "eye-oh-see-react/dist/Reactive";
import { Subject } from "rx";
import { COUNTER_LIST_SCOPE, ICounterListIntent } from "./CounterListDomain";

@InstancePerScope(COUNTER_LIST_SCOPE)
export class CounterListIntent implements Subjects<ICounterListIntent> {
  public readonly add = new Subject<null>();
}
