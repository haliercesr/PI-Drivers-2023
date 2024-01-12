//Components
import Card from '../../components/card/card'
import Loading from '../../components/loading/loading.component';
import Alert from '../../components/alert/alert.component';
import SearchBar from '../../components/searchbar/searchbar.component';
//Common imports
import { Link } from 'react-router-dom';
import { getDrivers, orderDrivers, filterDrivers, getTeams, filterApi, searchDrivers } from '../../components/redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//Styles
import style from './home.module.css';
import logoGit from '../../images/logoGit.png'
import logoLinkedin from '../../images/logoLinkedin.png'
import logoPortafolio from  '../../images/logoPortafolio.png'




function Home(props) {
    //VARIABLES
    const { num, setNum } = props;
    const allDrivers = useSelector(state => state.allDrivers)
    const allDriversFilter = useSelector(state => state.allDriversFilter)
    const [searchString, setSearchString] = useState('')
    const dispatch = useDispatch()
    const [numberpage, setNumberpage] = useState(1)
    const [temper, setTemper] = useState([])
    const [Message, setMessage] = useState({
        ShowCustomAlert: false,
        message: "",
    });
    //---------


    useEffect(() => {

        allDrivers.length === 0 && dispatch(getDrivers())
       
        // Obtener la lista de teams
        temper.length === 0 && dispatch(getTeams())

        setTemper(allDriversFilter)

        return (() => {
            
        })

    }, [allDriversFilter, location]);


    //FUNCIONES

    const handleChange = (e) => {
        e.preventDefault();
        setSearchString(e.target.value)
    };

    /* const handleKeyDown = (e) => {
       if (e.key === 'Enter') {
         // Si se presiona "Enter" mientras el botón está enfocado, llama a la función handleClick
         handleSubmit();
       }
     };*/

    const handleSubmit = async (e) => {
        e.preventDefault()
        setNum(0)
        await dispatch(searchDrivers(''));            //con await y setNum cada vez que se busca un pioto aparece el loading de carga
        await dispatch(searchDrivers(searchString));
        setNum(1)    
        setSearchString('')
    };

    function openCustomAlert() {
        return <Alert
            message={Message.message}
            onClose={closeCustomAlert}
        />
    }

    const closeCustomAlert = () => {
        setMessage({ ...Message, ShowCustomAlert: false })
    };

    const nextpage = () => {
        setNumberpage(numberpage + 1)
        window.scrollTo({ top: 0, behavior: 'auto' })                   //la funcion scrollTo de windows me lllea a la parte superior y con de forma instantanea con behavior:auto
    }

    const prevpage = () => {
        setNumberpage(numberpage - 1)
        window.scrollTo({ top: 0, behavior: 'auto' })
    }

    function arraygroup(array1) {
        let group = []
        let k = 0
        for (let i = 0; array1.length > i; i) {
            i = i + 9
            group.push(array1.slice(k, i))
            k = k + 9
        }
        return group
    }


    const pagination = () => {
        const data = allDrivers;
        return <div className={style.paginationContenedor}>
            <ul className={style.paginationPage}>
                {numberpage > 1 && <li key="previous"><button onClick={prevpage}>Anterior</button></li>}
                <li key="current"><button>{numberpage}</button></li>
                <span  className={style.paginationPage}>de</span>
                <li key="total" ><button>{arraygroup(data).length}</button></li>
                {numberpage < arraygroup(data).length && <li key="next"><button onClick={nextpage}>Siguiente</button></li>}
            </ul>
        </div>
    }

    function handleOrder(e) {
        setNumberpage(1)
        const types = "allDrivers"
        const evento = e.target.value
        dispatch(orderDrivers(evento))
        setNum(num + 1)// CON ESTO PUEDO HACER QUE SE ACTUALIZE EL USEEFFECT Y ME RENDERICE EL NUEVO ALLDOGS EN ORDEN ALFABETICO

    }

    const handleFilter = (e) => {
        setNumberpage(1)
        const evento = e.target.value
        dispatch(filterDrivers(String(evento)))
        setNum(num + 1)

    }

    const handleFilterFuente = (e) => {
        setNumberpage(1)
        const evento = e.target.value
        dispatch(filterApi(evento))
        setNum(num + 1)

    }


    const cards = (Drivers) => {

        return arraygroup(Drivers)[numberpage - 1].map((element) => {
            return <Card
                key={element.id}
                id={element.id}
                name={element.name}
                image={element.image}
                teams={element.teams}

            />
        })
    }

    const inicio = () => {
        setNum(0)
        try {
            allDrivers.length === 0 && dispatch(getDrivers())
        } catch (error) { (setMessage({ ShowCustomAlert: true, message: error.message })) }

    }
    //---------




    return (<div className={style.contenedorHome}>
        {/*BARRA DE NAVEGACION*/}
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString} />
        {/*-------------------*/}

        {/*FILTRADO*/}
        {allDrivers.length>0 && <div>
            <h3>Filtrar por:</h3>
            <div >
                <select onChange={handleOrder}>
                    <option >Eliga una opcion:</option>
                    <option value="AZ">Nombre A-Z</option>
                    <option value="ZA">Nombre Z-A</option>
                    <option value="ASCENDENTE">Mayor a menor Edad</option>
                    <option value="DESCENDENTE">Menor a mayor Edad</option>
                </select>
                <select onChange={handleFilter}>
                    <option >Escuderias:</option>
                    <option value="Todos">TODOS</option>
                    {temper.length > 0 && (temper.map(tem => { return <option value={tem}>{tem}</option> }))}
                </select>
                <select onChange={handleFilterFuente}>
                    <option value="Todos">Todos</option>
                    <option value="API">API</option>
                    <option value="BDD">BASE DE DATOS</option>
                </select>
            </div>
        </div>}
        {/*--------*/}

        {/*BUSQUEDAS POR SEARCHBAR SIN RESULTDOS*/}
        {num !== 0 && allDrivers.length === 0 && (<>
            <h2>No hay resultados</h2>
            <Link to='/home' onClick={inicio}>Volver al inicio</Link>
        </>)}
        {/*-------------------------------------*/}


        {/*RENDERIZADO DE CARDS*/}
        <div className={style.Home}>
            {/*PAGINACION*/}
            {allDrivers.length > 0 && pagination()}
            {/*----------*/}

            {allDrivers.length > 0 && cards(allDrivers)}

             {/*PAGINACION*/}
             {allDrivers.length > 0 && pagination()}
            {/*----------*/}
        </div>
        {/*-----------------------*/}


        {/*MENSAJE DE ALERT*/}
        {Message.ShowCustomAlert === true && openCustomAlert()}
        {/*----------------*/}


        {/*GIF DE CARGA LOADING*/}
        {allDrivers.length === 0 && num === 0 ? <Loading /> : null}
        {/*--------------------*/}
        
        {/*FONDO PAGINA*/}
         <div className={style.footer}>
            <strong>by Halier Cesar</strong>
            <a target="_blank" title='GitHub' rel="noopener noreferrer" href='https://github.com/haliercesr'><img id={style.logoGit} src={logoGit} alt='git' /></a>  {/*TARJET BLANK ES PARA QUE SE HABRA EN UNA NUEVA PESTAÑA, rel="noopener noreferrer" ES RECOMENDADO PARA SITIOS DESCONOCIDOS, MEJORA LA SEGRIDAD Y PRIVACIDAD */}
            <a target="_blank" title='Linkedin' rel="noopener noreferrer" href='https://www.linkedin.com/in/cesaralexanderhalier/'><img id={style.logoLinkedin} src={logoLinkedin} alt='linkedin'/></a>
            <a target="_blank" title='Portafolio' rel="noopener noreferrer" href='https://portafolio111.vercel.app/'><img id={style.logoPortafolio} src={logoPortafolio} alt='portafoio'/></a>
            </div>
        {/*------------*/}
    </div>)
}

export default Home;