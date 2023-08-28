import batPlane from '../Assets/CoverImages/bat-plane.jpg';

export const TYPE = {animal: 'animal', box: 'box'};

export const origamiList = [
    {
        type: TYPE.animal,
        coverImg: batPlane,
        imgAlt: 'Avion de papier en origami',
        name: 'Avion chauve-souris',
        description: `Un avion qui bat des ailes en vol.\n` +
            `Il faut le lancer en le tenant bien au milieu, et mettre un peu de force.`,
        video: 'https://www.youtube.com/watch?v=1xakZTXOweU'
    },
    {
        type: TYPE.animal,
        coverImg: batPlane,
        imgAlt: 'Avion 2',
        name: 'Avion 2',
        description: 'Un avion qui bat des ailes en vol. ' +
            'Il faut le lancer en le tenant bien au milieu, et mettre un peu de force.',
        video: 'https://www.youtube.com/watch?v=1xakZTXOweU'
    },
    {
        type: TYPE.box,
        coverImg: batPlane,
        imgAlt: 'Fausse boîte',
        name: 'Une drôle de boîte',
        description: `On dirait pas que c'est une boîte, et pourtant... nan en fait c'est pas une boîte`,
        video: 'https://www.youtube.com/watch?v=1xakZTXOweU'
    },
    {
        type: TYPE.box,
        coverImg: batPlane,
        imgAlt: 'Fausse boîte 2',
        name: 'Une drôle de boîte, le retour',
        description: `On dirait pas que c'est une boîte, et pourtant... nan en fait c'est pas une boîte`,
        video: 'https://www.youtube.com/watch?v=1xakZTXOweU'
    }
];