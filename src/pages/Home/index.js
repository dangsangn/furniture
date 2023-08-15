import React, { useEffect, useMemo, useState } from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/swiper.min.css"
import { fetchCategory } from "../../apis/category"
import { fetchProducts } from "../../apis/product"
import ProductList from "../../components/ProductList"
import { listBrandImage } from "../../data"
import ImgClock from "./../../assets/images/banner/clock.webp"
import CountdownTime from "./Countdown"
import "./style.scss"
import { useLocation, useHistory } from "react-router-dom"
import queryString from "query-string"
import { Pagination } from "antd"

function HomePage() {
  const { t } = useTranslation()
  const [products, setProducts] = useState([])
  const [meta, setMeta] = useState({ page: 1, total: 0 })
  const [category, setCategory] = useState([])
  const params = useLocation()
  const history = useHistory()
  const query = useMemo(
    () => queryString.parse(params?.search),
    [params?.search]
  )
  console.log("params?.search:", query)

  useEffect(() => {
    ;(async () => {
      try {
        const resCategory = await fetchCategory({ limit: 30 })
        setCategory(resCategory?.data?.data?.items)
      } catch (error) {
        console.log("error:", error)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const resProduct = await fetchProducts({
          page: query?.page || 1,
          limit: 12,
          cat: query?.category,
        })
        console.log("resProduct:", resProduct)
        setProducts(resProduct?.data?.data?.items)
        setMeta((pre) => ({
          ...pre,
          page: resProduct?.data?.data?.meta?.currentPage,
          total: resProduct?.data?.data?.meta?.totalItems,
        }))
      } catch (error) {
        console.log("error:", error)
      }
    })()
  }, [query])

  const onChange = (page) => {
    console.log(page)
    history.push(`?page=${page}`)
  }

  return (
    <div className="page-home">
      <Container>
        <div className="product-area__header my-10">
          <h2 className="product-area__header__title">Danh mục sản phẩm</h2>
        </div>
        <section style={{ marginTop: "0" }} className="feature">
          <Row>
            {category.map((item, index) => {
              return (
                <Col xl={3} sm={12} key={index}>
                  <Link
                    to={`?category=${item.id}`}
                    className="block px-10 py-6 text-center border-2 border-solid border-transparent hover:border-orange-300"
                  >
                    <h3 className="text-3xl">{t(item.name)}</h3>
                    <p className="text-gray-400">{t(item.description)}</p>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </section>
      </Container>
      <section className="product-area">
        <Container>
          <div className="product-area__header">
            <h2
              style={{ marginBottom: "12px" }}
              className="product-area__header__title"
            >
              Danh sách sản phẩm
            </h2>
            <p className="product-area__header__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              possimus totam culpa. Nulla, dolores repellat ipsa sunt voluptates
              quidem voluptatum.
            </p>
          </div>
          <ProductList data={products} xl={3} />
          <div className="flex justify-center">
            <Pagination
              current={meta.page}
              onChange={onChange}
              total={meta.total}
            />
          </div>
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
              )
            })}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default HomePage
