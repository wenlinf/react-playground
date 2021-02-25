import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");
    return (
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label>Enter text:</label>
                    <input value = {text} onChange = {e => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown label = "Select a language" options = {options} selected = {language} onSelectChange = {setLanguage}/>
            <hr/>
            <h3 className = "ui header">Output</h3>
            <Convert text = {text} language = {language}></Convert>
        </div>
    );
}

export default Translate;