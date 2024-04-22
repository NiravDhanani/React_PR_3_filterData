import { Container } from "react-bootstrap";
import img1 from "./image/01.jpg";
import img2 from "./image/02.jpg";
import img3 from "./image/03.jpg";
import img4 from "./image/04.jpg";
import img5 from "./image/05.jpg";
import img6 from "./image/06.jpg";
import img7 from "./image/07.jpg";
import img8 from "./image/08.jpg";
import img9 from "./image/09.jpg";

export const ImgGallary = () => {
  return (
    <section className="imgGallary">
      <Container>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center ">
            <div className="col-lg-5 col-sm-5 m-1">
              <img src={img1} alt="img" />
            </div>
            <div className="col-lg-5 col-sm-5 m-1">
              <img src={img2} alt="img" />
            </div>
            <div className="col-lg-5 col-sm-5 m-1">
              <img src={img3} alt="img" />
            </div>
            <div className="col-lg-5 col-sm-5 m-1">
              <img src={img4} alt="img" />
            </div>
            <div className="col-lg-5 col-sm-5 m-1">
              <img src={img5} alt="img" />
            </div>
            <div className="col-lg-5 col-sm-5 m-1">
              <img src={img6} alt="img" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
