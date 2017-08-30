import { Application } from "eye-oh-see-react/dist/Application";
import { Resolve } from "eye-oh-see-react/dist/Resolve";
import * as React from "react";
import { CoreModule } from "./core/CoreModule";
import { CounterListModel } from "./core/features/counter-list/CounterListModel";
import { CounterListView } from "./core/features/counter-list/CounterListView";

const RootElement = Resolve(CounterListView)(container => container.resolve(CounterListModel));

const application = new Application([
  new CoreModule(),
]);

application.start(<RootElement />, module);
