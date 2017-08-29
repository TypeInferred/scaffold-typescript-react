import { SingleInstance } from "eye-oh-see";
import { ContainerScope } from "eye-oh-see-react/dist/ContainerScope";
import { ByType , Resolve } from "eye-oh-see-react/dist/Resolve";
import { RootElementProvider } from "eye-oh-see-react/dist/RootElementProvider";
import * as React from "react";
import { COUNTER_LIST_SCOPE } from "./features/counter-list/CounterListDomain";
import { CounterListIntent } from "./features/counter-list/CounterListIntent";
import { CounterListModel } from "./features/counter-list/CounterListModel";
import { CounterListView } from "./features/counter-list/CounterListView";

const CounterList = Resolve(CounterListView)(ByType({
  intent: CounterListIntent,
  state: CounterListModel,
}));

@SingleInstance(RootElementProvider)
export class ApplicationRootElementProvider extends RootElementProvider {

  public get rootElement(): JSX.Element {
    return (
      <ContainerScope scopeName={COUNTER_LIST_SCOPE}>
        <CounterList />
      </ContainerScope>
    );
  }
}
