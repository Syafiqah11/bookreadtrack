import React from "react";

const img_arr = [
  {
    id: 1,
    src: "./img/1.jpeg",
    title: "Fortress of Blood",
    description: "L.D. Goffigan",
  },
  {
    id: 2,
    src: "./img/2.jpg",
    title: "The king of Drugs",
    description: "Nora Barret",
  },
  {
    id: 3,
    src: "./img/3.jpeg",
    title: "Crake the Code",
    description: "Patrick C.Harless",
  },
  {
    id: 4,
    src: "./img/4.jpg",
    title: "Kissing in the Crow's Nest",
    description: "Ariel Dalziel",
  },
];

const img_arr2 = [
  {
    id: 1,
    src: "./img/6.jpeg",
    title: "Lunar Storm",
    description: "Terry Crosby",
  },
  {
    id: 2,
    src: "./img/7.jpg",
    title: "The Roar of the Avenger Wind Signs",
    description: "Greg Garza",
  },
  {
    id: 3,
    src: "./img/9.jpg",
    title: "The Portal",
    description: "Brandon Scott",
  },
  {
    id: 4,
    src: "./img/10.jpg",
    title: "War for Alcyon IV",
    description: "John Premade",
  },
  {
    id: 5,
    src: "./img/5.jpeg",
    title: "The Twelfth Child",
    description: "Bettle Lee Crosby",
  },
];

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <div className="top">
            <div className="branding">Book Read Tracker</div>
          </div>
          <div className="top-container">
            <h2>Continue Reading...</h2>
            {img_arr.map(({ id, src, title, description }) => (
              <img key={id} src={src} title={title} alt={description} />
            ))}
          </div>

          <div className="top-container">
            <h2>TOP 5 BOOKS.</h2>
            {img_arr2.map(({ id, src, title, description }) => (
              <img key={id} src={src} title={title} alt={description} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
