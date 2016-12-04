export abstract class Module {

  public get exports(): Function[] {
    const context = this.requireContext();
    const moduleObjects = context.keys().map(context);
    const serviceExports: Function[] = [];
    moduleObjects.forEach(moduleObject => {
      Object.keys(moduleObject).forEach(k => {
        const moduleExport = moduleObject[k];
        if (typeof moduleExport === 'function') {
          serviceExports.push(moduleExport);
        }
      });
    });
    return serviceExports;
  }

  protected abstract requireContext(): __WebpackModuleApi.RequireContext;

}
