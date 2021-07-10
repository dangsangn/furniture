import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getCategory } from "../../actions/category";
import {
  getProductListComing,
  getProductListLates,
} from "../../actions/product";
import Categories from "../../components/Categories";
import ProductList from "../../components/ProductList";
import { featuteData, listBrandImage } from "../../data";
import ImgClock from "./../../assets/images/banner/clock.webp";
import CountdownTime from "./Countdown";
import Slider from "./Slider";
import "./style.scss";
SwiperCore.use([Pagination, Navigation]);

function HomePage(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductListLates());
    dispatch(getProductListComing());
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="page-home">
      <Slider />
      <Container>
        <section className="feature">
          <Row>
            {featuteData.map((item, index) => {
              return (
                <Col xl={3} sm={12} key={index}>
                  <div className="feature__item">
                    <div className="feature__item__icon">{item.icon}</div>
                    <h3>{t(item.name)}</h3>
                    <p>{t(item.desc)}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </section>
      </Container>
      <section className="category-area">
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
                  <Link to="/products">{t("category.gotoshop")}</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="product-area">
        <Container>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide className="product-area__slider">
              <div className="product-area__header">
                <h2 className="product-area__header__title">
                  {t("carousel.titleProduct1")}
                </h2>
                <p className="product-area__header__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias possimus totam culpa. Nulla, dolores repellat ipsa
                  sunt voluptates quidem voluptatum.
                </p>
              </div>
              <ProductList data={products.listProductComing} xl={3} />
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-area__header">
                <h2 className="product-area__header__title">
                  {t("carousel.titleProduct2")}
                </h2>
                <p className="product-area__header__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias possimus totam culpa. Nulla, dolores repellat ipsa
                  sunt voluptates quidem voluptatum.
                </p>
              </div>
              <ProductList data={products.listProductLatest} xl={3} />
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>

      <section className="countdown-area">
        <Container fluid={true}>
          <Row noGutters>
            <Col xl={6} sm={12}>
              <div className="countdown-area__time">
                <div className="countdown-area__time__content">
                  <h2>{t("countDown.title")}</h2>
                  <p>{t("countDown.desc")}</p>
                  <CountdownTime />
                  <Link to="/products" className="btn btn--primary">
                    {t("button.shopNow")}
                  </Link>
                </div>
              </div>
            </Col>
            <Col xl={6} sm={12}>
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
      </section>
      <section className="brand-area">
        <Container>
          <Row>
            {listBrandImage.map((item, index) => {
              return (
                <Col key={index}>
                  <div className="brand-area__item">
                    <img src={item} alt="imgband" />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;
