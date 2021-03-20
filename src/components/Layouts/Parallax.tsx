import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// core components
import desktopBackgroundImg from "../../assets/images/background1.jpg";
import mobileBackgroundImg from "../../assets/images/background2.jpg";
import upperBackgroundImg from "../../assets/images/background3.jpg";

const useStyles = makeStyles((theme) => ({
  medium: {
    backgroundImage: `url(${mobileBackgroundImg})`,
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${desktopBackgroundImg})`,
      backgroundPosition: "right",
    },
  },
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
  filter: {
    "&:before": {
      background:
        "linear-gradient(60deg, rgba(255, 142, 83, 0.3) 30%,rgba(163, 216, 244, 0.5) 80%)",
    },
    "&:after,&:before": {
      backgroundImage: upperBackgroundImg,
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "380px",
    backgroundImage: upperBackgroundImg,
  },
}));

interface IProps {
  children?: React.ReactNode;
  className?: string;
  filter?: boolean;
  style?: object;
  backgroundImage?: string;
  small?: boolean;
}

const Parallax: React.FC<IProps> = (props) => {
  let windowScrollTop: number | undefined;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    `translate3d(0,${windowScrollTop}px,0)`,
  );
  const resetTransform = () => {
    windowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
  };
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const {
    filter, children, style, small,
  } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.medium]: !small,
    [classes.small]: small,
    //  [className]: className !== undefined,
  });

  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        transform,
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
