import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgBanner from "./../../assets/images/banner/shoe-banner.webp";
import { useTranslation } from "react-i18next";

function Slider(props) {
  const { t } = useTranslation();
  return (
    <div className="carousel-home">
      <Container>
        <Row>
          <Col>
            <Swiper className="mySwiper">
              <SwiperSlide>
                <Row>
                  <Col xl={5}>
                    <div className="carousel-home__content">
                      <h2>{t("carousel.name")}</h2>
                      <p>{t("carousel.description")}</p>
                      <a className=" social-info" href="#1">
                        <i className="fas fa-plus"></i>
                        <span className="hover-text">
                          {t("carousel.button")}
                        </span>
                      </a>
                    </div>
                  </Col>
                  <Col wl={7}>
                    <div className="carousel-home__img">
                      <img src={ImgBanner} alt="img show" />
                    </div>
                  </Col>
                </Row>
              </SwiperSlide>
              <SwiperSlide>
                <Row>
                  <Col xl={5}>
                    <div className="carousel-home__content">
                      <h2>{t("carousel.name")}</h2>
                      <p>{t("carousel.description")}</p>
                      <a className="social-info" href="#1">
                        <i className="fas fa-plus"></i>
                        <span className="hover-text">
                          {t("carousel.button")}
                        </span>
                      </a>
                    </div>
                  </Col>
                  <Col wl={7}>
                    <div className="carousel-home__img">
                      <img src={ImgBanner} alt="img show" />
                    </div>
                  </Col>
                </Row>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Slider;
