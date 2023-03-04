import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {
    // props = { onSearch = funcion }

    //se crea una funcion para vaya capturando los datos
    //se crea el estado
   const [character, setCharacter] = useState ("")

   // se crea la funcion que va cargando datos al estado character
   // handleChange se utiliza como manejador de eventos
   //la funcion recibe el evento del input
   const handleChange = event => {  //lo que se camptura del input llega al evento como event.target.value y se le hace destructuring
      const {value} = event.target; 
      setCharacter (value); // toma el valor y lo cambia virtualmente antes de mostrarlo 
   }


       return (
          <div className={styles.divSearchBar}>
             <input 
                type="search"
                name="search"
                id="search"
                onChange={handleChange}  // conecta el input con la funcion handleChange. Cada vez que se cambie el valor del input se ejecuta la funcion handleChange
             />
             <button onClick={() => props.onSearch(character)}>Agregar</button>  
             {/* se necesita ponerle una callback a la funcion para decirle que cada vez que le hagan click ejecute esa funcion*/}
          </div>
       );
    } 
    
export default SearchBar;