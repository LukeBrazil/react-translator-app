import React, { Component } from 'react'

 class Translator extends Component {
     state = {
         text: this.props.initialText || '',
     }

     _handleChange = (newText) => {
         this.setState({
             text: newText,
         })
     }

    render() {
        const { text } = this.state
        return (
            <>
            <h4>Translator!</h4>
            <form>
                <label>
                    Text to be translated!
                    <input type="text" onChange={event => {
                        console.log(event.target.value);
                        this._handleChange(event.target.value)
                    }}/>
                </label>
            </form>
            <p>{text}</p>
            </>
        )
    }
}

export default Translator;
