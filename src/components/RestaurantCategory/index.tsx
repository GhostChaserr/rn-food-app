import React, { FC } from 'react'
import { ImageSourcePropType } from 'react-native'
import {
  StyledCategoryButton,
  StyledCategoryWrapper,
  StyledCategoryIcon,
  StyledCategoryTextWrapper,
  StyledCategoryText
} from './styles'

export type RestaurantCategoryT = {
  id: number
  icon: ImageSourcePropType
  name: string
}

type RestaurantCategoryProps = {
  id: number
  selected: boolean
  name: string
  icon: ImageSourcePropType
  onCategorySelect: (category: RestaurantCategoryT) => void
}

const RestaurantCategory: FC<RestaurantCategoryProps> = (props) => {
  return (
    <StyledCategoryButton
      isSelected={props.selected}
      onPress={() =>
        props.onCategorySelect({
          id: props.id,
          icon: props.icon,
          name: props.name
        })
      }
    >
      <StyledCategoryWrapper>
        <StyledCategoryIcon source={props.icon} />
      </StyledCategoryWrapper>
      <StyledCategoryTextWrapper>
        <StyledCategoryText isSelected={props.selected}>
          {props.name}
        </StyledCategoryText>
      </StyledCategoryTextWrapper>
    </StyledCategoryButton>
  )
}

export default RestaurantCategory
