import { Recipe } from '../context/RecipesContext';

const sample: Recipe[] = [
  {
    id: '1',
    title: 'Bolo Simples de Chocolate',
    description: 'Bolo fofinho para festas simples.',
    ingredients: ['2 xícaras de farinha', '1 xícara de açúcar', '3 ovos', '1/2 xícara de cacau em pó'],
    steps: ['Misture os secos', 'Adicione os ovos e mexa', 'Asse por 35 minutos a 180°C']
  },
  {
    id: '2',
    title: 'Salada Rápida',
    description: 'Salada leve para acompanhar almoço.',
    ingredients: ['Alface', 'Tomate', 'Azeite', 'Sal'],
    steps: ['Lave os vegetais', 'Pique e tempere a gosto']
  }
];

export default sample;
