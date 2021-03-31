import { StackNavigationProp } from '@react-navigation/stack'
import { createStackNavigator } from '@react-navigation/stack'

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;


export type RestaurantCategory = {
  id: number
  icon: any
  name: string
}