import { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBox.css'
class SearchBox extends Component {
    render(){
        const {value} = this.props;
        const baseclassName = "search-box"
        return (
            <Fragment>
                <div className={`${baseclassName}__parent-div`}>
                <input placeholder={"search..."} className={`${baseclassName}__search-input`}/>
                <FontAwesomeIcon icon={faSearch} />
                </div>
            </Fragment>
        )
    }
}

export default SearchBox;