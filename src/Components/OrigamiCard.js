import ButtonBar from './ButtonBar';

import '../Styles/OrigamiCard.css';

function OrigamiCard({ origami }) {

    return (
    <>
        <li className='ori-card'>
            <h2>{ origami.name }</h2>
            <img 
                className='ori-card-cover'
                src={ origami.coverImg }
                alt={ origami.imgAlt }
                title={ origami.imgAlt } 
            />
            <p>{ origami.description }</p>
            <ButtonBar
                origami={ origami }
            />
        </li>
    </>
    );
};

export default OrigamiCard;