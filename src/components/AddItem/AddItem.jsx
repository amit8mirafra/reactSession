import { Component } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './AddItem.css'
class AddItem extends Component {
    render(){
        const {value, onClick} = this.props;
        const baseclassName = "add-item"
        return (
            <div className={`${baseclassName}__parent-div`}>
                <button className={`${baseclassName}__plus-button`} onClick={onClick}>
                    <FontAwesomeIcon className={`${baseclassName}__plus-icon`} icon={faPlus} />
                </button>
            </div>
        )
    }
}

export default AddItem;