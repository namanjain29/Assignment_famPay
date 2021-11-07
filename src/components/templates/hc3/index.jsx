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

const Hc3 = ({template}) => {
  return (
    <>
      <Grid item xs={12}>
        <Card style={{ backgroundColor: template.cards[0].bg_color }}>
          <CardActionArea>
            <div>
              <img
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  objectPosition: "0% 0%",
                }}
                src={template.cards[0].bg_image.image_url}
              />
            </div>
            <CardContent>
              <GetText
                normalText={template.cards[0].title}
                formattedText={template.cards[0].formatted_title}
                styles={{}}
              />
              <GetText
                normalText={template.cards[0].description}
                formattedText={template.cards[0].formatted_description}
                styles={{}}
              />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Hc3;