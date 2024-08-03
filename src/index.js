import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import one from "./assets/img1.jpg";
import two from "./assets/img2.jpg";
import three from "./assets/img3.jpg";
import four from "./assets/img4.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Heading() {
    return (
        <div className="heading">
            <h1>Image Gallery</h1>
        </div>
    );
}

function Gallery(props) {
    return (
        <div className="image-card">
            <img src={props.image} alt="doggy" />
            <p>{props.dName}</p>
        </div>
    );
}

const details = [
    {
        image: one,
        dName: "Julie's Rabbit Ears"
    },
    {
        image: two,
        dName: "The Innocent Look"
    },
    {
        image: three,
        dName: "Big Eyed Buggy"
    },
    {
        image: four,
        dName: "The Saint Doggo"
    },
    {
        image: three,
        dName: "Big Eyed Buggy"
    },
    {
        image: four,
        dName: "The Saint Doggo"
    },
    {
        image: one,
        dName: "Julie's Rabbit Ears"
    },
    {
        image: two,
        dName: "The Innocent Look"
    }
];

root.render(
    <div>
        <Heading />
        <div className="container">
            {details.map((items, index) => (
                <Gallery key={index} image={items.image} dName={items.dName} />
            ))}
        </div>
    </div>
);