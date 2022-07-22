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
    title: "Crow's Nest",
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
    title: "Avenger Wind Signs",
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

const img_arr3 = [
  {
    id: 1,
    src: "./img/13.jpg",
    title: "A Journey to the Moon",
    description: "Max Born",
  },
  {
    id: 2,
    src: "./img/14.jpg",
    title: "Night Time Stories",
    description: "Ken Adams",
  },
  {
    id: 3,
    src: "./img/15.jpg",
    title: "Lost in the Woods",
    description: "Marvin Navina",
  },
  {
    id: 4,
    src: "./img/16.jpg",
    title: "The Gondola Maker",
    description: "Laura Morell",
  },
];

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <div className="top">
            <div className="animated">Book Read Tracker</div>
          </div>

          <div className="top-container">
            <h2>CONTINUE READING...</h2>
            <div className="book-display">
              {img_arr.map(({ id, src, title, description }) => (
                <div>
                  <img key={id} src={src} title={title} alt={description} />
                  <div className="book-detail">
                    <label>
                      <h3>{title}</h3>
                    </label>
                    <label>
                      <h5>( {description} )</h5>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="top-container">
            <h2>TOP 5 BOOKS.</h2>
            <div className="book-display">
              {img_arr2.map(({ id, src, title, description }) => (
                <div>
                  <img key={id} src={src} title={title} alt={description} />
                  <div className="book-detail">
                    <label>
                      <h3>{title}</h3>
                    </label>
                    <label>
                      <h5>( {description} )</h5>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="top-container">
            <h2>WISHLIST</h2>
            <div className="book-display">
              {img_arr3.map(({ id, src, title, description }) => (
                <div>
                  <img key={id} src={src} title={title} alt={description} />
                  <div className="book-detail">
                    <label>
                      <h3>{title}</h3>
                    </label>
                    <label>
                      <h5>( {description} )</h5>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
