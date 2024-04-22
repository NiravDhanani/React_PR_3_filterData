import { Container } from "react-bootstrap";
import img7 from "./image/07.jpg";
import img8 from "./image/08.jpg";
import img9 from "./image/09.jpg";

export const Blog = () => {
  return (
    <section className="Blog">
      <Container>
        <div className="row">
          <div className="col-lg-12" align="center">
            <h4>Nulla Pretium Nulla Ligula</h4>
            <p>Placerat ut tincidunt eget varius quis erat quisque euismod</p>
          </div>

          <div className="col-lg-12 mt-5 d-flex justify-center">
            <div className="col-lg-4 mx-2 my-2 bloginfo">
              <div>
                <img src={img7} alt="" />
              </div>
              <div>
                <h4>Ligula Id Metus Faucibus</h4>
                <p>
                  Malesuada donec eu ex placerat accumsan felis quis auctor sem
                  aliquam ut lacus laoreet placerat augue ornare pharetra…
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>

            <div className="col-lg-4 mx-2 my-2 bloginfo">
              <div>
                <img src={img8} alt="" />
              </div>
              <div>
                <h4>Eros Quisque Vel Tincidunt</h4>
                <p>
                Orci et congue ante fusce dictum tristique risus id volutpat etiam commodo libero efficitur maximus velit tristique…
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>

            <div className="col-lg-4 mx-2 my-2 bloginfo">
              <div>
                <img src={img9} alt="" />
              </div>
              <div>
                <h4>Semper Libero Elementum</h4>
                <p>
                Nunc sed suscipit semper justo est ultricies sem at ullamcorper mauris dolor eget eros cras et nibh id dolor posuere…
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
