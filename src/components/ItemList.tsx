import React, { useEffect } from 'react';
import { AppDispatch } from '../store/store'; // Importation du type AppDispatch pour typer useDispatch
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../store/itemSlice';
import { RootState } from '../store/store';

// Déclaration du composant fonctionnel ItemList
const ItemList: React.FC = () => {
  // Utilisation du hook useDispatch pour obtenir la fonction de dispatch du store Redux
  const dispatch = useDispatch<AppDispatch>();
  // Utilisation du hook useSelector pour sélectionner des données spécifiques dans le store Redux
  // Ici, on sélectionne la liste des items du state
  const items: any = useSelector((state: RootState) => state.items.items);

  // Utilisation du hook useEffect pour effectuer un effet de bord
  // Ici, l'effet est déclenché au montage du composant (comportement similaire à componentDidMount)
  useEffect(() => {
    dispatch(fetchItems()); // Envoie une action pour récupérer les items depuis une source (ex: API)
  }, [dispatch]); // Le tableau de dépendances inclut dispatch pour éviter des appels multiples

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {/* Itération sur la liste des items et affichage de chacun dans un élément <li> */}
        {items.map((item: any, index: any) => (
          <li key={index}>{item.name}</li> // Utilisation de l'index comme clé (peut être amélioré si un ID unique est disponible)
        ))}
      </ul>
    </div>
  );
};

export default ItemList; // Exportation du composant pour l'utiliser dans d'autres parties de l'application
