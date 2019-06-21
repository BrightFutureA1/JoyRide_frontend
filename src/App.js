import React from 'react'
import Aside from './components/Aside.js'
// import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
// import Nav from './components/Nav.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      joyridefuns: []  
              
      }
      this.getJoyridefuns = this.getJoyridefuns.bind(this)
      this.handleAdd = this.handleAdd.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.handleUpdate = this.handleUpdate.bind(this)
    }
    componentDidMount() {
      this.getJoyridefuns()
  }
    getJoyridefuns () {
		    fetch('http://localhost:3000/joy_ride_funs')
			  .then(response => response.json())
			  .then(json => this.setState({joyridefuns: json}))
        // .catch(json => this.setState({joyridefuns: json}))
        .catch(error => console.error(error))
  }
  // handleSubmit (event) {
  //   event.preventDefault()
  //   console.log(this.state.formInputs)
  // }
  
  handleAdd (event, formInputs) {
    // event.preventDefault()

    console.log(formInputs)
    fetch('/joy_ride_funs', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
   }
  }).then(createdJoyridefun=> {
    return createdJoyridefun.json()
  }).then(jsonedJoyridefun => {
    // reset the form
    this.setState({
      joyridefuns: [jsonedJoyridefun, ...this.state.joyridefuns]
    })   
  })
  .catch(error => console.log(error))

}
handleDelete (deletedJoyridefun) {
  fetch(`/joyridefuns/${deletedJoyridefun.id}`, {
     method: 'DELETE',
     headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     }
   })
 .then(json => {
   this.setState(state => {
     const joyridefuns = state.joyridefuns.filter((joyridefun, index) => joyridefun.id !== deletedJoyridefun.id)
     return {
       joyridefuns,
     }
   })
 })
 .catch(error => console.log(error))
}
handleUpdate (event, formInputs) {
  event.preventDefault()
  fetch(`/joyridefuns/${formInputs.id}`, {
    body: JSON.stringify(formInputs),
    method: 'Put',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
  .then(updatedJoyridefun => {
    this.getJoyridefuns()
  })
  .catch(error => console.error(error))
}

  render() {
    return (
      <>
      <div className="App">
        <div className='container'>
          <Header />
          <Aside handleSubmit={this.handleAdd}/>
          <Main 
           joyridefuns={this.state.joyridefuns}
           handleDelete={this.handleDelete}
           handleUpdate={this.handleUpdate}/>
          {/* <Nav /> */}
          {/* <Footer /> */}
        </div>
        </div>
      
    
    </>
  )}
}

export default App
