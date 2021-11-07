import { Grid } from "@mui/material";
import GetText from "../../modifiedText";
import "./hc6.css";
import "../../../global.css";
import routeChange from "../../../utils/routeChange";
import {titleStyles, descStyles} from "../../../utils/textStyles";

const Hc6 = ({ template }) => {
  return (
    <>
      <Grid item xs={12}>
        <div
          className="cardScroll hc6CardContainer"
          style={{ overflow: template.is_scrollable ? "auto" : "hidden"}}
        >
          {template.cards.length
            ? template.cards.map((Card, key) => {
                return (
                  <div
                    key={key}
                    className="hc6Card"
                    onClick={() => routeChange(Card.url)}
                  >
                    <div id="hc6ImgBx">
                      <img src={Card.icon.image_url}></img>
                    </div>
                    <div>
                      <GetText
                        normalText={Card.title}
                        formattedText={Card.formatted_title}
                        styles={titleStyles}
                      />
                      <GetText
                        normalText={Card.description}
                        formattedText={Card.formatted_description}
                        styles={descStyles}
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


