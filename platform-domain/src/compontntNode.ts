
import { ComponentNodes } from './domainType'

export class ComponentNode {
  private componentName;

  private componentType;

  constructor(componentJson: ComponentNodes) {
    this.componentName = componentJson.componentName;
    this.componentType = componentJson.componentType;
  }

  public getComponentName () {
    return this.componentName
  }

  public getComponentType () {
    return this.componentType
  }
}