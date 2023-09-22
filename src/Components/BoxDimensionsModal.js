import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BOX_TYPE } from "../Data/origamiList";

function BoxDimensionsModal(props) {
    const origami = props.origami;
    const [value1, setValue1] = useState(3);

    /**
     * Returns an array with results from dimension calculations
     */
    function calculate() {
        switch (origami.name) {
            case BOX_TYPE.etuiV:
                console.log("C'est le résultat 1 de l'étui en V");
                setValue1(value1 + 1);
                break;
            case BOX_TYPE.masu:
                console.log("C'est le résultat 1 de la moda masu");
                break;
            default:
                console.log("Aucune boîte trouvée");
                break;
        }
    };

    return (
        <Modal 
            {...props}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    { origami.name }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    { origami.mesureLabel1 &&
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{ origami.mesureLabel1 }</Form.Label>
                            <Form.Control type="number" placeholder="Entrez en mm" />
                        </Form.Group>
                    }
                    { origami.mesureLabel2 &&
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{ origami.mesureLabel2 }</Form.Label>
                            <Form.Control type="number" placeholder="Entrez en mm" />
                        </Form.Group>
                    }
                    { origami.mesureLabel3 &&
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{ origami.mesureLabel3 }</Form.Label>
                            <Form.Control type="number" placeholder="Entrez en mm" />
                        </Form.Group>
                    }
                </Form>
                <h3>Résultats</h3>
                <div>
                    <b>{ origami.resultLabel1 && origami.resultLabel1 }</b> : { value1 }
                </div>
                <div>
                    <b>{ origami.resultLabel2 && origami.resultLabel2 }</b>
                </div>
                <div>
                    <b>{ origami.resultLabel3 && origami.resultLabel3 }</b>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={ () => calculate(origami.name) }>
                    Calculer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BoxDimensionsModal;