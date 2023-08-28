import { BUTTON_TYPE } from '../Data/buttonList';
import '../Styles/MyButton.css'

function MyButton({ origami, btn }) {
    function btnType() {
        switch(btn.buttonType) {
            case BUTTON_TYPE.youtube:
                return origami.video;
            case BUTTON_TYPE.instructions:
                return origami.video;
            default:
                return 'error';
        };
    };

    return (
    <div className='ori-btn-container'>
        <a href={ btnType() }>
                <img 
                    src={ btn.src }
                    alt={ btn.alt }
                    title={ btn.alt }
                />
        </a>
        <label>{ btn.label }</label>
    </div>
    );
};

export default MyButton;