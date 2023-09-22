import ButtonBar from './ButtonBar';

import '../Styles/OrigamiCard.css';
import { useState } from 'react';
import BoxDimensionsModal from './BoxDimensionsModal';

function OrigamiCard({ origami }) {

    const [showModal, switchShowModal] = useState(false);

    function toggleModal() {
        switchShowModal(showModal ? false : true);
    }

    return (
    <>
        <li className='ori-card'>
            <h3>{ origami.name }</h3>
            <img 
                className='ori-card-cover'
                src={ origami.coverImg }
                alt={ origami.imgAlt }
                title={ origami.imgAlt }
                onClick={ toggleModal }
            />
            <p>{ origami.description }</p>
            <ButtonBar
                origami={ origami }
            />
            <BoxDimensionsModal
                origami={ origami }
                show={ showModal }
                onHide={ toggleModal }
            />
        </li>
    </>
    );
};

export default OrigamiCard;