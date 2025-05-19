import React from "react";
import "./Home.css";
import home1 from "../../assets/img/home1.jpg";
import home2 from "../../assets/img/home2.jpg";
import home3 from "../../assets/img/home3.jpg";
import home4 from "../../assets/img/home4.jpg";
import home5 from "../../assets/img/home5.jpg";
import home6 from "../../assets/img/home6.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="h-sec1">
        <div className="h-sec1-txt">
          <h1>
            Buy your <br></br> Favorite book <br></br> from here
          </h1>
        </div>
        <div className="h-sec1-imge">
          <img src={home1} alt="" />
        </div>
      </div>

      <div className="h-sec2">
        <h1>Book Categories</h1>
        <div className="h-sec2-imge">
          <div className="h-sec2-imge1">
            <img src={home6} alt="" />
            <h3>Education</h3>
          </div>
          <div className="h-sec2-imge2">
            <img src={home2} alt="" />
            <h3>Children</h3>
          </div>
          <div className="h-sec2-imge3">
            <img src={home4} alt="" />
            <h3>Fiction</h3>
          </div>
          <div className="h-sec2-imge4">
            <img src={home3} alt="" />
            <h3>Novel</h3>
          </div>
          <div className="h-sec2-imge5">
            <img src={home5} alt="" />
            <h3>Short Story</h3>
          </div>
        </div>
      </div>

      <div className="home-sec3">
        <div className="h-sec1-imge">
          <img src={home1} alt="" />
        </div>
        <div className="h-sec1-txt">
          <p>dafdf</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
