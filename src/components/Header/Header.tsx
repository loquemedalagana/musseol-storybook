/*eslint-disable*/
import React, {useCallback, useEffect, useState} from "react";
import classNames from "classnames";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar, Toolbar, IconButton, Hidden, Drawer,
} from "@material-ui/core";
import useModal from "../../hooks/useModal";
import SearchBar from "../SearchBar/SearchBar";

// @material-ui/icons
import {
  QueueMusic as Menu,
  ArrowBackIos,
  HomeSharp,
} from "@material-ui/icons";

import SearchIcon from "./SearchIcon";

// styles
import styles from "./headerStyle";
const useStyles = makeStyles(styles);
type HeaderColor = "primary" |
  "info" |
  "success" |
  "warning" |
  "danger" |
  "transparent" |
  "white" |
  "rose" |
  "dark";

const BrandItem = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  letter-spacing: 0.08em;
  cursor: pointer;
  color: whitesmoke;
  border-radius: 3px;
  align-content: center;
  padding: 0 10px 0 10px;
  font-size: 18px;
  display: grid;
  &:hover, &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
  min-width: 50%;
  & > h4{
    font-family: 'Julius Sans One', serif !important;
  }
`;

export interface IProps {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  color: HeaderColor;

  isSearchPage?: boolean;
  rightLinks?: React.ReactNode;
  leftLinks?: React.ReactNode;
  brand: string;

  position: "absolute" | "fixed";

  changeColorOnScroll: {
    height: number;
    color: HeaderColor;
  }
}

const Header: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const { mobileOpen, setMobileOpen } = props;
  const [searchModal, setSearchModal] = useState(false);

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = useCallback(() => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }, []);
  const {
    color, rightLinks, leftLinks, brand, position, isSearchPage
  } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: position === "absolute",
    [classes.fixed]: position === "fixed",
  });

  // console.log(location);
  // only for client side
  useEffect(() => {
    const $body = document.querySelector('body');
    const $modalRoot = document.createElement("div");
    $modalRoot.id = "#root-modal";
    if($body !== null) {
      $body.appendChild($modalRoot);
    }
  }, []);
  const {
    openModal: showSearchModal,
    closeModal: closeSearchModal,
    ModalPortal: SearchModalPortal,
  } = useModal();


  const brandComponent = (
    <>
      <Hidden mdUp implementation="js">
        <IconButton className={classes.title} onClick={() => alert("back")}>
          <ArrowBackIos />
        </IconButton>
        <IconButton className={classes.title} onClick={() => alert("home")}>
          <HomeSharp />
        </IconButton>
      </Hidden>
      <Hidden smDown>
        <BrandItem className="button-transparent">
          <h4 onClick={() => alert("home!")}>{brand}</h4>
        </BrandItem>
      </Hidden>
    </>
  );

  return (
    <>
      <AppBar className={appBarClasses}>
        <Toolbar className="container-fluid container header-container">
          {leftLinks !== undefined ? brandComponent : null}
          <div className="header-flex">
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>
          {!isSearchPage && <SearchIcon color="inherit" onClick={showSearchModal} />}
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp implementation="js">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="js">
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            classes={{
              root: "drawer-root",
              paper: "transition drawer-paper",
            }}
            onClose={handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
      <SearchModalPortal>
        <SearchBar onClose={closeSearchModal} />
      </SearchModalPortal>
    </>
  );
}

Header.defaultProps = {
  color: "white",
};



export default Header;
