import { Grid } from "@mui/material";
import GetText from "../../modifiedText";
import "./hc9.css";
import "../../../global.css";
import routeChange from "../../../utils/routeChange";

const Hc9 = ({ template }) => {
  return (
    <>
      <Grid item xs={12}>
        <div
          className="cardScroll hc9Container"
          style={{ overflow: template.is_scrollable ? "auto" : "hidden" }}
        >
          {template.cards.length
            ? template.cards.map((Card, key) => {
                return (
                  <div
                    key={key}
                    className="hc9Card"
                    onClick={() => routeChange(Card.url)}
                  >
                    <div id="hc9ImgBx">
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
