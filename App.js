import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './Screens/HomeScreen'
import TransactionScreen from './Screens/TransactionScreen'
import ProfileScreen from './Screens/ProfileScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainStack = () => {
    <NavigationContainer>

    </NavigationContainer>
}



export default function App() {
  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ header: () => {}}}
        />
  
      </Stack.Navigator>
  
    )
  }

  const TransactionStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Transfer"
          component={TransactionScreen}
          options={{ header: () => {}}}
        />
  
      </Stack.Navigator>
  
    )
  }

  const ProfileStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ header: () => {}}}
        />
  
      </Stack.Navigator>
  
    )
  }

  const horizontalAnimation = {
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Transfer') {
              iconName = focused ? 'sync' : 'sync';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#D5DBDB',
          inactiveTintColor: '#34495E',
          style:{backgroundColor:"#150833", borderTopColor:"#150833"}
        }}
    
        >
        <Tab.Screen name="Home" initialParams component={HomeStack}/>
        <Tab.Screen name="Transfer" component={TransactionStack}/>
        <Tab.Screen name="Profile" component={ProfileStack} options={horizontalAnimation}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


