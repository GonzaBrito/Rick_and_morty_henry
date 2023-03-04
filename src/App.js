import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import NavBar from './components/Nav/NavBar.jsx'
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
// import Error from './components/Error404/Error.jsx';

function App () {

  const [characters, setCharacters] = useState([]);  // primero inicializo el array vacio, que luego llenaremos con personajes

  const [access, setAccess] = useState(false);

  const username = "ft35b@gmail.com";
  const password = "123456";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  // const example = {
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //  };
   //aca solo creamos y decimos que va a hacer la funcion, pero todavia falta pasarsela al hijo que es el NavBar
  // const onSearch = (data) => {   //en data me va a estar llegando un objeto-personaje que va a ser pedido por searchBar
  //   setCharacters([...characters, example]) 
    // llamo a setCharacters que es el que me va a manejar el array de personajes. Primero le pido que me traiga todo lo que tenga en character y 
    // luego que me traiga al personaje que pedi, en este caso es el ejemplo
  // };

  

  //pedido a la api
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  //recibe un id
  const onClose = id =>{
  // esta funcion va a filtrar todas las cards cuya id sean difentes al id que me llega por parametro
  // setCharacters para cambiar el estado 
    setCharacters(characters.filter(char => char.id !== id))
  }  

  const location = useLocation();


  return (
    
    <div className='App'>
      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
      <hr/>
      <Routes>
      {/* <Switch> */}
          <Route exact path="/" element={<Form login={login} />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
          
          <Route path="/detail/:detailId" element={<Detail />} />
          {/* <Route path="/detail/:detailId" render={( {match} ) => <Detail detailId={match.params.detailId} /> } />
          {/* //el objeto que recibe render tiene => match, history, location
          //dentro de math => tengo params
          // dentro de params => tengo detailId
          // el detailId es el numero de ID que me aparece en la url cuando toco una carta */}
          {/* <Route component={<Error />} /> */}
        {/* </Switch> */}
      </Routes> 
    </div>
    
  );
} 

export default App



