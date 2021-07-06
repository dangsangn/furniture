import { Link, useRouteMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Drawer, Button } from "antd";
import "./style.scss";

function Navigation(props) {
  let menus = [
    {
      to: "/",
      label: "navigation.home",
      exact: true,
    },
    {
      to: "/store",
      label: "navigation.shop",
      exact: false,
    },
    {
      to: "/blog",
      label: "navigation.blog",
      exact: false,
    },
    {
      to: "/about-us",
      label: "navigation.aboutUs",
      exact: false,
    },
    {
      to: "/contact",
      label: "navigation.contact",
      exact: false,
    },
  ];

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  let result = menus.map((menu, index) => {
    return (
      <MenuLink
        key={index}
        label={menu.label}
        to={menu.to}
        activeOnlyWhenExact={menu.exact}
      />
    );
  });

  return (
    <>
      <div className="navigation">
        <ul className="navigation__list">{result}</ul>
      </div>

      <Button className="navigation__btn-menu" onClick={showDrawer}>
        <i class="fas fa-hamburger"></i>
      </Button>
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <ul className="navigation__list">{result}</ul>
      </Drawer>
    </>
  );
}

let MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  const { t } = useTranslation();
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className="navigation__item">
      <Link
        to={to}
        className={match ? "active navigation__link" : "navigation__link"}
      >
        {t(label)}
      </Link>
    </li>
  );
};

export default Navigation;
