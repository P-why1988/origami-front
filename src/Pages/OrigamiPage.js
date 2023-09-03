import { nanoid } from 'nanoid';
import OrigamiCard from '../Components/OrigamiCard';
import { origamiList } from '../Data/origamiList';
import '../Styles/OrigamiPage.css';

function OrigamiPage({ type }) {
    let origamis = [];
    if (type) {
        origamis = origamiList.filter(origami => origami.type === type && origami);
    } else {
        origamis = origamiList;
    }

    return (
        <>
            <h2>{ type ? `Voici la liste des ${type}` : `Voici la liste de tous les origamis`}</h2>
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