import { Component } from 'react';

import './Component3.css'
class Component3_1 extends Component {
    render(){
        const {value} = this.props;
        const baseclassName = "component2"
        return (
            <div>
                {value}
                <p>hello there</p>
                {value}
                <span className={`${baseclassName}__span`}>Hello span</span>
            </div>
        )
    }
}

export default Component3_1;