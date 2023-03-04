
import styles from './About.module.css';

function About() {
    // props = { onSearch = funcion }
       return (
            <div className={styles.divAbout}>
                <h1>Mi primer trabajo con React</h1>
                <h3>Rick y morty es un proyecto dirigido por Henry y hechos por los alumos, donde nosotros mismo modificamos a nuestro gusto la app.</h3>
                <h4>Me llamo Gonzalo Brito</h4>
                <h4>Y les presento mi primer proyecto</h4>
                <br />
                <h5>Lamento los estilos que tienen que ver</h5>
            </div>
       );
    } 
    
export default About;