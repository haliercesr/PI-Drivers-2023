//Components
import Alert from '../../components/alert/alert.component';
import { getDrivers } from '../../components/redux/actions/actions';
//Commons imports
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import validations from './validations';
import axios from 'axios';
import { URLSERVER } from "../../../configURL";
//Styles
import style from "./create.module.css"


function Create(props) {

   const navigate = useNavigate();
   const dispatch = useDispatch()
   const allDriversFilter = useSelector(state => state.allDriversFilter)
   const [allTeams, SetAllTeams] = useState([])
   const [user, setData] = useState(
      {
         forename: '',
         surname: '',
         nationality: '',
         description: '',
         dob: '',
         image: '',
         selectedTeams: [],

      })

   const [errors, setErrors] = useState({})

   const [Message, setMessage] = useState({
      ShowCustomAlert: false,
      message: "",
   });

   //FUNCIONES

   function openCustomAlert() {
      console.log(Message.message)
      return <Alert
         message={Message.message}
         onClose={closeCustomAlert}
      />
   }

   const closeCustomAlert = () => {
      setMessage({ ...Message, ShowCustomAlert: false })
   };

   useEffect(() => {

      try {
         SetAllTeams(allDriversFilter)
      } catch (error) { setMessage({ ShowCustomAlert: true, message: error.message }) }
      return (() => {

      })
   }, [Message]);

   const handleSubmit = async (e) => {
      e.preventDefault()   //evitar que se recarge la pagina 

      try {
         if (user.forename === '') {
            setMessage({ ShowCustomAlert: true, message: 'Por favor completar el formulario' });
         }
         const { forename, surname, nationality, description, dob, image, selectedTeams } = user
         const valuesArray = Object.values(errors).join() //tomo los valores de error
         if (valuesArray.length === 5) {

            let userSubmit = {
               forename,
               surname,
               nationality,
               description,
               dob: dob.replace(/-/g, "/"),  // '/ /' busca todas las ocurrencias de "/" en la cadena, y la bandera "g" significa "global", lo que asegura que se reemplacen todas las ocurrencias, no solo la primera.
               image,
               selectedTeams,
            }

            const { data } = await axios.post(`${URLSERVER}/drivers/`, userSubmit)

            console.log(data)
            if (data) {
               setMessage({ ShowCustomAlert: true, message: "El piloto se creo con exito!" });
               dispatch(getDrivers())

            } else {
               setMessage({ ShowCustomAlert: true, message: "El piloto ya existe, por favor elije otro nombre" });
            }


         } else if (user.forename !== '') {
            setMessage({ ShowCustomAlert: true, message: "El formulario contiene errores" });
         }




      } catch (error) { setMessage({ ShowCustomAlert: true, message: error.message }) }
   }


   const handleChange = (e) => {
      const property = e.target.value
      const name = e.target.name
      setData({ ...user, [name]: property })
      setErrors(validations({ ...user, [name]: property }))


      if (e.target.type === "checkbox") {
         if (user.selectedTeams.includes(property)) {
            // Si ya está seleccionado, quítalo
            const updatedTeams = user.selectedTeams.filter(
               (temp) => temp !== property
            );
            setData({ ...user, selectedTeams: updatedTeams });
            setErrors(validations({ ...user, selectedTeams: updatedTeams }))

         } else {
            // Si no está seleccionado, agrégalo
            setData({ ...user, selectedTeams: [...user.selectedTeams, property] });
            setErrors(validations({ ...user, selectedTeams: [...user.selectedTeams, property] }))
         }
      }
   }

   const volverHome = () => {
      navigate('/home');
   };
   //---------

   return (<div className={style.containerCreate}>
      {Message.ShowCustomAlert === true && openCustomAlert()}
      <form className={style.RegForms} onSubmit={handleSubmit}>

         <div className={style.FormConteiner}>
            <div className={style.inputsConteiner}>
               <h4>Caracteristicas:</h4>
               <div className={style.labelform1}>
                  <div className={style.labelReg}>
                     <input placeholder=" Nombre" className={style.inputNombre} name="forename" onChange={handleChange} />
                  </div>
                  <p className={style.p1}>{errors.forename}</p>
               </div>
               <div className={style.labelform1}>
                  <div className={style.labelReg}>
                     <input placeholder=" Apellido" className={style.inputNombre} name="surname" onChange={handleChange} />
                  </div>
                  <p className={style.p1}>{errors.surname}</p>
               </div>
               <div className={style.labelform1}>
                  <div className={style.labelReg}>
                     <input placeholder=" Nacionalidad" className={style.inputNombre} name="nationality" onChange={handleChange} />
                  </div>
                  <p className={style.p1}>{errors.nationality}</p>
               </div>
               <div className={style.labelform1}>
                  <div className={style.labelReg}>
                     <input type="date" placeholder=" Fecha de nacimiento" className={style.inputNombre} name="dob" onChange={handleChange} />
                  </div>
                  <p className={style.p1}>{errors.dob}</p>
               </div>
               <div className={style.labelform1}>
                  <div className={style.labelReg}>
                     <input placeholder=" Link de imagen" type='string' className={style.linkImagen} name="image" onChange={handleChange} />
                  </div>
                  <p className={style.p1}>{errors.image}</p>
               </div>
               <div className={style.labelform1}>
                  <div className={style.labelReg}>
                     <textarea placeholder=" Agrega una descripcion" type='string' className={style.inputNombre} name="description" onChange={handleChange} />
                  </div>
                  <p className={style.p1}>{errors.description}</p>
               </div>
            </div>
            <div className={style.listTemperaments}>
               <h4>Selecciona escuderias:</h4>
               <ul className={style.listaUl}>
                  {allTeams.map((team) => (
                     <li className={style.listaTemps1} key={team}>
                        <label>
                           <input
                              type="checkbox"
                              value={team}
                              checked={user.selectedTeams.includes(team)}
                              onChange={handleChange}
                           />
                           {team}
                        </label>
                     </li>
                  ))}
               </ul>
            </div>
            <div className={style.temSelect}>
               <h4>Escuderias seleccionadas:</h4>
               <ul  >
                  {user.selectedTeams.map((team) => (
                     <li className={style.listaTemps2} key={team}>✅{team}</li>
                  ))}
               </ul>
            </div>
         </div>
         <p className={style.p1}>{errors.selectedTeams}</p>
         <div className={style.buttonSubmit}>
            <button type="submit">Crear</button>
         </div>
         <span ><button onClick={volverHome} className={style.spanButton}><u>Volver al inicio</u></button></span>
      </form >


   </div >)
}

export default Create;