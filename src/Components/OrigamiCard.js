import { origamiList } from '../Data/origamiList';
import ButtonBar from './ButtonBar';

import '../Styles/OrigamiCard.css';

function OrigamiCard() {
    return (
    <>
        <li className='ori-card'>
            <h2>{ origamiList[0].name }</h2>
            <img 
                className='ori-card-cover'
                src={ origamiList[0].coverImg }
                alt={ origamiList[0].imgAlt }
                title={ origamiList[0].imgAlt } 
            />
            <p>{ origamiList[0].description }</p>
            <ButtonBar />
        </li>
    </>
    );
};

export default OrigamiCard;