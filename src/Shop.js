import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Shop() {
    useEffect(()=> {
            fetchItems();
        }, []);
    const [items, setItems] = useState([]);
    const fetchItems = async () => {

        const data = await fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get");
        const items = await data.json();
        console.log(items.items);
        setItems(items.items);
    }
    return (
        <div className="wrapper">
            <h1 className="title">Shop Page</h1>
            <ul className="list">
            {items.map(item => (
                <li key={item.itemid} className="list-item">
                    <Link to={`/shop/${item.itemid}`}>
                        {item.name}
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Shop;
