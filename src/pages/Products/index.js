import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoryProduct from "./CategoryProduct";
import ColorProduct from "./ColorProduct";
import SizeProduct from "./SizeProduct";
import RatingProduct from "./RatingProduct";
import { Select } from "antd";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../actions/product";
import ProductList from "../../components/ProductList";
import PaginationContainer from "../../components/Pagination";
import { getPageLimitNumber, sortProduct } from "../../actions/control-action";
import { useTranslation } from "react-i18next";

function Products(props) {
  const { Option } = Select;
  const { t } = useTranslation();
  const filters = useSelector((state) => state.filters);
  const listProduct = useSelector((state) => state.products.listProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList(filters));
  }, [dispatch, filters]);

  function onChangeSort(value) {
    dispatch(sortProduct(value.split(" ")));
  }

  function onChangeTotalItem(value) {
    dispatch(getPageLimitNumber({ limit: +value }));
  }

  return (
    <div className="products-page">
      <Container>
        <Row>
          <Col xl={3} sm={12}>
            <div className="products-page__filter">
              <div className="products-page__filter__box">
                <h2 className="products-page__filter__header">
                  {t("productsPage.category")}
                </h2>
                <CategoryProduct />
              </div>
              <div className="products-page__filter__box">
                <h2 className="products-page__filter__header">
                  {t("productsPage.size")}
                </h2>
                <SizeProduct />
              </div>
              <div className="products-page__filter__box">
                <h2 className="products-page__filter__header">
                  {t("productsPage.color")}
                </h2>
                <ColorProduct />
              </div>
              <div className="products-page__filter__box">
                <h2 className="products-page__filter__header">
                  {t("productsPage.rating")}
                </h2>
                <RatingProduct />
              </div>
            </div>
          </Col>
          <Col xl={9} sm={12}>
            <div className="products-page__filter products-page__filter--header">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Default sorting"
                defaultValue="Sort Default"
                optionFilterProp="children"
                onChange={onChangeSort}
              >
                <Option value="">Sort Default</Option>
                <Option value="price desc">Sort Decrease</Option>
                <Option value="price asc">Sort Increase</Option>
              </Select>
              <Select
                showSearch
                style={{ width: 200 }}
                defaultValue="Show 6"
                optionFilterProp="children"
                onChange={onChangeTotalItem}
              >
                <Option value="6">Show 6</Option>
                <Option value="9">Show 9</Option>
                <Option value="12">Show 12</Option>
              </Select>
            </div>
            <div className="products-page__list">
              <ProductList data={listProduct} xl={4} />
            </div>
            <PaginationContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
