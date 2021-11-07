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

const Hc3 = ({ template }) => {
  const [cardSize, setCardSize] = useState(12);
  // const [displayCard, setDisplayCard] = useState([]*template.length)
  return (
    <>
      <Grid item xs={12}>
        <div
          className="hc3Container cardScroll"
          style={{ overflow: template.is_scrollable ? "auto" : "hidden" }}
        >
          {template.cards.length > 0
            ? template.cards.map((Card, key) => {
                return (
                  <Grid key={key} container spacing={1}>
                    <Grid
                      item
                      xs={4}
                      sx={{ display: cardSize == 12 ? "none" : "block" }}
                    >
                      <div className="iconBox">
                        <div className="iconContainer">
                          <div
                            onClick={() => setCardSize(12)}
                            className="actionIcon"
                          >
                            <img src={alertIcon} />
                            <h5>Remind Later</h5>
                          </div>
                          <div
                            onClick={() => setCardSize(12)}
                            className="actionIcon"
                          >
                            <img src={cancelIcon} />
                            <h5>Dismiss Now</h5>
                          </div>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={cardSize}>
                      <div
                        className="hc3Card"
                        onClick={() => setCardSize(8)}
                        style={{
                          backgroundColor: Card.bg_color,
                        }}
                      >
                        <CardActionArea>
                          <div id="hc3ImgBx">
                            <img src={Card.bg_image.image_url} />
                          </div>
                          <CardContent>
                            <GetText
                              normalText={Card.title}
                              formattedText={Card.formatted_title}
                              styles={titleStyle}
                            />
                            <GetText
                              normalText={Card.description}
                              formattedText={
                                Card.formatted_description
                              }
                              styles={descStyle}
                            />
                          </CardContent>
                        </CardActionArea>
                        <div className="buttonBox">
                          <Button
                            onClick={() => routeChange(Card.url)}
                            variant="contained"
                          >
                            Action
                          </Button>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                );
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
