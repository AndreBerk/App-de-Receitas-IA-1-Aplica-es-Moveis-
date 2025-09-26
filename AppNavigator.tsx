import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  AddRecipe: undefined;
  Details: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Receitas' }} />
      <Stack.Screen name="AddRecipe" component={AddRecipeScreen} options={{ title: 'Adicionar Receita' }} />
      <Stack.Screen name="Details" component={RecipeDetailsScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}
