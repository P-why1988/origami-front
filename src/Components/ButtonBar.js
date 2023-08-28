import { nanoid } from 'nanoid';
import { buttonList } from '../Data/buttonList';
import '../Styles/ButtonBar.css';
import MyButton from './MyButton';

function ButtonBar({ origami }) {
    return (
    <div className='ori-btn-bar'>
        { buttonList.map(btn => 
            <MyButton 
                key={ nanoid() }
                origami={ origami }
                btn={ btn }
            />
        )}
    </div>
    );
};

export default ButtonBar;