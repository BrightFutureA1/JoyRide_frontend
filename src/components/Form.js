import React from 'react'
import Input from './Input.js'


class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name:'',
      image:'',
      location:'', 
      comments: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount (){
    if(this.props.joyridefun){
      this.setState ({
        name: this.props.joyridefun.name ||'',
        image: this.props.joyridefun.image ||'',
        location: this.props.joyridefun.location ||'',
        comments: this.props.joyridefun.comments ||'',
        id: this.props.joyridefun.id
      })
    }
  }
  handleChange (event) {
    this.setState({[event.target.id] : event.target.value})
  }
  handleSubmit (event){
    event.preventDefault()
    this.props.handleSubmit(
      event,
      {
        name: this.state.name,
        image: this.state.image,
        location: this.state.location,
        comments: this.state.comments,
        id: this.state.id
      }
    )
    // clears the form
    this.setState({
      name: '',
      image:'',
      location: '',
      comments:''
    })
    if(this.props.joyridefun) {
      this.props.toggleForm()
    }
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type={'text'}
          id={'name'}
          name={'name'}
          onChange={this.handleChange}
          placeholder={'Joyridefun Name'}
     
         />
         <Input
           handleChange={this.handleChange}
           name={'image'}
           placeholder={'Image URL'}
           type={'text'}
           defaultValue={this.state.image}
           id={'image'}
        />
        <Input
          handleChange={this.handleChange}
          name={'location'}
          placeholder={'Joyridefun Add Location'}
          type={'text'}
          deaultValue={this.state.location}
          id={'location'}
       />
       <Input
          handleChange={this.handleChange}
          name={'comments'}
          placeholder={'Joyridefuns Comments'}
          type={'text'}
          defaultValue={this.state.comments}
          id={'comments'}
       />
       <input className='input-submit' 
       type='submit'
       value={this.props.joyridefun ? "update this fun": "add more fun"}/>
      </form>
    )
  }
}

export default Form