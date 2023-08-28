import youtubeBtn from '../Assets/Icons/youtube-btn.svg';
import instructionsBtn from '../Assets/Icons/instructions-btn.svg'

export const BUTTON_TYPE = {
    youtube: 'Youtube',
    instructions: 'Instructions'
};

export const buttonList = [
    {
        buttonType: BUTTON_TYPE.youtube,
        src: youtubeBtn,
        alt: 'Bouton Youtube',
        label: 'Vidéo'
    },
    {
        buttonType: BUTTON_TYPE.instructions,
        src: instructionsBtn,
        alt: 'Bouton Instructions',
        label: 'Instructions'
    }
]