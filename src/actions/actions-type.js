export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const SEARCH_CHARACTER = 'SEARCH_CHARACTER';

export function getAllCharacters(){
    return function(dispatch){
        return fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(characters => {
            dispatch({ type: GET_ALL_CHARACTERS, payload: characters.results })
        })
        .catch(error => console.log("error", error))
    }
}

export function getCharaterDetail(id){
    return function (dispatch){
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(detail => {
            dispatch({type: GET_CHARACTER_DETAIL, payload: detail})
        })
    }
}
