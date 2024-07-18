import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addItem } from '../store/itemSlice';

// Déclaration du composant fonctionnel MyComponent
const MyComponent = () => {
  // Déclaration de l'état local pour stocker le nom de l'élément
  const [itemName, setItemName] = useState('');
  
  // Utilisation du hook useDispatch pour obtenir la fonction de dispatch du store Redux
  const dispatch = useDispatch<AppDispatch>();

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    if (itemName.trim()) { // Vérifie si le nom de l'élément n'est pas vide ou constitué uniquement d'espaces
      dispatch(addItem({ name: itemName })); // Envoie une action pour ajouter un nouvel élément avec le nom spécifié
      setItemName(''); // Réinitialise l'état itemName à une chaîne vide
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Déclaration du formulaire avec un gestionnaire de soumission */}
      <input
        type="text" // Type de champ de saisie
        value={itemName} // Valeur contrôlée liée à l'état itemName
        onChange={(e) => setItemName(e.target.value)} // Met à jour l'état itemName à chaque changement de saisie
      />
      <button type="submit">Add Item</button> {/* Bouton pour soumettre le formulaire */}
    </form>
  );
};

export default MyComponent; // Exportation du composant pour l'utiliser dans d'autres parties de l'application
