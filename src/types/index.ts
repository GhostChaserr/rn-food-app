import { ImageSourcePropType } from "react-native"

export type RestaurantMenuT = {
  menuId: number,
  name: string
  photo: ImageSourcePropType
  description: string
  calories: number,
  price: number
}

export type RestaurantPreviewT = {
  id: number
  name: string
  rating: number
  categories: string[]
  photo: ImageSourcePropType
  duration: string
  menu: RestaurantMenuT[]
}
