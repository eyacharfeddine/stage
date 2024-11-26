import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPage from './screens/SignUpPage'; 
import ActivationCodePage from './screens/ActivationCodePage';
import PermissionPage from './screens/PermissionPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="ActivationCode" component={ActivationCodePage} />
        <Stack.Screen name="Permission" component={PermissionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;