import { Component, Fragment } from 'react'
import Component2 from '../Component2'
import Component3 from '../Component3'
import SearchBox from '../SearchBox'
import TodoItem from '../TodoItem'
import AddItem from '../AddItem'
import Modal from '../Modal'
import './AppContainer.css'

class Component1 extends Component {
    constructor(props){
        super(props)

        this.state = {
            value1: 0,
            value2: 2,
            value3: 'str',
            openModal: false
        }
    }
    setSatetoPlus1 =() =>{
        this.setState({value1: this.state.value1 + 1})
    }
    openModal = () => {
        this.setState({openModal: true})
    }
    closeModal = () => {
        this.setState({openModal: false})
    }

    render(){
        const { value1, value2, value3, openModal} = this.state

        const baseclassName = "app-container"
        return (
            <Fragment>
             <div className={`${baseclassName}`}>
                <SearchBox />
            <label>To-do</label>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            <label>In Progress</label>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            <label>Completed</label>
                <TodoItem />
                <TodoItem />
                <TodoItem />

                <AddItem onClick={this.openModal}/>
                </div>
                {openModal && <Modal onClose={this.closeModal}/>}
            </Fragment>
        )
    }
}

export default Component1;