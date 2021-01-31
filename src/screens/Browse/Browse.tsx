import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { categoriesMocks } from './mocks'

import GlobalStyles from 'src/global.styles'
import {
  StyledSafeAreaView,
  StyledTopHeaderWrapper,
  StyledWrapper,
  StyledTopHeader,
  StyledTopHeaderText,
  StyledAvatarWrapper,
  StyledAvatar,
  StyledTabButton,
  StyledTabWrapper,
  StyledTabButnText,
  StyledTabContentWrapper,
  StyledScrollView,
  StyledTabCard,
  StyledTabCardHeader,
  StyledTabCardImage,
  StyledTabCardSubHeader,
  StyledTabCardButton
} from './BrowseStyles'

const Browse = observer(({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState('Products')
  const [categories, setCategoris] = useState<any>([])
  const tabs = ['Products', 'Inspirations', 'Shop']

  const handleTab = (tab: string) => {
    const filtered = categories.filter((category: any) =>
      category.tags.includes(tab.toLowerCase())
    )
    setActiveTab(tab)
    setCategoris(filtered)
  }

  const renderTab = (tab: string) => {
    const isActive: boolean = activeTab === tab

    return (
      <StyledTabButton
        isActive={isActive}
        tab={tab}
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
      >
        <StyledTabButnText isActive={isActive}>{tab}</StyledTabButnText>
      </StyledTabButton>
    )
  }

  return (
    <StyledSafeAreaView style={GlobalStyles.adroidSafeArea}>
      <StyledWrapper>
        <StyledTopHeaderWrapper>
          <StyledTopHeader>
            <StyledTopHeaderText>Browse</StyledTopHeaderText>
          </StyledTopHeader>
          <StyledAvatarWrapper>
            <StyledAvatar
              source={{
                uri:
                  'https://www.uidownload.com/files/790/68/996/free-set-of-material-design-avatars.png'
              }}
            ></StyledAvatar>
          </StyledAvatarWrapper>
        </StyledTopHeaderWrapper>
        <StyledTabWrapper>
          {tabs.map((tab: string) => renderTab(tab))}
        </StyledTabWrapper>

        <StyledScrollView showsVerticalScrollIndicator={false}>
          <StyledTabContentWrapper>
            {categoriesMocks.map((category: any) => (
              <StyledTabCardButton
                onPress={() => navigation.navigate('SignIn')}
                key={category.id}
              >
                <StyledTabCard>
                  <StyledTabCardImage source={category.image} />
                  <StyledTabCardHeader>{category.name}</StyledTabCardHeader>
                  <StyledTabCardSubHeader>
                    {category.count} products
                  </StyledTabCardSubHeader>
                </StyledTabCard>
              </StyledTabCardButton>
            ))}
          </StyledTabContentWrapper>
        </StyledScrollView>
      </StyledWrapper>
    </StyledSafeAreaView>
  )
})

export default Browse
