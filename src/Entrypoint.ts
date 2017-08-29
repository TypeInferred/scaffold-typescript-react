import { Application } from "eye-oh-see-react/dist/Application";
import { CoreModule } from "./core/CoreModule";

const application = new Application([
  new CoreModule(),
]);

application.start(module);
