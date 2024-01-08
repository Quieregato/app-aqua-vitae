import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DailyScreen } from '../screens/Daily';
import { HomeScreen } from '../screens/Home';
import { NutricionalScreen } from '../screens/Nutricional';
import { ProfileScreen } from '../screens/Profile';
import { ResultsScreen } from '../screens/Results';
import Colors from '../themes/Colors';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = ({ navigation }: any) => {
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
            <MaterialCommunityIcons name="widgets-outline" size={20} color={Colors.COLORS.gray} />
          ),
        }}
        component={NutricionalScreen}
      />
      <Screen
        name="results"
        options={{
          headerShown: false,
          headerTitle: 'Resultados',
          tabBarShowLabel: false,
          tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color={Colors.COLORS.gray} />,
        }}
        component={ResultsScreen}
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
