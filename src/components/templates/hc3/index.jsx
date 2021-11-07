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
  return (
    <>
      <Grid item xs={12}>
        <div
          className="hc3Container cardScroll"
          style={{ overflow: template.is_scrollable ? "auto" : "hidden" }}
        >
          <Grid container spacing={1}>
            <Grid
              item
              xs={4}
              sx={{ display: cardSize == 12 ? "none" : "block" }}
            >
              <div className="iconBox">
                <div className="iconContainer">
                  <div className="actionIcon">
                    <img src={alertIcon} />
                    <h5>Remind Later</h5>
                  </div>
                  <div onClick={() => setCardSize(12)} className="actionIcon">
                    <img src={cancelIcon} />
                    <h5>Dismiss Now</h5>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={cardSize}>
              <div className="hc3Card">
                <Card
                  style={{ backgroundColor: template.cards[0].bg_color }}
                  onClick={() => setCardSize(8)}
                >
                  <CardActionArea>
                    <div id="hc3ImgBx">
                      <img src={template.cards[0].bg_image.image_url} />
                    </div>
                    <CardContent>
                      <GetText
                        normalText={template.cards[0].title}
                        formattedText={template.cards[0].formatted_title}
                        styles={titleStyle}
                      />
                      <GetText
                        normalText={template.cards[0].description}
                        formattedText={template.cards[0].formatted_description}
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
                </Card>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default Hc3;

const titleStyle = { fontSize: "30px", fontWeight: 500 };
const descStyle = { fontSize: "12px", fontWeight: 400 };
