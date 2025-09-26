import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRecipes } from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import { useNavigation } from '@react-navigation/native';
// MUDANÇA AQUI: Use NativeStackNavigationProp se estiver usando createNativeStackNavigator
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { RootStackParamList } from '../navigation/AppNavigator';

// Tipando a navegação corretamente com o NativeStack
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const { recipes } = useRecipes();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Função para navegar para os Detalhes, passando o ID
  const handlePressCard = (id: string) => {
    navigation.navigate('Details', { id });
  };

  return (
    <View style={styles.container}>
      {/* Botão para Adicionar Nova Receita */}
      <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddRecipe')}>
        <Text style={styles.addText}>+ Nova Receita</Text>
      </TouchableOpacity>

      {/* Lista de Receitas */}
      <FlatList
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            // Chamando a função de navegação no clique
            onPress={() => handlePressCard(item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  addBtn: { marginBottom: 12, backgroundColor: '#2b8a3e', padding: 12, borderRadius: 8, alignItems: 'center' },
  addText: { color: '#fff', fontWeight: '600' }
});