import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

function Cards(props) {
   const { characters } = props;
   return(
      <div className={styles.divCards}>
         {characters.map(character => 
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  image={character.image}
                  species={character.species}
                  gender={character.gender}
                  onClose={() => props.onClose(character.id)} // cada vez que se asocie a un evento y necesite un parametro se necesita poner callback
               />
            )}
      </div>
      ); 
}

export default Cards;

