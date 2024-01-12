import { GET_DRIVERS, SEARCH_DRIVERS, ORDER, FILTER, TEAMS, FILTERbdd, DETAIL } from "../actions/types"
import { comparar } from '../../../utils/comparar.js'

const initialState = {
    allDrivers: [],
    allDriversFilter: [],
    allDriversCopia: [],
    detail: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: payload === "reset" ? state.allDriversCopia : payload,
                allDriversCopia: payload === "reset" ? state.allDriversCopia : payload,
            }
        case SEARCH_DRIVERS:
            return {
                ...state,
                allDrivers: payload,
            }
        case FILTER:
            return {
                ...state,
                allDrivers: payload === "Todos"
                    ? state.allDriversCopia
                    : state.allDrivers.filter((dri) => { return dri.teams && dri.teams.includes(payload) })
            }
        case ORDER:
            return {
                ...state,
                allDrivers: state.allDrivers.sort((a, b) => { return comparar(a, b, payload) })
            }
        case TEAMS:
            return {
                ...state,
                allDriversFilter: payload
            }
        case FILTERbdd:
            let filteredDrivers = [];
            const drivers = state.allDrivers;

            if (payload === "Todos") {
                filteredDrivers = state.allDriversCopia;
            } else if (payload === "API") {
                filteredDrivers = drivers.filter((dri) => typeof dri.id === "number");
            } else if (payload === "BDD") {
                filteredDrivers = drivers.filter((dri) => dri.created === true);
            }

            return {
                ...state,
                allDrivers: filteredDrivers
            }
        case DETAIL:
            return {
                ...state,
                detail: payload
            }
        default:
            return { ...state }
    }
}

export default rootReducer;