import { ComponentTypeEnum } from './enumType'

interface ComponentProp {
  width: String,
  height: String,
}

export interface ComponentNodes {
  componentName: String,
  componentTitle: String,
  componentType: ComponentTypeEnum
} 