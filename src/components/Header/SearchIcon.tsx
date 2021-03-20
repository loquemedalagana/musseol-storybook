import React from "react";
import { IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";

interface IProps {
  color: "inherit";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const SearchIcon: React.FC<IProps> = (props) => {
  const { color, onClick } = props;
  return (
    <IconButton aria-label="open drawer" color={color} onClick={onClick}>
      <Search />
    </IconButton>
  );
};

export default SearchIcon;
