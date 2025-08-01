/* Component in the CharacterBG Component
 * Contains the NewCharacter component to add new characters 
   to the project
 * Contains the SceneCharacterAdd component to add the
   Scene characters */ 
import React, { useState } from 'react'
import styles from "../../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import btnStyles from "../../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import NewCharacter from "./NewCharacter"
import InfoChar from '../info/InfoChar';
import SceneCharacterAdd from './SceneCharacterAdd';

const CharactersAdd = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const { id, setCharacters, setShowCharactersAdd } = props;
    return ( 
        <div>
            <h5 style={{ textTransform: 'uppercase'}} className={`text-center mx-sm-5 mt-1 pl-5 py-1 ${styles.SubTitle }`}>
                Add Characters
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close }`} onClick={() => setShowCharactersAdd(false) } >Close</span>
            </h5>
            <div className={` ${styles.AliceBlueMild }`}>        
            {/* info */}
            {/* <Row>
            <Col sm={{span: 10, offset: 1 }} className='text-center' >
            <p>
            New Characters must be added here by the Add New Characters 
          form or on the Character's feature Add Character
          page. This will add them to the Add Scene Character dropdown.
            </p>
            </Col>
            </Row> */}
            <Row>
            <Col className="text-center mt-2" xs={12} sm={6}>
            <Button
                className={`px-5 py-0 my-2 ${btnStyles.Shed} ${btnStyles.Button}`}
                onClick={() => setShowInfo(showInfo => !showInfo)} >IMPORTANT
            </Button> 
            </Col>
            <Col className="text-center mt-2" xs={12} sm={6}>
            <Button
                className={`py-0 my-2 ${btnStyles.Shed} ${btnStyles.Button}`}
                onClick={() => setShowAdd(showAdd => !showAdd)} >ADD NEW CHARACTERS
            </Button> 
            </Col>
            </Row>
            {/* info */}
            <Row>
                <Col>
            {!showInfo ? (
                ""
                    ) : (
                        <InfoChar  /> 
                    ) } 
                </Col>
            </Row>
            {/* add new Characters */}
            <Row>
                <Col>
            {!showAdd ? (
                ""
                    ) : (
                        <NewCharacter
                        setShowAdd={setShowAdd} /> 
                    ) } 
                </Col>
            </Row>
            {/* ADD SCENE CHAR */}
                <SceneCharacterAdd
                 id={id}
                 setCharacters={setCharacters} />
            </div>
        </div>
        
    )
}

export default CharactersAdd