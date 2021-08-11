import { useState } from 'react';
import styles from './cards.module.scss';
import Card from '../card/card';

const Cards = () =>{
const [ sources, setSources ] = useState([
        { path:'/images/contract-1.jpg',text:'Ya no es necesario tener que trasladarte para firmar un acuerdo o iniciar un trámite' },
        { path:'/images/hand-shake-2.jpg',text:'podes enviar o recibir una notificación dentro de un marco legal' },
        { path:'/images/security-4.jpg', text:'Almacenamiento de documentos para usarlos cuando se necesiten' },
        { path:'/images/real-time-1.jpg',text:'Información segura y confiable en tiempo real' }
    ]);

    return(
        <div className={styles.cardsContainer}>
            {
            sources.map(card =>{
               return <Card path={card.path} text={card.text} />
            })
        }
        </div>
    )
}



export default Cards;