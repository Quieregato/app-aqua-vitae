import { AntDesign, Feather, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Colors from '../Themes/Colors';
import { HomeScreen } from '../Screens/Home';
import { NutricionalScreen } from '../Screens/Nutricional';
import { DailyScreen } from '../Screens/Daily';
import { ProfileScreen } from '../Screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes: any = () => {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: {
          height: 70,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <Screen
        name="home"
        options={{
          headerShown: false,
          headerTitle: 'Home',
          tabBarIconStyle: {
            color: '#cecece',
          },
          tabBarShowLabel: false,
          tabBarIcon: () => <Octicons name="home" size={20} color={Colors.COLORS.primary} />,
        }}
        component={HomeScreen}
      />
      <Screen
        name="widget"
        options={{
          headerShown: false,
          headerTitle: 'Widget',
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="widgets-outline"
              size={20}
              color={Colors.COLORS.gray}
            />
          ),
        }}
        component={NutricionalScreen}
      />
      <Screen
        name="daily"
        options={{
          headerShown: false,
          headerTitle: 'Daily',
          tabBarShowLabel: false,
          tabBarIcon: () => <AntDesign name="file1" size={20} color={Colors.COLORS.gray} />,
        }}
        component={DailyScreen}
      />
      <Screen
        name="profile"
        options={{
          headerShown: false,
          headerTitle: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: () => <Feather name="user" size={20} color={Colors.COLORS.gray} />,
        }}
        component={ProfileScreen}
      />
    </Navigator>
  );
};
