import { Disposable , Factory , InstancePerDependency } from "eye-oh-see";
import { IModel } from "eye-oh-see-react/dist/IModel";
import "eye-oh-see-react/dist/Rx";
import { Observable , Subject } from "rx";
import { CounterModel } from "./counter/CounterModel";
import { ICounterListIntent , ICounterListState } from "./CounterListDomain";

@InstancePerDependency()
@Disposable()
export class CounterListModel implements IModel<ICounterListIntent, ICounterListState> {
  private readonly add = new Subject<null>();
  private readonly seed: ICounterListState = {
    counters: [],
    total: 0
  };

  private readonly counters =
    this.addReducer() .scan((acc, reduce) => reduce(acc), this.seed.counters)
        .startWith(this.seed.counters);

  public readonly intent = {
    add: () => this.add.onNext(null)
  };

  public dispose: () => void;

  public readonly state = this.counters
    .flatMap(counters =>
      this.calculateTotal(counters)
          .map(total => ({ counters, total }))
    )
    .cache(disposer => this.dispose = disposer);

  constructor(@Factory(CounterModel)
              private counterFactory: () => CounterModel) {
  }

  private addReducer() {
    return this.add.map(() => (state: CounterModel[]): CounterModel[] => (
      [...state, this.counterFactory()]
    ));
  }

  private calculateTotal(counters: CounterModel[]) {
    if (!counters.length) {
      return Observable.just(this.seed.total);
    }
    const count$s = counters.map(c => c.state.map(s => s.count));
    return Observable.combineLatest(count$s)
                     .map(counts => counts.reduce((acc, count) => acc + count), this.seed.total);
  }
}
