import React from "react";
import "./Home.css";
import home1 from "../../assets/img/home1.jpg";

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
            <img src={""} alt="" />
            <h3>ccc</h3>
          </div>
          <div className="h-sec2-imge1">
            <img src={""} alt="" />
            <h3>ccc</h3>
          </div>
          <div className="h-sec2-imge1">
            <img src={""} alt="" />
            <h3>ccc</h3>
          </div>
          <div className="h-sec2-imge1">
            <img src={""} alt="" />
            <h3>ccc</h3>
          </div>
          <div className="h-sec2-imge1">
            <img src={""} alt="" />
            <h3>ccc</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
