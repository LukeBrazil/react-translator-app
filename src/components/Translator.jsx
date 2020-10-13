import React, { Component } from 'react';
import rot13 from 'rot-thirteen';

 class Translator extends Component {
     state = {
         text: this.props.initialText || '',
         translatedText: ''
     }

     _handleChange = (newText) => {
         this.setState({
             text: newText,
             
         })
     }
     _handleClick = () => {
         const { text } = this.state;
         const translated = rot13(text);
         this.setState({
             text: '',
             translatedText: translated,
         })
     }

    render() {
        const { text, translatedText } = this.state
        return (
            <>
            <h4>Translator!</h4>
            <form>
                <label>
                    Text to be translated!
                    <input value={text} type="text" onChange={event => {
                        console.log(event.target.value);
                        this._handleChange(event.target.value)
                    }}/>
                </label>
                <button type='button' onClick={this._handleClick}>Translate!</button>
            </form>
            <p>Plain Text: {text}</p>
            <p>Translated Text: {translatedText}</p>
            </>
        )
    }
}

export default Translator;
