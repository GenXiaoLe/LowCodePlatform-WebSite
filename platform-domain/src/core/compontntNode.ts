
import { ComponentNodes } from '../type/domainType'

export class ComponentNode {
  private componentName;
  private componentType;
  private componentNode;

  constructor(componentJson: ComponentNodes) {
    this.componentName = componentJson.componentName;
    this.componentType = componentJson.componentType;
    this.componentNode = componentJson;
  }

  public getComponentName () {
    return this.componentName
  }

  public getComponentType () {
    return this.componentType
  }

  public getComponent () {
    return this.componentNode
  }
}