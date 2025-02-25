# **F. La Classification Non Supervisée**

### **1. Définition**

La classification non supervisée, également appelée *clustering*, est une technique d'apprentissage automatique où l'algorithme regroupe des données non étiquetées en ensembles homogènes basés sur leurs similarités intrinsèques. Contrairement à la classification supervisée, il n'y a pas de labels prédéfinis ; l'objectif est de découvrir des structures ou des motifs cachés dans les données.

### **2. Méthodes Courantes**

- **Classification Ascendante Hiérarchique (CAH)** : Cette méthode construit un dendrogramme en fusionnant successivement les clusters les plus proches jusqu'à obtenir une hiérarchie complète des données.
- **Algorithme des K-moyennes (K-means)** : Il partitionne les données en *k* clusters en minimisant la variance au sein de chaque cluster.
- **Algorithme des K-médoïdes (Partitioning Around Medoids)** : Similaire au K-means, mais utilise des points réels des données comme centres de clusters, ce qui le rend plus robuste aux outliers.
- **Modèles de Mélanges Gaussiens** : Supposent que les données sont générées par un mélange de plusieurs distributions gaussiennes et utilisent des approches probabilistes pour déterminer l'appartenance aux clusters.

### **3. Applications Pratiques**

- **Segmentation de la Clientèle** : Identifier des groupes de clients avec des comportements d'achat similaires pour des stratégies marketing ciblées.
- **Analyse d'Images** : Regrouper des images similaires pour la reconnaissance de motifs ou la compression d'images.
- **Bioinformatique** : Classer des gènes ou des protéines en fonction de leurs fonctions ou expressions.
- **Traitement du Langage Naturel** : Regrouper des documents ou des termes similaires pour l'analyse thématique ou la recommandation de contenu.

### **4. Avantages et Limites**

**Avantages** :

- **Découverte de Structures Cachées** : Permet de révéler des relations ou des segments non évidents dans les données.
- **Flexibilité** : Applicable à divers types de données sans nécessiter de labels préalables.

**Limites** :

- **Interprétation des Résultats** : Les clusters obtenus peuvent être difficiles à interpréter ou à nommer.
- **Sensibilité aux Paramètres** : Les résultats peuvent varier en fonction des paramètres choisis, comme le nombre de clusters *k*.
- **Complexité Computationnelle** : Certains algorithmes peuvent être gourmands en ressources, surtout avec de grands ensembles de données.

---

### **Sources :**

1. **Université de Toulouse - Classification non supervisée** : Ce document présente les méthodes de classification non supervisée, y compris la classification ascendante hiérarchique et l'algorithme des K-moyennes. [Lien](https://www.math.univ-toulouse.fr/~besse/Wikistat/pdf/st-m-explo-classif.pdf)
2. **CNAM - Classification non supervisée et modèles de mélanges** : Ce cours détaille les principes de la classification non supervisée et l'utilisation des modèles de mélanges pour le clustering. [Lien](https://maths.cnam.fr/IMG/pdf/classif_et_melanges_cle8aa85d.pdf)
3. **Wikipédia - Apprentissage non supervisé** : Cette page offre une vue d'ensemble de l'apprentissage non supervisé, incluant ses méthodes et applications. [Lien](https://fr.wikipedia.org/wiki/Apprentissage_non_supervis%C3%A9)