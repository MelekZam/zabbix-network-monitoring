import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeStack from './src/routes/WelcomeStack'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="WelcomeStack"
          component={WelcomeStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;