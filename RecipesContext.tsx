import React, { createContext, useContext, useState, ReactNode } from 'react';
import initialRecipes from '../data/recipes';

export type Recipe = {
  id: string;
  title: string;
  description?: string;
  ingredients: string[];
  steps: string[];
};

type RecipesContextType = {
  recipes: Recipe[];
  addRecipe: (r: Omit<Recipe, 'id'>) => void;
  getById: (id: string) => Recipe | undefined;
};

const RecipesContext = createContext<RecipesContextType | undefined>(undefined);

export const RecipesProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);

  const addRecipe = (r: Omit<Recipe, 'id'>) => {
    const newRecipe: Recipe = { ...r, id: Date.now().toString() };
    setRecipes(prev => [newRecipe, ...prev]);
  };

  const getById = (id: string) => recipes.find(r => r.id === id);

  return (
    <RecipesContext.Provider value={{ recipes, addRecipe, getById }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => {
  const ctx = useContext(RecipesContext);
  if (!ctx) throw new Error('useRecipes must be used within RecipesProvider');
  return ctx;
};
