//Components
import Loading from "../../components/loading/loading.component";
//Common imports
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { detailDriver, searchDrivers } from '../../components/redux/actions/actions';
//Style
import styles from './detail.module.css';


function Detail(props) {

   const { id } = useParams();
   //const allDrivers = useSelector(state => state.allDrivers)
   //const [character, setCharacter] = useState([]);
   const detail = useSelector(state => state.detail)
   const dispatch = useDispatch()
   const location = useLocation();


   useEffect(() => {
      //TRAIGO EL PERSONAJE DESDE EL ESTADO GLOBAL DE REDUX                       
      //  if (allDrivers.length > 0) {
      //     const data = allDrivers.filter(dri => !Number(id)?dri.id===id:dri.id === Number(id))  //filtro el resultado segun si el id es una string o un numero
      //     setCharacter(data)};  
      //},[id,allDrivers]);

      //TRAIGO EL PERSONAJE DESDE EL BACKEND
      console.log(id)
      detail.length === 0 && dispatch(detailDriver(id))

      return (() => {
         // para que el detalle de una carta no quede guardado cuando salimos, osea limpiar el estado
          //CLEANDETAIL
          dispatch(detailDriver("clean"))
      })
   }, [id])


 //  const { name:{forename}, name:{surname}, nationality, description, dob, teams, image:{url} } = detail[0].name?detail[0]:null;





   return (
      <div className={styles.DetailContainerCard}>
         {detail.length === 0 && <Loading />}
         {detail.length !== 0 && (<div className={styles.container}>
            {/*<img className={styles.imgZoom} src={character.image.url} alt="driver"></img>*/}
            <div className={styles.Detail}>
               <div className={styles.titleDetail}>
                  <h1 className={styles.titleDet}> {`${detail[0].name.forename} ${detail[0].name.surname}`}</h1>
               </div>
               <div className={styles.textDetail}>
                  <h2><span>Id:</span> {id}</h2>
                  <h2><span>Nacionalidad:</span> {detail[0].nationality}</h2>
                  <h2><span>Descripcion:</span> {detail[0].description}</h2>
                  <h2><span>Fecha de nacimiento:</span> {detail[0].dob}</h2>
                  <h2><span>Teams:</span> {detail[0].teams}</h2>
               </div>
            </div>
            <div className={styles.img}>
               <img src={detail[0].image.url} alt="driver"></img>
            </div>
         </div>
         )};
      </div>
   );
}

export default Detail;



/*useEffect(()=>{
try{const info = async()=>{                                                //primero guardamos en la variable "info" lo que nos devuelve la funcion asincrona
const{data}= await axios(`http://localhost:3001/character/${id}`)
}

info()                                                               //despues dentro del hook tendrriamos que llamar a info
}catch(error){windows.alert(error.message)}

})
*/