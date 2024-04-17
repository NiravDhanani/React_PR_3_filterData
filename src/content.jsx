import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './food.css'

function MainContent({data}) {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {data.map((val) => {
        return (
          <Card style={{ width: "18rem" }} className="mt-3">
            <Card.Img variant="top" src={val.img} style={{height:"200px", objectFit:"cover"}} />
            <Card.Body>
              <Card.Title >{val.name}</Card.Title>
              <Card.Text className="fs-bold text-silver">{val.category}</Card.Text>
              <Card.Text className="description">{val.des}</Card.Text>
              <Card.Text > statring at just Rs. {val.price}</Card.Text>
              <Button variant="primary" className="d-flex justify-align-content-end ">Order Now</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

function FilterContent({record}) {
    return (
      <div className="d-flex flex-wrap justify-content-around">
        {record.map((val) => {
          return (
            <Card style={{ width: "18rem" }} className="mt-3">
              <Card.Img variant="top" src={val.img} style={{height:"200px", objectFit:"cover"}} />
              <Card.Body>
                <Card.Title >{val.name}</Card.Title>
                <Card.Text className="fs-bold text-silver">{val.category}</Card.Text>
                <Card.Text className="description">{val.des}</Card.Text>
                <Card.Text > statring at just Rs. {val.price}</Card.Text>
                <Button variant="primary" className="d-flex justify-align-content-end ">Order Now</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }

export  {MainContent,FilterContent};
