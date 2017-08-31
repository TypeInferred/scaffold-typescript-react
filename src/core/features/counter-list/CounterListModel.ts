import { Factory } from "eye-oh-see";
import { Intent , Model } from "eye-oh-see-react/dist/MVI";
import { Observable } from "rx";
import { CounterModel } from "./counter/CounterModel";
import { CounterListKeys , ICounterListIntent , ICounterListState } from "./CounterListDomain";

@Model<CounterListModel, ICounterListIntent, ICounterListState>()
export class CounterListModel {
  private readonly seed: ICounterListState = { counters: [], total: 0 };

  public readonly intent = Intent(CounterListKeys);

  public readonly state$ = this.counters$()
    .flatMap(counters =>
      this.total$(counters)
          .map(total => ({ counters, total }))
    );

  constructor(@Factory(CounterModel)
              private counterFactory: () => CounterModel) {
  }

  private counters$() {
    return this.addTransform$()
               .scan((state, transform) => transform(state), this.seed.counters)
               .startWith(this.seed.counters);
  }

  private addTransform$() {
    return this.intent.read.add.map(() => (state: CounterModel[]): CounterModel[] => (
      [...state, this.counterFactory()]
    ));
  }

  private total$(counters: CounterModel[]) {
    if (!counters.length) {
      return Observable.just(this.seed.total);
    }
    const count$s = counters.map(c => c.state$.map(s => s.count));
    return Observable.combineLatest(count$s)
                     .map(counts => counts.reduce((acc, count) => acc + count), this.seed.total);
  }
}
