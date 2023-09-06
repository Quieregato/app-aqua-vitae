import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../Screens/Home';
import { LoginScreen } from '../Screens/Login';
import { HeaderDefault } from '../Components/Header';
import { TabRoutes } from './tab.routes';

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="home">
        <Screen
          name="login"
          options={{
            headerTitle: 'login',
            headerShown: false,
          }}
          component={LoginScreen}
        />
        <Screen
          name="home"
          options={{
            headerTitle: 'Home',
            headerShown: false,
          }}
          component={TabRoutes}
        />
      </Navigator>
    </NavigationContainer>
  );
};
