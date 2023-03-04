import styles from './Error.module.css';

function Error () {
    return (
        <div className={styles.divError}>
            <h1>Error 404</h1>
            <h3>Not Found </h3>
            <h4>The resource requested could not be found on this server!</h4>
        </div>
    );
}

export default Error;