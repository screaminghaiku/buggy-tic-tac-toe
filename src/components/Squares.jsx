import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import RadioButtonUncheckedSharpIcon from "@material-ui/icons/RadioButtonUncheckedSharp";

const customStyle = {
  font: {
    fontSize: "7rem"
  },
  size: {
    height: "12rem",
    width: "12rem"
  }
};

const Squares = props => {
  const icons = {
    x: <ClearIcon style={customStyle.font} />,
    o: <RadioButtonUncheckedSharpIcon style={customStyle.font} />
  };

  // const [squares, setSquares] = useState(Array(9).fill(null));

  const [icon, setIcon] = useState();

  const [count, setCount] = useState(0);

  const [isClicked, setClicked] = useState(true);

  // const [playerClick, setPlayerClick] = useState(true);

  const handleClick = e => {
    setCount(count + 1);
    e.preventDefault();
    console.log(count + isClicked);

    setIcon(() => {
      if (isClicked && count % 2 === 0) {
        return icons.x;
      } else if (isClicked && count % 2 !== 0) {
        return icons.o;
      }
    });
  };

  return Array(...Array(9)).map((v, i) => (
    <Button
      variant="contained"
      style={customStyle.size}
      key={props.i}
      onClick={handleClick}
    >
      {icon}
    </Button>
  ));
};

export default Squares;
