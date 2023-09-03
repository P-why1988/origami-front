import batPlane from '../Assets/CoverImages/bat-plane.jpg';

export const TYPE = {animal: 'animaux', box: 'boîtes', other: 'autres'};

export const origamiList = [
    {
        type: TYPE.animal,
        coverImg: batPlane,
        imgAlt: 'Avion de papier en origami',
        name: 'Avion chauve-souris',
        description: `Un avion qui bat des ailes en vol.\n` +
            `Il faut le lancer en le tenant bien au milieu, et mettre un peu de force.`,
        video: 'https://www.youtube.com/watch?v=1xakZTXOweU',
        instructions: 'https://www.origami-tutorial.com/flapping-paper-airplane.html'
    },
    {
        type: TYPE.animal,
        coverImg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Origami_Butterfly_%283596556252%29.jpg',
        imgAlt: 'Papillon en origami',
        name: 'Papillon',
        description: `Une version de papillon en origami.`,
        video: 'https://www.youtube.com/watch?v=XWppAdgvEtI',
        instructions: 'https://www.origami-fun.com/support-files/origami-butterfly-print.pdf'
    },
    {
        type: TYPE.other,
        coverImg: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Paper_Boat_-_Kolkata_2011-09-24_5730.JPG',
        imgAlt: 'Bâteau en origami',
        name: 'Bâteau enfants',
        description: `Oh le joli bâteau !`,
        video: 'https://www.youtube.com/watch?v=vNba3jbBSOw',
        instructions: 'https://www.origami-fun.com/support-files/origami-boat-print.pdf'
    },
    {
        type: TYPE.box,
        coverImg: batPlane,
        imgAlt: 'Fausse boîte 2',
        name: 'Une drôle de boîte, le retour de la vengeance',
        description: `On dirait pas que c'est une boîte, et pourtant...`,
        video: 'https://www.youtube.com/watch?v=1xakZTXOweU',
        instructions: 'https://www.youtube.com/watch?v=1xakZTXOweU'
    }
];