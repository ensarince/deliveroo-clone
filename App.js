import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import 'react-native-url-polyfill/auto';
import { Provider } from "react-redux"
import { store } from "./store"

export default function App() {

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Provider store={store}>
          <AuthProvider>
            <StackNavigator />
          </AuthProvider>
        </Provider>
      </NavigationContainer>
    </TailwindProvider>  
  );
}
