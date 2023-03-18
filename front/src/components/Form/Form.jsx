import styles from './Form.module.css';
import { useState } from 'react'
import validation from './validation';

function Form(props) {
    
    const [userData, setUserData] = useState({
        username: '', 
        password: '',
       });

    const [errors, setErrors] = useState ({
        username: '', 
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name] : value 
        })
        setErrors(
            validation({
                ...userData,
                [name]: value
            })
        )
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
        console.log(userData);
    }


    return (
        <div className={styles.divForm}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange}  autoComplete="off" />
                <p className={styles.error}>
                    {errors.username && errors.username}
                </p>
                <span>Usuarme: "ft35b@gmail.com"</span>
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
                <p className={styles.error}>
                {errors.password && errors.password}
                </p>
                <span>Password: 123456</span>
                <br />
                <hr />
                <button type="submit" >Login</button>
            </form>
        </div>
    );
}

export default Form;