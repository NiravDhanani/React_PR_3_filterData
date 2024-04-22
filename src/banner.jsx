import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const Banner = () => {
  return (
    <section className="banner-img">
      <Container>
        <div className="row banner-content">
          <div className="text-white">
            <h5 className="text-capitalize mb-4">
              Purus donec Mi Tellus Suscipit Eget
            </h5>
            <h1 className="mb-5">Urna A Egestas Etiam</h1>
            <p>
              acinia velit at ipsum commodo tincidunt donec condimentum ligula
              ultricies dictum.
            </p>

            <div className="d-flex">
              <Button variant="primary" className="mx-1">Primary</Button>{" "}
              <Button variant="primary" className="mx-1">Primary</Button>{" "}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
