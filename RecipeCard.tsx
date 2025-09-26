import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Recipe } from '../context/RecipesContext';

export default function RecipeCard({ recipe, onPress }: { recipe: Recipe; onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text numberOfLines={2} style={styles.desc}>{recipe.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#f7f7f7', padding: 12, borderRadius: 8, marginBottom: 10 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  desc: { color: '#555' }
});
