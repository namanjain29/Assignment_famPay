import { Grid } from "@mui/material";
import GetText from "../../modifiedText";
import "./hc1.css";
import "../../../global.css";
import routeChange from "../../../utils/routeChange";
import { titleStyles } from "../../../utils/textStyles";

const Hc1 = ({ template }) => {
  return (
    <>
      <Grid item xs={12}>
        <div
          className="cardScroll hc1Container"
          style={{ overflow: template.is_scrollable ? "auto" : "hidden" }}
        >
          {template.cards.length
            ? template.cards.map((Card, key) => {
                return (
                  <div
                    key={key}
                    onClick={() => routeChange(Card.url)}
                    className="hc1CardContainer"
                    style={{ backgroundColor: Card.bg_color }}
                  >
                    <div id="hc1Icon">
                      <img src={Card.icon.image_url}></img>
                    </div>
                    <div>
                      <GetText
                        normalText={Card.title}
                        formattedText={Card.formatted_title}
                        styles={titleStyles}
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

export default Hc1;
