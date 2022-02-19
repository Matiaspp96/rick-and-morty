import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL, SEARCH_CHARACTER } from "../actions/actions-type"

const initialState = {
    allCharacters: [],
    characterDetail: {},
    searchChar:[]
}

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case GET_ALL_CHARACTERS:{
            return{
                ...state,
                allCharacters: payload
            }
        }
        case GET_CHARACTER_DETAIL:{
            return{
                ...state,
                characterDetail: payload
            }
        }
        default: return state
    }
}