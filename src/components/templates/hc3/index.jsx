import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import GetText from "../../modifiedText";
import routeChange from "../../../utils/routeChange";
import "./hc3.css";
import alertIcon from "../../../assets/bell.png";
import cancelIcon from "../../../assets/cancel.png";
import React, { useState } from "react";
import { useEffect } from "react";
import Hc3Card from "./hc3Card";

const Hc3 = ({ template }) => {
  const [cardSize, setCardSize] = useState(12);
  const [displayCardArray, setDisplayCardArray] = useState(
    Array(template.cards.length).fill("block")
  );

  return (
    <>
      <Grid item xs={12}>
        <div
          className="hc3Container cardScroll"
          style={{ overflow: template.is_scrollable ? "auto" : "hidden" }}
        >
          {console.log(displayCardArray)}
          {template.cards.length > 0
            ? template.cards.map((Card, key) => {
                return <Hc3Card key={key} Card={Card} />;
              })
            : null}
        </div>
      </Grid>
    </>
  );
};

export default Hc3;

const titleStyle = { fontSize: "30px", fontWeight: 500 };
const descStyle = { fontSize: "12px", fontWeight: 400 };
