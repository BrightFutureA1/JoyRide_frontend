import React from 'react'
import Form from './Form.js'
// import Materialize from 

class Joyridefun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formVisible: false
        }
        this.toggleForm = this.toggleForm.bind(this)
    }
    toggleForm() {
        this.setState({
            formVisible: !this.state.formVisible
        })
    }
    render() {
        const { joyridefun, handleDelete, handleUpdate } = this.props
        return (
            <>
                {this.state.formVisible
                    ? <Form
                        joyridefun={joyridefun}
                        handleSubmit={handleUpdate}
                        toggleForm={this.toggleForm}
                    />
                    //   : <div className="joyridefun">
                         : <div className="container"/>}
                         {/* : <div class="col s12 m7"/> */}
                        <div className="card" key={joyridefun._id}>
                        <img src ={joyridefun.image} alt="roller coasters" />
                        <h3>{joyridefun.name}</h3>
                        <h4>{joyridefun.location}</h4>
                        <h4>{joyridefun.comments}</h4>
                        <button onClick={this.toggleForm}>Edit the fun</button>
                        <button onClick={() => handleDelete(joyridefun)}>X</button>

                    </div>
                    
            </>
        )
    }
}

export default Joyridefun