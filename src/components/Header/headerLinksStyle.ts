import { createStyles, Theme } from "@material-ui/core/styles";

const headerLinksStyle = ({ breakpoints }: Theme) => createStyles({
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: "\"\"",
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
    },
  },
});

export default headerLinksStyle;
