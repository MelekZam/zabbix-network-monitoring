import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome'
import LogIn from '../screens/LogIn'
import Verify from '../screens/Verify'
import Dashboard from '../screens/Dashboard';
import { connect } from 'react-redux'
// import Store from '../../redux/store/ConfigureStore'
// import userInfo from '../../redux/reducers/reducer'

const Stack = createStackNavigator();

const WelcomeStack = (props) => {
  
  return (
      <Stack.Navigator>
          { !props.isLoggedIn ? (<>
            <Stack.Screen
              options={{headerShown: false}}
              name='Welcome'
              component={Welcome}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name='LogIn'
              component={LogIn}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name='Verify'
              component={Verify}
            />
          </>) : (<>
            <Stack.Screen
              name='Dashboard'
              component={Dashboard}
            />
          </>)
          }

      </Stack.Navigator>
  )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(WelcomeStack);