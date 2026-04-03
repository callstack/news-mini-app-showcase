jest.mock('@bottom-tabs/react-navigation', () => {
  const React = require('react');
  const {View} = require('react-native');

  const createNativeBottomTabNavigator = () => ({
    Navigator: ({children}) => <View>{children}</View>,
    Screen: ({component: Component}) => (Component ? <Component /> : null),
  });

  return {createNativeBottomTabNavigator};
});

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => ({
  getImageSourceSync: jest.fn(() => null),
}));
