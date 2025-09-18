import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, AuthContext } from './src/contexts/AuthContext';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

function RootNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null; // show splash or loader here

  return user ? <AppStack /> : <AuthStack />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
