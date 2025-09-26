import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';

export default function RecipeForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const submit = () => {
    if (!title.trim()) {
      Alert.alert('Erro', 'Título é obrigatório');
      return;
    }
    
    // AJUSTE: Usando quebra de linha ('\n') como único separador para ingredientes e passos
    // Isso é mais intuitivo para o usuário do que vírgulas ou ponto e vírgulas.
    const ingArr = ingredients.split('\n').map(s => s.trim()).filter(Boolean);
    const stepsArr = steps.split('\n').map(s => s.trim()).filter(Boolean);

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      ingredients: ingArr,
      steps: stepsArr
    });
  };

  return (
    <View>
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Ex: Bolo de Chocolate" />

      <Text style={styles.label}>Descrição (opcional)</Text>
      <TextInput style={[styles.input, { height: 80 }]} value={description} onChangeText={setDescription} placeholder="Breve descrição" multiline />

      <Text style={styles.label}>Ingredientes (um por linha)</Text>
      <TextInput 
        style={[styles.input, { height: 80 }]} 
        value={ingredients} 
        onChangeText={setIngredients} 
        placeholder="Farinha{'\n'}Açúcar{'\n'}Ovo" 
        multiline 
      />

      <Text style={styles.label}>Modo de preparo (um passo por linha)</Text>
      <TextInput 
        style={[styles.input, { height: 100 }]} 
        value={steps} 
        onChangeText={setSteps} 
        placeholder="1. Misture...{'\n'}2. Asse..." 
        multiline 
      />

      <Pressable style={styles.button} onPress={submit}>
        <Text style={styles.btnText}>Salvar Receita</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { marginTop: 8, fontWeight: '700' },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 6, marginTop: 6 },
  button: { marginTop: 12, backgroundColor: '#2b8a3e', padding: 12, borderRadius: 8, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700' }
});