import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharaterDetail } from '../actions/actions-type';
import { useParams } from 'react-router-dom'

export default function Detail(){
    const dispatch = useDispatch();
    const character = useSelector(state => state.characterDetail)
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getCharaterDetail(id))
    },[])


    return (
        <div>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <h4>{character.status}</h4>
            <h4>{character.species}</h4>
            <h4>{character.origin.name}</h4>
        </div>
    )
}


/* import React from 'react'

const ExploreDetails = ({ data }) => {
  const { name } = useParams();

  return (
      <div className="full-detail">
        <div className="explore-container">
          {
            data
              .filter((list) => list.name === name)
              .map((list) => (
                <div className="full-card" key={ list.id }>
                  <h2>Name: {list.name}</h2>
                  <h4>Category: {list.category}</h4>
                </div>
              ))}
        </div>
      </div>
  )
}

export default ExploreDetails */