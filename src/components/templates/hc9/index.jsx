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
  import "./hc9.css";
  
  const Hc9 = ({ template }) => {
    return (
      <>
        <Grid item xs={12}>
          <div
            className="hC9CardContainer"
            style={{ overflow: template.is_scrollable ? "auto" : "hidden" }}
          >
            {template.cards.length
              ? template.cards.map((Card) => {
                  return (
                    <div className="hc9Card">
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
  
  export default Hc9;
  