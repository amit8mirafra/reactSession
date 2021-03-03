import { Component } from 'react';

import './Component3.css'
class Component3 extends Component {
    render(){
        const {value} = this.props;
        const baseclassName = "component3"
        return (
            <div>
                {/* {value} */}
                <button>Button from comp 3</button>
                {/* {value} */}
                <span className={`${baseclassName}__span`}>Hello span</span>
            </div>
        )
    }
}

export default Component3;