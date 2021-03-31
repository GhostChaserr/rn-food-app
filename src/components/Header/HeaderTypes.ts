import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";



export type HeaderProps = {
  handleRightIconPress: () => void
  handleLeftIconPress: () => void
  leftIcon: ImageSourcePropType
  rightIcon: ImageSourcePropType
  centerText: string
  children?: ReactNode
}