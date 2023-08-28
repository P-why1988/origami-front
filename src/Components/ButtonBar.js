import '../Styles/ButtonBar.css';
import youtubeBtn from '../Assets/Icons/youtube-btn.svg';
import { origamiList } from '../Data/origamiList';

function ButtonBar() {
    return (
    <>
        <img 
            className='ori-btn-bar-item'
            src={ youtubeBtn }
            alt='Bouton Youtube'
            title='Bouton Youtube'
            onClick={ origamiList[0].video }
        />
    </>
    );
};

export default ButtonBar;