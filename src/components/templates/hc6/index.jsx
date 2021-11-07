import {
  Container,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import GetText from "../../modifiedText";
import "./hc6.css";

const Hc6 = ({ template }) => {
  return (
    <>
      <Grid item xs={12}>
        <div
          className="hC6CardContainer"
          style={{ overflow: template.is_scrollable ? "auto" : "hidden" }}
        >
          {template.cards.length
            ? template.cards.map((Card) => {
                return (
                  <div className="cardContainer">
                    <div id="imgBx">
                      <img src={Card.icon.image_url}></img>
                    </div>
                    <div>
                      <GetText
                        normalText={Card.title}
                        formattedText={Card.formatted_title}
                        styles={{}}
                      />
                      <GetText
                        normalText={Card.description}
                        formattedText={Card.formatted_description}
                        styles={{}}
                      />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </Grid>
    </>
  );
};

export default Hc6;
