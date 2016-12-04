import { Application } from './bootstrapping/Application';
import { CoreModule } from './modules/core/CoreModule';
import { WebUiModule } from './modules/web-ui/WebUiModule';

const application = new Application([
  new CoreModule(),
  new WebUiModule()
]);

application.start();

if (module.hot) {
  module.hot.dispose(() => application.stop());
  module.hot.accept();
}
