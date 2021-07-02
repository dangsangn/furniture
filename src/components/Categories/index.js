import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoryItem from "../CategoryItem";
function Categories(props) {
  return (
    <div className="category">
      <Row>
        <Col xl={8}>
          <CategoryItem />
        </Col>
        <Col xl={4}>
          <CategoryItem />
        </Col>
        <Col xl={4}>
          <CategoryItem />
        </Col>
        <Col xl={8}>
          <CategoryItem />
        </Col>
      </Row>
    </div>
  );
}

export default Categories;
