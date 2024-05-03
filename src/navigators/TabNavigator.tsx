import {StyleSheet} from 'react-native';
import React, {useCallback} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomIcon from '../components/CustomIcon';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const blurBackground = useCallback(
    () => (
      <BlurView overlayColor="" blurAmount={15} style={styles.blurViewStyle} />
    ),
    [],
  );

  const homeIcon = useCallback(
    ({focused}: {focused: boolean}) => (
      <CustomIcon
        name="home"
        size={25}
        color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
      />
    ),
    [],
  );
  const cartIcon = useCallback(
    ({focused}: {focused: boolean}) => (
      <CustomIcon
        name="cart"
        size={25}
        color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
      />
    ),
    [],
  );
  const likeIcon = useCallback(
    ({focused}: {focused: boolean}) => (
      <CustomIcon
        name="like"
        size={25}
        color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
      />
    ),
    [],
  );
  const bellIcon = useCallback(
    ({focused}: {focused: boolean}) => (
      <CustomIcon
        name="bell"
        size={25}
        color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
      />
    ),
    [],
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: blurBackground,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: homeIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{tabBarIcon: cartIcon}}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{tabBarIcon: likeIcon}}
      />
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{tabBarIcon: bellIcon}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
