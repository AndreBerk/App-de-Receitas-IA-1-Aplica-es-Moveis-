import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { RecipesProvider } from './src/context/RecipesContext';

export default function App() {
  return (
    <RecipesProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </RecipesProvider>
  );
}