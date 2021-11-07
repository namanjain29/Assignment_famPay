import { Grid } from "@mui/material";
import "./hc5.css";
import "../../../global.css";
import routeChange from "../../../utils/routeChange";

const Hc5 = ({ template }) => {
  return (
    <>
      <Grid item xs={12}>
        <div
          className="cardScroll"
          style={{ overflow: template.is_scrollable ? "auto" : "hidden" }}
        >
          {template.cards.length
            ? template.cards.map((Card, key) => {
                return (
                  <div
                    key={key}
                    className="hc5Card"
                    onClick={() => routeChange(Card.url)}
                  >
                    <div id="hc5ImgBx">
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
