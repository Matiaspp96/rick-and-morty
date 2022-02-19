import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCharacters } from '../actions/actions-type'
import { useEffect } from 'react'

export default function Home(){
    const dispatch = useDispatch();
    const characters = useSelector(state => state.allCharacters);

    useEffect(()=>{
        dispatch(getAllCharacters())
    },[])

    console.log(characters)

    return (
        <div>
            {characters && characters.map(char =>(
                <div key={char.id}>
                    <img src={char.image} alt={char.name} />
                    <h2>{char.name}</h2>
                    <h4>{char.status}</h4>
                    <h4>{char.species}</h4>
                    <h4>{char.origin.name}</h4>
                </div>
                )
            )}
        </div>
    )
        
    
}