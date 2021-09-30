import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from './../../redux/actions/actions';
import '../cardStyles/cards.css'

const Movies = () => {
const dispatch = useDispatch()
const movies = useSelector(state => state.movies)



useEffect(()=> {
    console.log('me monte!!')
 dispatch(getMovies())
},[])


    return (
        <div className='cards-container'>
            {movies? movies.map(card => (
                <div className='card-container'>

                    <img className='img' src={card.images['Poster Art'].url} alt=""/>
                    <div className='title'>{card.title}</div>
                </div>
            )): 
            <h1>Loading...</h1>
            }
        </div>
    )
}

export default Movies
