import { useState } from "react";
import { GameUrl } from "../components/gameUrl";
import { url } from "../helpers/url";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import { Container } from "react-bootstrap";



interface props {
  option: number;
  session: string;
  setOption: (setOption) => void;
  socket: (
    socket,
    setStandBy,
    setIO,
    setBoard,
    setActive,
    setRedScore,
    setGrayScore
  ) => void;
  setStandBy: (setStandBy) => void;
  setIO: (setIO) => void;
  setBoard: (setBoard) => void;
  setActive: (setActive) => void;
  setRedScore: (setRedScore) => void;
  setGrayScore: (setGrayScore) => void;
}
export const WelcomeBox: React.FC<props> = (props) => {
  const [welcomBoxClass, setWBClass] = useState("welcomeBox");
  const [gameUrlClass, setGameUrlClass] = useState("gameUrlBarInit");
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);


  const gameSelectHandler = () => {
      url("post", "/api/socket", { session: props.session, type: 2 });
      props.socket(
        props.session,
        props.setStandBy,
        props.setIO,
        props.setBoard,
        props.setActive,
        props.setRedScore,
        props.setGrayScore
      );
      setShow(false)

   // setWBClass("welcomeBoxSelected");
   // setGameUrlClass("gameUrlBar");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header >
          <Modal.Title>Welcome ! Select your game mode.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Stack gap={3}>

            <div className="bg-light border"> 
              <Button variant="primary" onClick={handleClose}>
                Single Device 
              </Button>
              <br/>Two Human Players on the same device.
            </div>
      
           {/* <div className="bg-light border"> 
                <Button variant="primary" onClick={gameSelectHandler}>
                  Multiple Devices
                </Button>
                <br/>Two Human Players on Different Devices. 
                <br/>You will need to share the game url with your second player.  
            </div> */}

         </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
};
