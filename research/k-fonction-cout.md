# **K. Fonction de Coût**

### **1. Définition**

En apprentissage automatique, une fonction de coût, également appelée fonction de perte ou fonction objectif, est une mesure quantitative qui évalue l'écart entre les prédictions d'un modèle et les valeurs réelles attendues. Elle guide le processus d'optimisation en indiquant dans quelle mesure le modèle s'écarte des résultats souhaités. L'objectif principal lors de l'entraînement d'un modèle est de minimiser cette fonction de coût pour améliorer la précision des prédictions.

### **2. Rôle dans l'Apprentissage Automatique**

La fonction de coût joue un rôle central dans l'entraînement des modèles de machine learning. Elle sert de boussole pour ajuster les paramètres internes du modèle, tels que les poids dans un réseau de neurones, afin de réduire les erreurs de prédiction. En minimisant la fonction de coût, le modèle apprend à généraliser à partir des données d'entraînement, ce qui améliore ses performances sur des données inédites.

### **3. Types Courants de Fonctions de Coût**

- **Erreur Quadratique Moyenne (Mean Squared Error - MSE)** : Utilisée principalement pour les problèmes de régression, cette fonction calcule la moyenne des carrés des écarts entre les prédictions et les valeurs réelles. Elle pénalise fortement les grandes erreurs, ce qui peut être avantageux lorsque de telles erreurs sont particulièrement indésirables.
- **Erreur Absolue Moyenne (Mean Absolute Error - MAE)** : Cette fonction mesure la moyenne des valeurs absolues des écarts entre les prédictions et les valeurs réelles. Contrairement au MSE, elle ne pénalise pas autant les grandes erreurs, ce qui la rend plus robuste aux valeurs aberrantes.
- **Log Loss (Perte Logarithmique)** : Essentielle pour les problèmes de classification binaire, la log loss évalue la probabilité attribuée à la classe correcte. Une probabilité élevée pour la classe correcte entraîne une faible log loss, tandis qu'une probabilité faible augmente considérablement la perte.
- **Perte Hinge (Hinge Loss)** : Utilisée principalement pour les machines à vecteurs de support (SVM), cette fonction de coût pénalise les erreurs de classification en fonction de la distance par rapport à la marge de décision, encourageant ainsi une séparation plus nette entre les classes.

### **4. Choix de la Fonction de Coût**

Le choix de la fonction de coût dépend du type de problème à résoudre et des caractéristiques spécifiques des données :

- **Problèmes de Régression** : Les fonctions MSE ou MAE sont couramment utilisées. Le MSE est sensible aux grandes erreurs, tandis que le MAE offre une robustesse accrue face aux outliers.
- **Problèmes de Classification** : La log loss est privilégiée pour les classifications binaires, car elle tient compte des probabilités prédites. Pour les SVM, la perte hinge est appropriée pour maximiser la marge entre les classes.

Il est crucial de sélectionner une fonction de coût adaptée pour assurer un entraînement efficace et des performances optimales du modèle.

---

### **Sources :**

1. **La fonction de coût en IA : Tout ce qu'il faut savoir - DataScientest.com** : Cet article détaille les différentes fonctions de coût utilisées en apprentissage automatique et leur importance dans l'entraînement des modèles. [Lien](https://datascientest.com/fonction-de-cout-tout-savoir)
2. **Fonctions de coût et Machine Learning - Franck Jeannot** : Ce document PDF offre une revue approfondie des fonctions de coût, avec un focus sur la méthode des moindres carrés. [Lien](https://www.franckjeannot.com/wp-content/uploads/cost_function.pdf)
3. **Les fonctions de perte dans l'apprentissage automatique expliquées - DataCamp** : Cet article explique les différents types de fonctions de perte et leur application dans divers contextes de machine learning. [Lien](https://www.datacamp.com/fr/tutorial/loss-function-in-machine-learning)