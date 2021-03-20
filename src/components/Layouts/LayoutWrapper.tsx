import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";
import Parallax from "./Parallax";
import MediumParallaxBrand from "./MediumParallaxBrand";
import upperBackgroundImg from "../../assets/images/background3.jpg";


const Container = styled.div`
  z-index: 12;
  color: whitesmoke;
`;

const smallParallaxStyle = (imgURL?: string | undefined) => ({
  root: {
    backgroundImage: imgURL
      ? `url(${imgURL})`
      : `url(${upperBackgroundImg})`,
  },
});

export interface IProps {
  children?: React.ReactNode;
  isSmall?: boolean;
}

const LayoutWrapper: React.FC<IProps> = (props) => {
  const {children, isSmall} = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <>
      {/* header */}
      <Parallax small={isSmall} filter={isSmall} style={isSmall ? smallParallaxStyle().root : undefined}>
        <Container className="container-fluid container">
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <MediumParallaxBrand title="App Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </Grid>
          </Grid>
        </Container>
      </Parallax>
      <div className="main main-raised">
        {children}
      </div>
      {/* footer */}
    </>
  )
}

export default LayoutWrapper;
