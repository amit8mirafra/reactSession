import { Component } from 'react';
import Component3 from '../Component3';

import './Component2.css'
class Component2 extends Component {
    render(){
        const {value} = this.props;
        const baseclassName = "component2"
        return (
            <div>
                {value}
                <p>hello there</p>
                {value}

                <p>this is component 2</p>
                <Component3 />
                <span className={`${baseclassName}__span`}>Hello span</span>
            </div>
        )
    }
}

export default Component2;