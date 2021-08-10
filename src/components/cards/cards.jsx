import { useState } from 'react';
import styles from './cards.module.scss';
import Card from '../card/card';

const Cards = () =>{
const [ sources, setSources ] = useState([
        '/images/contract-1.jpg',
        '/images/hand-shake-2.jpg',
        '/images/security-4.jpg',
        '/images/real-time-1.jpg'
    ]);

    return(
        <div className={styles.cardsContainer}>
            {
            sources.map(pepe =>{
               return <Card path={pepe}/>
            })
        }
        </div>
    )
}



export default Cards;