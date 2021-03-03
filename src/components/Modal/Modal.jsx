import { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

import './Modal.css'
class Modal extends Component {
    render(){
        const {value, onClose} = this.props;
        const baseclassName = "modal"
        return (
                <div className={`${baseclassName}`}>
                    <button onClick={onClose}><FontAwesomeIcon icon={faWindowClose}/></button>
                    <div className={`${baseclassName}__content`}>
                        abc
                    </div>
                </div>
        )
    }
}

export default Modal;