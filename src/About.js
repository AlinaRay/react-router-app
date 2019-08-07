import React, {useState, useEffect} from 'react';

function About() {
    useEffect(()=> {
        fetchItems();
    }, []); // will run only if component amount
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch("https://fortnite-public-api.theapinetwork.com/prod09/stw_motd/get");
        const news = await data.json();
        console.log(news.entries);
        setItems(news.entries);
    };
    return (
        <div className="wrapper">
            <h1 className="title">About Page</h1>
            {items.map(item => (
                <div key={item.title}
                     className="content-wrapper"
                >
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title}/>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
}

export default About;
