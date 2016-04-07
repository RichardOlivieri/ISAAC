import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
//import { GetUserList } from '../api/GetUserList.js';


import Task from './Task.jsx';
import HelloMessage from './HelloMessage.jsx';



//1. Behavioral Container Components

	//Filters
	//ShowList
	//HideList
		
	var Foo = class {
    constructor() {}
    bar() {
    return "Component Testing Valid";
	document.write(Foo())


  }
};

//UserContacts

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div></div>
    );
  }
}
Contacts.propTypes = {

};
Contacts.defaultProps = {

};

export default Contacts;

//DataBaseFetching

class DataBaseFetching extends React.Component {
 constructor(dataFetch) {
  super();
  this. _dataFetch = this. _dataFetch.bind(this);
  this.state = Store.getState();
 }
 // ...
}


//ButtonClick
	
class onButtonClick extends React.Component {
 constructor() {
  super();
  this. _handleClick = this. _handleClick.bind(this);
  this.state = Store.getState();
 }
 // ...
}



var instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // ""
	
	
	

	
class List extends React.Component {
  constructor(List) {
    super(List);
  }
  render() {
    return (
      <div></div>
    );
  }
}

class Filters extends React.Component {
	render () {
		return (
		<div></div>
     );
	}
  }

	
	


//2. Functional Stateless Presentational Components


//ItemList

function ViewList(List) {
  return Users;
  
//ReactDOM.render(<HelloMessage name="Sebastian" />, mountNode);

}

//Buttons
function Buttons(props) {
  return <div>Buttons {Buttons.click}</div>
}
//SingleItem

const Item = (props) => {
return(
<div>
<img src={props.image} />
<div>{ISAAC}</div>
</div>
)

};



const ItemList = ({users}) => {
	//return <div >Users {List.name}</div>;

};
//var SingleItem = ({species}) => (
 // <List>
 //   {getFish(species)}
 // </Tank
 
 const ListItem = ({ items }) => {
  <ul className="list">
    {items.map(item => <ListItem item={item} />)}
  </ul>

 };

//Display


  //var Button = (List) => {
 // var DisplayList = getList(props.List);
  //return <List>{DisplayList}</List>;
//};


class DataList {
  constructor(height, width) {
    this.name = 'List';
    this.height = height;
    this.width = width;
  }
}

class Button extends List {
  constructor(length) {
    super(length, length);
    this.name = 'Button';
  }
}

import dropdownMenu from './dropdownMenu.html';

// 3. Initial UI State
import button from './button.html';
import togglebutton from './togglebutton.html';

// 4.

// 5.

// 6.

// 7.

// App component - represents the whole app
class App extends Component {
	 handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
   renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render(button) {
    return (
	 
		  
      <div className="container">
        <header>
          <h1>ISAAC Data Manipulator</h1>
		  
		    <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new data"
            />
          </form>
		  
		  <form className="button" onSubmit={this.handleSubmit.bind(this)} >
		  <button onclick="myFunction()">Display Users</button>
          <button onclick="myFunction()">Filter Users</button>
		  <button onclick="myFunction()">Hide Users</button>
		  <button onclick="myFunction()">Delete Users</button>

		  </form>	

           
        </header>
		
		
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};
	

export default createContainer(() => {
  return {
   // tasks: Tasks.find({}).fetch(),
      tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),

  };
}, App);

