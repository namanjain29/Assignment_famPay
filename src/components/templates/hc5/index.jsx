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
import "./hc5.css";

const Hc5 = ({ template }) => {
  return (
    <>
      <Grid item xs={12}>
        <div
          className="hC5CardContainer"
          style={{ overflow: template.is_scrollable ? "auto" : "hidden" }}
        >
          {template.cards.length
            ? template.cards.map((Card) => {
                return (
                  <div className="hc5Card">
                    <div id="imgBx">
                      <img src={Card.bg_image.image_url}></img>
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

export default Hc5;
