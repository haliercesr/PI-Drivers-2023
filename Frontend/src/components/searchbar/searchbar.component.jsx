//Components
import Alert from '../alert/alert.component'
//Common imports
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../../components/redux/actions/actions';
//Styles
import './searchbar.css';
import imagelogo from '../../components/searchbar/F1.svg';



function SearchBar(props) {

  const {handleChange, handleSubmit, searchString } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const allDriversCopia = useSelector(state => state.allDriversFilter)
  const dispatch = useDispatch()

  const [Message, setMessage] = useState({
    ShowCustomAlert: false,
    message: "",
  });

  function openCustomAlert() {
    return <Alert
      message={Message.message}
      onClose={closeCustomAlert}
    />
  }

  const closeCustomAlert = () => {
    setMessage({ ...Message, ShowCustomAlert: false })
  };

  useEffect(() => {
  }, [location]);

  const exit=()=>{
    navigate('/')
    dispatch(getDrivers("reset"))    //al salir hago un reset del estado general "allDrivers" con la copia guardada al principio
  }

  return (<>
    {Message.ShowCustomAlert === true && openCustomAlert()}
    {location.pathname === '/home' ? <div className="search-bar-container">
      <img src={imagelogo} alt='logo' className='logoBar'/>
      <button onClick={()=>navigate('/create')} className="search-button">
        Create
      </button>
      <form className="formInput" >
        <input
          type="search"
          placeholder="Buscar piloto..."
          className="search-input"
        //onKeyDown={handleKeyDown}
        //tabIndex={0}
          value={searchString}
          onChange={(e)=>handleChange(e)}
        />
        <button
        type='submit'
          onClick={handleSubmit}
          className="search-button"
        >
          Buscar
        </button>
      </form>
      <button onClick={exit} className="search-button">
        Salir
      </button>
    </div> : null}
    {location.pathname !== '/home' && location.pathname !== '/' && location.pathname !== '/create' ? <div className="search-bar-container">
      <button onClick={()=>{navigate('/home')}} className="search-button">
        Volver al inicio
      </button>
    </div> : null}
  </>);
}

export default SearchBar;
