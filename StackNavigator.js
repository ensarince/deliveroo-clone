import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import useAuth from './hooks/useAuth';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const { user } = useAuth();

    return (
            <Stack.Navigator>
                {user ? 
                (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{headerShown:false}}/>
                        <Stack.Screen name="Basket" component={BasketScreen} options={{presentation:"modal", headerShown:false}}/>
                        <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{presentation:"modal", headerShown:false}}/>
                        <Stack.Screen name="Delivery" component={DeliveryScreen}/>
                    </>
                ) : null}
            </Stack.Navigator>
    )
}

export default StackNavigator