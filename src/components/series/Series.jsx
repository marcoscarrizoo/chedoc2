import React, {useEffect} from 'react'
import { getSeries } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import '../cardStyles/cards.css'

const Series = () => {
const dispatch = useDispatch()
const series = useSelector(state => state.series)

useEffect(()=> {
dispatch(getSeries())
},[])

    return (
        <div className='cards-container'>
           {series? series.map(serie => (
                <div className='card-container'>

                    <img className='img' src={serie.images['Poster Art'].url} alt=""/>
                    <div className='title'>{serie.title}</div>
                </div>
            )) : 
            <div>Loading...</div>
            }
        </div>
    )
}

export default Series
