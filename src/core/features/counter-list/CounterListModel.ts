import { InstancePerScope , ScopedFactory } from "eye-oh-see";
import { Model } from "eye-oh-see-react/dist/Reactive";
import { Observable } from "rx";
import { CounterComponent } from "./counter/CounterComponent";
import { COUNTER_SCOPE } from "./counter/CounterDomain";
import { COUNTER_LIST_SCOPE , ICounterListState } from "./CounterListDomain";
import { CounterListIntent } from "./CounterListIntent";

@InstancePerScope(COUNTER_LIST_SCOPE)
export class CounterListModel implements Model<ICounterListState> {

  public counters = Observable.defer(() => {
    const mutations = this.intent.add.map(() => (existingCounters: CounterComponent[]) => {
      const newCounter = this.counterFactory();
      const newCounters: CounterComponent[] = [...existingCounters, newCounter];
      return newCounters;
    });
    return mutations.scan((acc, f) => f(acc), []).startWith([]);
  }).shareReplay(1);

  public total = this.counters.map(counters =>
    counters.map(counter => counter.state.count)
            .reduce((subTotal$, count$) =>
              subTotal$.combineLatest(count$, (acc, count) => acc + count),
              Observable.just(0))
  ).switch();

  constructor(private intent: CounterListIntent,
              @ScopedFactory(COUNTER_SCOPE, CounterComponent)
              private counterFactory: () => CounterComponent) {
  }
}
