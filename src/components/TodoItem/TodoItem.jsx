import { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './TodoItem.css'
class TodoItem extends Component {
    render(){
        const {value} = this.props;
        const baseclassName = "todo-item"
        return (
            <Fragment>
                <div className={`${baseclassName}__parent-div`}>
                    <div className={`${baseclassName}__item-div`}>
                    <label className={`${baseclassName}__item-label`}>Task1</label>
                    <FontAwesomeIcon icon={faEdit} />
                    </div>
                    <div className={`${baseclassName}__trash-div`}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default TodoItem;