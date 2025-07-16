import React, { useRef, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import LoadingScreen from './src/screens/LoadingScreen';

import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext'
import { setNavigator } from './src/navigatorRef';


const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const TrackStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Signup">
      <AuthStack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <AuthStack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}

function TrackListFlow() {
  return (
    <TrackStack.Navigator>
      <TrackStack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{ headerTitleAlign: 'center' }}
      />
      <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen} options={{ headerTitleAlign: 'center' }} />
    </TrackStack.Navigator>
  );
}

function MainFlow() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tracks') iconName = 'list';
          else if (route.name === 'Create') iconName = 'add-circle';
          else if (route.name === 'Account') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Tracks" component={TrackListFlow}/>
      <Tab.Screen name="Create" component={TrackCreateScreen}/>
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  if (state.loading) {
    return <LoadingScreen />;
  }

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {state.token ? (
        <RootStack.Screen name="Main" component={MainFlow} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
}

function AppNavigator() {
  const navRef = useRef();
  const { state } = useContext(AuthContext);

  // Use key to force NavigationContainer to reset when auth state changes
  return (
    <NavigationContainer
      key={state.token ? 'user' : 'guest'}
      ref={(nav) => {
        navRef.current = nav;
        setNavigator(nav);
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TrackProvider>
      <LocationProvider>  
      <AuthProvider>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </AuthProvider>
      </LocationProvider>
       </TrackProvider>
    </GestureHandlerRootView>
  );
}
