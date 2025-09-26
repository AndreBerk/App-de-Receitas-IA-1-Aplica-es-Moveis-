import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRecipes } from '../context/RecipesContext';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function RecipeDetailsScreen() {
  const route = useRoute<DetailsRouteProp>();
  const { getById } = useRecipes();
  const recipe = getById(route.params.id);

  if (!recipe) return <View style={styles.container}><Text>Receita não encontrada.</Text></View>;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>{recipe.title}</Text>
      {recipe.description ? <Text style={styles.description}>{recipe.description}</Text> : null}

      <Text style={styles.sectionTitle}>Ingredientes</Text>
      {recipe.ingredients.map((ing, i) => (
        <Text key={i} style={styles.listItem}>• {ing}</Text>
      ))}

      <Text style={styles.sectionTitle}>Modo de Preparo</Text>
      {recipe.steps.map((s, i) => (
        <Text key={i} style={styles.listItem}>{i + 1}. {s}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
  description: { marginBottom: 12, color: '#444' },
  sectionTitle: { marginTop: 12, fontSize: 16, fontWeight: '700' },
  listItem: { marginTop: 6, color: '#333' }
});
