import React from "react";
import Navigation from "./navigation";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown, Button, Avatar } from "antd";
import history from "../../untils/history";
import { userLogout } from "../../actions/user";

function Header(props) {
  const { Option } = Select;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    localStorage.removeItem("authentication_token");
    dispatch(userLogout());
    history.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key={1}>
        <Link to={"/"} rel="noopener noreferrer">
          {t("header.profile")}
        </Link>
      </Menu.Item>
      <Menu.Item key={2}>
        <span onClick={handleLogout}>{t("header.logout")}</span>
      </Menu.Item>
    </Menu>
  );

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="header">
        <Container>
          <div className="header__top align-items-center">
            <div className="header__language d-flex">
              <span>{t("language.name")}: </span>
              <Select onChange={changeLanguage} defaultValue="en">
                <Option value="en">
                  <img
                    src="../assets/images/flag/usa.png"
                    className="header__language__img"
                    alt="usaflag"
                  />
                  {t("language.english")}
                </Option>
                <Option value="vi">
                  <img
                    src="../assets/images/flag/vietnam.png"
                    className="header__language__img"
                    alt="vietnamflag"
                  />
                  {t("language.vietnam")}
                </Option>
              </Select>
            </div>
            <div className="header__top__sigup">
              {user.isLogin ? (
                <Dropdown
                  className="header__top__avatar"
                  overlay={menu}
                  placement="bottomCenter"
                  arrow
                >
                  <Button>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    {user?.email}
                  </Button>
                </Dropdown>
              ) : (
                <>
                  <NavLink
                    activeClassName="header__navlink-active"
                    to={"/login"}
                  >
                    {t("Login")}
                  </NavLink>
                  <NavLink
                    activeClassName="header__navlink-active"
                    to={"/register"}
                  >
                    {t("Register")}
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <div className="header__main d-flex justify-content-space-between align-items-center">
            <Link to="/" className="header__logo">
              <img src="../assets/images/logo.webp" alt="logoHeader" />
            </Link>
            <div className="header_nav d-flex align-items-center ">
              <Navigation />
              <a href="#1" className="header__cart">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <button
                className="btn btn-primary btn--search-header"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div className="collapse header__search" id="collapseExample">
        <div className="container">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search Here"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
