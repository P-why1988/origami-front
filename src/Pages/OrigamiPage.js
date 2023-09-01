import { nanoid } from 'nanoid';
import OrigamiCard from '../Components/OrigamiCard';
import { origamiList } from '../Data/origamiList';
import '../Styles/OrigamiPage.css';

function OrigamiPage({ type }) {
    const origamis = origamiList.filter(origami => origami.type === type && origami);

    return (
        <>
            <h2>Voici la liste des { type }</h2>
            <ul className='ori-list'>
                    { origamis.map((element) => 
                        <OrigamiCard
                            key={ nanoid() }
                            origami={ element }
                        />
                    )}
            </ul>
        </>
    );
};

export default OrigamiPage;