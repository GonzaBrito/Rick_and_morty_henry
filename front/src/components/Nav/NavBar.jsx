import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from './NavBar.module.css'


function NavBar(props) {
    // props = { onSearch = funcion }
       return (
          <div className={styles.divNav}>
            <SearchBar onSearch={props.onSearch}/> {/*  aca le llega la funcion onSearch a NavBar, que ahora se la tiene que pasar al hijo que es SearBar para que la ejecute */}
            <NavLink to="/about">
               <button>About</button>
            </NavLink>
            <NavLink to="/home">
               <button>Home</button>
            </NavLink>
            
          </div>
       );
    } 
    
export default NavBar;