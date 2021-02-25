import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState("programming");
    const [results, setResults] = useState([]);
    useEffect(() => {
        const search = async ()=> {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    format: 'json',
                    list: 'search',
                    origin: '*',
                    srsearch: term,
                }
            });
            setResults(data.query.search);
            console.log(results);
        };
        if(term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(()=>{
                if(term){
                    search();
                }
            }, 1000);
            return ()=>{
                clearTimeout(timeoutId);
            };
        }
    },[term]);
   
    const renderedList = results.map((result)=>{
        return (
            <div key = {result.pageid} className='item'>
                <div className = "right floated content">
                    <a 
                    href = {`https://en.wikipedia.org?curid=${result.pageid}`}
                    className="ui button">
                        Go
                    </a>
                </div>
                <div className = 'content'>
                    <div className = 'header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML = {{__html: result.snippet}}></span>
                </div>
            </div>
        );
    });
    return (
        <div className = "ui form">
            <div className="field">
                <label>Enter search term: </label>
                <input className="input" value = {term} onChange = {e=>setTerm(e.target.value)}></input>
            </div>
            <div className='ui celled list'>{renderedList}</div>
        </div>
    );
}

export default Search;