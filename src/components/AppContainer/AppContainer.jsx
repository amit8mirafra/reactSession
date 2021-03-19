import { Component, Fragment } from 'react'
import axios from 'axios'
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
            openModal: false,
            items: []
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

    fetchItems = () => {
        axios.get('http://demo3618192.mockable.io/todoItems').then(function (response) {
            // handle success
            console.log(response.data);
            this.setState({items: response.data.items})
        }.bind(this))
    }
    componentDidMount() {
            // fetch(`http://demo3618192.mockable.io/todoItems/`, 
            //     {method: 'GET',   
            //     headers: {
            //     'Content-Type': 'application/json',
            //      }
            //   }).then(res=>{
            //     console.log(res.json());
            //     this.setState({items: res.body})

            // }, err=>{
            //     console.log('api call failed')
            // }).then(data => console.log(data));
            this.fetchItems()
    }

    render(){
        const { value1, value2, value3, openModal} = this.state
        const {items} = this.state
        console.log(items)
        const baseclassName = "app-container"
        
        return (
            <Fragment>
             <div className={`${baseclassName}`}>
                <SearchBox />
            <label>To-do</label>
            {items.map(item=>{
                return item.status === "todo" ? <TodoItem item={item}/> : null
            })}
                {/* <TodoItem />
                <TodoItem />
                <TodoItem /> */}
            <label>In Progress</label>
            {items.map(item=>{
                return item.status === "inprogress" ? <TodoItem item={item}/> : null
            })}
            <label>Completed</label>
            {items.map(item=>{
                return item.status === "completed" ? <TodoItem item={item}/> : null
            })}

                <AddItem onClick={this.openModal}/>
                </div>
                {openModal && <Modal onClose={this.closeModal}/>}
            </Fragment>
        )
    }
}

export default Component1;