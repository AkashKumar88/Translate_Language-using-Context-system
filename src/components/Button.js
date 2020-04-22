import React from 'react';
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component{
    // static contextType = LanguageContext;

    render(){
        // const text = this.context === 'english' ? 'Submit' : 'Hindi';
        // return (
        //     <button className="ui button primary">{text}</button>
        // );
     return (
            <ColorContext.Consumer>
 
                    {(color) =>
                        <button className={`ui button ${color}`}> 
                            <LanguageContext.Consumer>
                                {({ language }) => language === 'english' ? 'Submit' : 'Hindi' }
                            </LanguageContext.Consumer>
                        </button>                        
                    }
            </ColorContext.Consumer>
        );
    }
}

export default Button;