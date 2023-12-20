import { GET_DRIVERS, SEARCH_DRIVERS, ORDER, FILTER, TEAMS, FILTERbdd, DETAIL } from './types';
import axios from 'axios';
import { URLSERVER } from '../../../../configURL';

export const getDrivers = (reset) => {
    return async function (dispatch) {

        if (reset === "reset") {                //con esto logro reducir las llamadas a la API cada vez que se sale y se entra a la aplicacion
            return dispatch(
                {
                    type: GET_DRIVERS,
                    payload: reset
                }
            )
        }

        try {
            const { data } = await axios.get(`${URLSERVER}/drivers`)
            console.log(data)
            return dispatch(
                {
                    type: GET_DRIVERS,
                    payload: data
                }
            )
        } catch (error) {
            window.alert(error.message)
        }
    }
}

export const searchDrivers = (driver) => {
    return async function (dispatch) {

        if (driver === "") {          //con esto, el estado SEARCHDRIVERS queda vacio y aparece el loading
            return dispatch(
                {
                    type: SEARCH_DRIVERS,
                    payload: []
                }
            )
        }

        try {
            const { data } = await axios.get(`${URLSERVER}/drivers/name?name=${driver}`)
            return dispatch(
                {
                    type: SEARCH_DRIVERS,
                    payload: data
                }
            )
        } catch (error) { window.alert(error.message) }
    }
}


export const filterDrivers = (team) => {
    return {
        type: FILTER,
        payload: team
    }
}

export const orderDrivers = (orden) => {        // orden sera a para ascendente y d para decendente
    return {
        type: ORDER,
        payload: orden
    }
}



export const getTeams = () => {
    return async function (dispatch) {

        try {
            const { data } = await axios.get(`${URLSERVER}/teams`)
            return dispatch(
                {
                    type: TEAMS,
                    payload: data
                }
            )
        } catch (error) {
            window.alert("Error al obtener la lista de teams")
        }
    }
}

export const filterApi = (evento) => {
    return {
        type: FILTERbdd,
        payload: evento
    }
}

export const detailDriver = (idDriver) => {

    if(idDriver==="clean"){
        return {
            type: DETAIL,
            payload: []
        }
    }

    return async function (dispatch) {
    
            await axios.get(`${URLSERVER}/drivers/${idDriver}`)
            .then(({ data }) => {    //NO USAMOS ASYNC AWAIT ACA PORQUE SUELE SER MAS CONVENIENTE UTILIZAR PROMESAS EN LOS USEEFFECT QUE UTILIZAR ASYNC/AWAIT
                if (data[0].name) {                                                   //SE PUEDE PERO ES MAS COMPLEJO PASAR A ASYNC AWAIT, MAS ABAJO LO EXPLICAMOS
                    return dispatch({
                        type: DETAIL,
                        payload: data
                    })
                } else {
                   window.alert('Error al traer el piloto del servidor');
                }
             });
    }
}






