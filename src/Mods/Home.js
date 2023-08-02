import React, { useRef, useEffect, useState } from "react";

import "../Mods/mods.css";

const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: "https://e0.pxfuel.com/wallpapers/470/185/desktop-wallpaper-learn-html-css-by-building-3-projects-launch-your-career-html-css.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl:
        "https://wallpapercave.com/dwp2x/wp4923981.jpg",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl:
        "https://pbs.twimg.com/profile_images/1410016948977422337/rKU8iR89_400x400.png",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 5,
      imgUrl: "https://img.freepik.com/free-vector/gradient-top-view-laptop-background_52683-6291.jpg?w=740&t=st=1690948598~exp=1690949198~hmac=3f05bc6e15499efc2154e86c1d8a01d7fd2ba932e482abff8eb0b14d06b64a02",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 6,
      imgUrl:
        "https://media.istockphoto.com/id/1302189748/photo/digital-cyberspace-with-particles-and-digital-data-network-connections-high-speed-connection.jpg?b=1&s=612x612&w=0&k=20&c=bwDXyw4wOGrBQOQ2Z15DUApR8H2MNogIaIIZp9jnuoQ=",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];

  return (
    <div className="container">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
         fwef
        </button>
        <button id="next" onClick={handleClickNext}>
     frg
        </button>
      </div>
    </div>
  );
};

export default Slider;
