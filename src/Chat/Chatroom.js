import React, { Component } from 'react'

class Chatroom extends Component {

    state = {
        msg: ""
    }

    onTextChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    onClickButton = () => {
        this.props.onClickButtonHandler(this.state.msg)
    }

     render() {
         return(
            <div className="panel-footer">
                <div className="input-group">
                    <input
                        onChange = { this.onTextChange }
                        value = {this.state.msg}
                        id="btn-input" 
                        type="text" 
                        className="form-control input-sm" 
                        placeholder="Type your message here..." />
                     <span className="input-group-btn">
                        <button className="btn btn-primary btn-sm" 
                            onClick={this.onClickButton}
                            id="btn-chat">
                            Send</button>
                    </span>
                </div>
            </div>
         )
     }
}
export default Chatroom