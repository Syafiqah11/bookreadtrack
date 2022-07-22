import React from "react";
import MyListDetail from "./MyListDetail/MyListDetail";
import BookCrud from "./MyListDetail/BookCRUD/BookCrud";

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

const img_arr3 = [
  {
    id: 1,
    src: "./img/11.jpg",
    title: "Water & Flame",
    description: "Alejandra Vega P.E Padilla",
  },
  {
    id: 2,
    src: "./img/12.jpg",
    title: "The Way of the Nameless",
    description: "Graham Douglasss",
  },
  {
    id: 3,
    src: "./img/13.jpg",
    title: "A Journey to the Moon",
    description: "Max Born",
  },
  {
    id: 4,
    src: "./img/14.jpg",
    title: "Night Time Stories",
    description: "Ken Adams",
  },
  {
    id: 5,
    src: "./img/15.jpg",
    title: "Lost in the Woods",
    description: "Marvin Navina",
  },
  {
    id: 6,
    src: "./img/16.jpg",
    title: "The Gondola Maker",
    description: "Laura Morelli",
  },
];

export default class MyList extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <div className="top-head"></div>
          <div className="mylist-container">
            <div>
              <MyListDetail />
            </div>
          </div>

          <div className="mylist-container">
            <div>{/* <BookCrud /> */}</div>
          </div>

          {/* <div className="mylist-container">
            <h2>Continue Reading...</h2>
            {img_arr.map(({ id, src, title, description }) => (
              <img key={id} src={src} title={title} alt={description} />
            ))}
          </div>

          <div className="mylist-container">
            <h2>Finished Reading</h2>
            {img_arr3.map(({ id, src, title, description }) => (
              <img key={id} src={src} title={title} alt={description} />
            ))}
          </div> */}
        </div>
      </>
    );
  }
}
