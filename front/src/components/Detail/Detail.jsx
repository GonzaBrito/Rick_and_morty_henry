import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Detail.module.css';

function Detail() {

    const [character, setCharacter] = useState({})
    const {detailId} = useParams();
    const navigate = useNavigate();

    const volver = () => {
        navigate("/home");
    }

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
      <div className={styles.divDetail}>
        <br />
        <button onClick={volver}>Volver</button>
        {character.name && <h1>Nombre: {character.name}</h1>}
        <div className={styles.content}>
          {character.image && <img src={character.image} alt={character.name} className={styles.image} />}
          <ul>
            <li>{character.status && <h3>Estado: {character.status}</h3>}</li>
            <li>{character.species && <h3>Especie: {character.species}</h3>}</li>
            <li>{character.gender && <h3>Gender: {character.gender}</h3>}</li>
            <li>{character.type && <h3>Tipo: {character.type}</h3>}</li>
          </ul>
        </div>
      </div> 
    );
 }
 
 export default Detail;
 

