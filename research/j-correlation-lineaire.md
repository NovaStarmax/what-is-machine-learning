# **J. Corrélation Linéaire (de Pearson) entre Deux Variables**

### **1. Définition**

La corrélation linéaire de Pearson est une mesure statistique qui évalue la force et la direction de la relation linéaire entre deux variables quantitatives continues. Elle est représentée par un coefficient, noté *r*, qui varie entre -1 et 1. Un *r* positif indique une relation positive (lorsque l'une des variables augmente, l'autre augmente également), tandis qu'un *r* négatif indique une relation négative (lorsque l'une augmente, l'autre diminue). Un *r* de 0 suggère l'absence de relation linéaire entre les variables.

## 2. Calcul du Coefficient de Corrélation de Pearson

Le coefficient de corrélation de Pearson est calculé en divisant la covariance des deux variables par le produit de leurs écarts types. La formule est la suivante :

$$
r = \frac{\text{Cov}(X, Y)}{\sigma_X \times \sigma_Y}
$$

où :

- **Cov(X, Y)** est la covariance entre les variables **X** et **Y**,
- **σ_X** et **σ_Y** sont les écarts types de **X** et **Y** respectivement.

Cette formule standardise la covariance, produisant ainsi un coefficient sans unité qui facilite la comparaison entre différentes paires de variables.


### **3. Interprétation du Coefficient**

- **|r| = 1** : Corrélation linéaire parfaite.
- **0.7 ≤ |r| < 1** : Forte corrélation linéaire.
- **0.5 ≤ |r| < 0.7** : Corrélation modérée.
- **0.3 ≤ |r| < 0.5** : Faible corrélation.
- **|r| < 0.3** : Très faible ou absence de corrélation linéaire.

Il est essentiel de noter que la corrélation de Pearson ne capture que les relations linéaires. Ainsi, deux variables peuvent avoir une relation non linéaire forte tout en ayant un coefficient de Pearson proche de zéro.

### **4. Conditions d'Utilisation**

Pour que le coefficient de corrélation de Pearson soit une mesure appropriée, certaines conditions doivent être remplies :

- **Linéarité** : La relation entre les variables doit être linéaire.
- **Normalité** : Les variables doivent suivre une distribution normale.
- **Homoscédasticité** : La variance des résidus doit être constante à travers les valeurs de la variable indépendante.

Si ces conditions ne sont pas respectées, d'autres mesures de corrélation, comme le coefficient de Spearman, peuvent être plus appropriées.

### **5. Applications Pratiques**

- **Études de Santé** : Évaluer la relation entre la consommation de sel et la pression artérielle.
- **Économie** : Analyser la corrélation entre le revenu des ménages et leurs dépenses.
- **Éducation** : Examiner la relation entre le temps d'étude et les performances aux examens.
- **Marketing** : Étudier l'association entre le budget publicitaire et les ventes.

---

### **Sources :**

1. **Université de Liège - Coefficient de corrélation de Pearson** : Fournit une explication détaillée du coefficient de corrélation de Pearson et de son calcul. [Lien](https://www.biostat.ulg.ac.be/pages/Site_r/corr_pearson.html)
2. **DATAtab - Corrélation de Pearson expliquée simplement** : Présente une introduction accessible à la corrélation de Pearson avec des exemples pratiques. [Lien](https://datatab.fr/tutorial/pearson-correlation)
3. **QuestionPro - Coefficient de corrélation de Pearson : Calcul et Exemples** : Offre une vue d'ensemble du calcul du coefficient de corrélation de Pearson et de son interprétation. [Lien](https://www.questionpro.com/blog/fr/coefficient-de-correlation-de-pearson/)