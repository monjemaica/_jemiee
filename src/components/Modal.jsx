import React from 'react';
import ReactDOM  from 'react-dom';

const Modal = ({img, onClose}) => {
    const closeModalHandler = (e) => {
        onClose(false);
        console.log('click')
    };

    const Backdrop = () => {
        return <div className="backdrop" onClick={closeModalHandler} />
    }

    const ModalOverlay = () => {
        return <div className='modal'>

            <div className="modal-content">
                <img src={img} alt="" />
            </div>

        </div>

        
    }


    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={closeModalHandler} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay img={img} />,
                document.getElementById('overlay-root')
            )}
        </>
    );
}

export default Modal;