import React, {useState, useEffect} from 'react';

function ItemDetails({ match}) {
    useEffect(()=> {
        fetchItems();
    },[]);

    const [item, setItem] = useState({
        images: {}
    });
    const fetchItems = async () => {
        const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    };
    return (
        <div className="wrapper">
            <h1>{item.name}</h1>
            <img src={item.images.transparent} alt=""/>
            <p>{item.description}</p>
        </div>
    );
}

export default ItemDetails;
