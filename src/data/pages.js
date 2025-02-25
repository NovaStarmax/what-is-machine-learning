import page1Content from '../pages/page1.md?raw';
import page2Content from '../pages/page2.md?raw';
import page3Content from '../pages/page3.md?raw';
import page4Content from '../pages/page4.md?raw';
import page5Content from '../pages/page5.md?raw';
import page6Content from '../pages/page6.md?raw';
import page7Content from '../pages/page7.md?raw';
import page8Content from '../pages/page8.md?raw';
import page9Content from '../pages/page9.md?raw';
import page10Content from '../pages/page10.md?raw';
import page11Content from '../pages/page11.md?raw';
import page12Content from '../pages/page12.md?raw';

export const pages = [
  {
    id: 1,
    title: "La Science des Données",
    content: page1Content,
    nextPages: [2, 3]
  },
  {
    id: 2,
    title: "Apprentissage Automatique et Profond",
    content: page2Content,
    nextPages: [3, 4]
  },
  {
    id: 3,
    title: "Apprentissage Supervisé",
    content: page3Content,
    nextPages: [4, 5]
  },
  {
    id: 4,
    title: "Apprentissage Non Supervisé",
    content: page4Content,
    nextPages: [5, 6]
  },
  {
    id: 5,
    title: "Classification Supervisée",
    content: page5Content,
    nextPages: [6, 7]
  },
  {
    id: 6,
    title: "Classification Non Supervisé",
    content: page6Content,
    nextPages: [7, 8]
  },
  {
    id: 7,
    title: "La Régression",
    content: page7Content,
    nextPages: [8, 9]
  },
  {
    id: 8,
    title: "La validation Croisée",
    content: page8Content,
    nextPages: [9, 10]
  },
  {
    id: 9,
    title: "Données d'Entraînement, Test et Validation",
    content: page9Content,
    nextPages: [10, 11]
  },
  {
    id: 10,
    title: "Corrélation Linéaire",
    content: page10Content,
    nextPages: [11, 12]
  },
  {
    id: 11,
    title: "Fonction Coût",
    content: page11Content,
    nextPages: [12, 1]
  },
  {
    id: 12,
    title: "Descente de Gradient",
    content: page12Content,
    nextPages: [1, 2]
  }
];