import { useState } from 'react';
import styles from './cards.module.scss';
import Card from '../card/card';

const Cards = () =>{
const [ sources, setSources ] = useState([
        { path:'/images/contract-1.jpg',text:'Ya no es necesario tener que trasladarte para firmar un acuerdo o iniciar un trámite.',title:'Practicidad' },
        { path:'/images/security-4.jpg',text:'Podes enviar o recibir una notificación dentro de un marco legal.',title:'SEGURIDAD' },
        { path:'/images/hand-shake-2.jpg', text:'Almacenamiento de documentos para usarlos cuando se necesiten.',title:'DISPONIBILIDAD' },
        { path:'/images/real-time-1.jpg',text:'Información segura y confiable en tiempo real.',title:'VELOCIDAD' }
    ]);

    return(
        <div className={styles.cardsContainer}>
            {
            sources.map(card =>{
               return <Card path={card.path} text={card.text} key={card.title} title={card.title} />
            })
        }
        </div>
    )
}



export default Cards;