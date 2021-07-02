import React from "react";
import Slider from "./../../components/Slider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Categories from "../../components/Categories";
import "./style.scss";
import { useTranslation } from "react-i18next";
import ImgClock from "./../../assets/images/banner/clock.webp";
import ProductList from "../../components/ProductList";
function HomePage(props) {
  const { t } = useTranslation();
  return (
    <div className="page-home">
      <Slider />
      <Container>
        <section className="feature">
          <Row>
            <Col xl={3} sm={12}>
              <div className="feature__item">
                <div className="feature__item__icon">
                  <i class="fas fa-truck"></i>
                </div>
                <h3>{t("feature.delivery")}</h3>
                <p>{t("feature.description")}</p>
              </div>
            </Col>
            <Col xl={3} sm={12}>
              <div className="feature__item">
                <div className="feature__item__icon">
                  <i class="fas fa-undo-alt"></i>
                </div>
                <h3>{t("feature.policy")}</h3>
                <p>{t("feature.description")}</p>
              </div>
            </Col>
            <Col xl={3} sm={12}>
              <div className="feature__item">
                <div className="feature__item__icon">
                  <i class="fas fa-headset"></i>
                </div>
                <h3>{t("feature.support")}</h3>
                <p>{t("feature.description")}</p>
              </div>
            </Col>
            <Col xl={3} sm={12}>
              <div className="feature__item no-boder">
                <div className="feature__item__icon">
                  <i class="fas fa-database"></i>
                </div>
                <h3>{t("feature.payment")}</h3>
                <p>{t("feature.description")}</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <div className="category-area">
        <Container>
          <Row>
            <Col xl={8}>
              <Categories />
            </Col>
            <Col xl={4}>
              <div className="category-area__clock">
                <div className="overlay"></div>
                <div className="category-area__clock__img">
                  <img src={ImgClock} alt="imgClock" />
                </div>
                <div className="category-area__clock__link">
                  <a href="#1">{t("category.gotoshop")}</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="product-area">
        <Container>
          <Row>
            <Col xl={3}>
              <ProductList />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
