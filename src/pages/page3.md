# C - **L’Apprentissage Supervisé (Supervised Learning)**

### **1. Définition**

L'apprentissage supervisé est une méthode d’apprentissage automatique où un modèle est entraîné à partir de données **étiquetées** (labelisées). Chaque exemple du jeu de données contient des **entrées (features)** associées à une **sortie attendue (label ou cible)**, permettant au modèle d’apprendre à établir une relation entre ces deux.

### **2. Principe de Fonctionnement**

1. **Phase d’entraînement** : Le modèle apprend à partir d’un ensemble de données où chaque entrée est associée à une sortie correcte.
2. **Phase de test** : Une fois entraîné, le modèle est testé sur de nouvelles données pour évaluer sa capacité à généraliser.
3. **Prédiction** : Une fois validé, le modèle peut être utilisé sur des données réelles pour effectuer des prédictions.

### **3. Exemples d'Applications**

| Domaine | Exemples d'applications |
| --- | --- |
| **Santé** | Détection de maladies (ex: classification d’images médicales) |
| **Finance** | Évaluation du risque de crédit |
| **Marketing** | Prédiction du churn client (taux d’attrition) |
| **Informatique** | Détection de spam dans les emails |

### **4. Types d’Apprentissage Supervisé**

Il existe deux grandes catégories :

### **a) Classification**

- Utilisée lorsque la sortie est **une catégorie** (ex: "spam" ou "non spam").
- Exemples :
    - Détection de fraudes bancaires (fraude/non-fraude).
    - Reconnaissance faciale (identification d’une personne).

### **b) Régression**

- Utilisée lorsque la sortie est **une valeur numérique continue**.
- Exemples :
    - Prédiction du prix d’une maison en fonction de sa superficie.
    - Estimation de la consommation d’énergie d’un bâtiment.

### **5. Algorithmes Populaires**

| Algorithme | Type | Exemple d’utilisation |
| --- | --- | --- |
| **Régression Linéaire** | Régression | Prédiction des prix immobiliers |
| **Régression Logistique** | Classification | Détection de maladies |
| **SVM (Support Vector Machine)** | Classification | Reconnaissance d’images |
| **Arbres de décision** | Classification/Régression | Score de crédit |
| **Forêts aléatoires** | Classification/Régression | Analyse de sentiments |
| **Réseaux de neurones** | Classification/Régression | Vision par ordinateur |

### **6. Processus d'Entraînement**

Le pipeline typique d’un modèle supervisé comprend :

1. **Collecte des données** (jeux de données labellisés).
2. **Prétraitement** (nettoyage, normalisation des données).
3. **Séparation des données** (70% entraînement, 20% validation, 10% test).
4. **Entraînement du modèle** (ajustement des paramètres sur les données d’entraînement).
5. **Évaluation** (utilisation des données de test pour mesurer la performance).
6. **Optimisation** (ajustement des hyperparamètres, amélioration du modèle).

### **Sources :**

[BookElemStat](https://hastie.su.domains/ElemStatLearn/)

[Salesforce](https://www.salesforce.com/fr/resources/definition/apprentissage-supervise/?utm_source=chatgpt.com)