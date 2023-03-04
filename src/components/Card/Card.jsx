import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.divButton}>
            <button onClick={props.onClose}>X</button>
         </div>
            <Link to={`/detail/${props.id}`} >
               <h2>{props.name}</h2>
            </Link>
            <img className={styles.image} src={props.image} alt={props.name} />
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
      </div>
   );
}

export default Card;


