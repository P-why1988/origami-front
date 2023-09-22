import batPlane from '../Assets/CoverImages/bat-plane.jpg';
import etuiVimg from '../Assets/CoverImages/etui-v.jpg';

export const TYPE = { animal: 'animaux', box: 'boîtes', other: 'autres' };

export const BOX_TYPE = { etuiV: 'Etui V pour cartes', masu: 'Masu' }

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
        coverImg: etuiVimg,
        imgAlt: 'Etui en forme de V',
        name: BOX_TYPE.etuiV,
        description: `Etui avec une ouverture en forme de V. Convient aux paquets de cartes peu épais.`,
        video: 'https://www.youtube.com/watch?v=fEgUx_0-1Qs&t=158s',
        // instructions: 'https://www.youtube.com/watch?v=1xakZTXOweU',
        mesureLabel1: 'Largeur des cartes',
        mesureLabel2: 'Epaisseur du paquet',
        resultLabel1: 'Longueur totale à découper',
        resultLabel2: 'Largeur totale à découper',
    }
];