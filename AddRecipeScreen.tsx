import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecipeForm from '../components/RecipeForm';
import { useRecipes } from '../context/RecipesContext';
import { useNavigation } from '@react-navigation/native';

export default function AddRecipeScreen() {
  const { addRecipe } = useRecipes();
  const navigation = useNavigation<any>();

  const handleAdd = (data: { title: string; description?: string; ingredients: string[]; steps: string[] }) => {
    addRecipe(data);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <RecipeForm onSubmit={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' }
});
