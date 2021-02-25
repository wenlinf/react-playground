import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';


const items = [
    {
        title: "What is react?",
        content: "a js front end library"
    },
    {
        title: "why use react?",
        content: "it's a favorite front end library among engineers"
    },
    {
        title: "how do you use react",
        content: "you use it by creating components"
    }
];

const options = [
    {
        label:"Red",
        value:"red"
    },
    {
        label: "Blue",
        value:"blue"
    },
    {
        label:"Green",
        value:"green"
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
    <div>
        <Header/>
        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path="/search">
            <Search/>
        </Route>
        <Route path="/dropdown">
            <Dropdown options = {options}
                    selected = {selected}
                    onSelectChange = {setSelected}
                    label = "select something" />
        </Route>
        <Route path="/translate">
            <Translate/>
        </Route>
    </div>);
}