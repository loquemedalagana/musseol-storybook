import React from "react";
import styled from "@emotion/styled";

// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
});

const FooterContainer = styled.footer`
  padding: 0.9375rem 0;
  text-align: center;
  display: flex;
  z-index: 2;
  position: relative;
`;

const FooterLeftSection = styled.div`
  float: left!important;
  display: block;
  font-family: 'Julius Sans One', sans-serif;
`;

const FooterRightSection = styled.div`
  padding: 15px 0;
  margin: 0;
  float: right!important;
`;

const A = styled.a`
  color: #7579e7;
  text-decoration: none;
  background-color: transparent;
`;

export interface IProps {
  whiteFont?: boolean;
}

const Footer: React.VFC<IProps> = (props) => {
  const classes = useStyles();
  const { whiteFont } = props;

  return (
    <>
      <FooterContainer className={whiteFont ? "footer-white-font" : ""}>
        <div className="container container-fluid">
          <FooterLeftSection>
            <List className="footer-list">
              <ListItem
                button
                className={classes.inlineBlock}
                onClick={() => console.log("about")}
              >
                <p
                  className="footer-block"
                >
                  About
                </p>
              </ListItem>
              <ListItem
                button
                className={classes.inlineBlock}
                onClick={() => console.log("faq")}
              >
                <p
                  className="footer-block"
                >
                  FAQ
                </p>
              </ListItem>
              <ListItem
                button
                className={classes.inlineBlock}
                onClick={() => console.log("help")}
              >
                <p
                  className="footer-block"
                >
                  HELP
                </p>
              </ListItem>
              <ListItem
                button
                className={classes.inlineBlock}
                onClick={() => console.log("cliekced")}
              >
                <p
                  className="footer-block"
                >
                  Tech Blog
                </p>
              </ListItem>
            </List>
          </FooterLeftSection>
          <FooterRightSection>
            &copy; {new Date().getFullYear()} , developed {" "}
            <Favorite className="footer-icon" /> by{" "}
            <A
              href="https://github.com/loquemedalagana"
              className={whiteFont ? "footer-white-font" : ""}
              target="_blank"
              rel="noreferrer noopener"
            >
              Mrs. Liberty
            </A>{" "}
            for a better world.
          </FooterRightSection>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
