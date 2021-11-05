import logo from "./logo.svg";
import "./App.css";
import { getAllCards } from "./services/cardsService";
import { useEffect, useState } from "react";
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
import Hc3 from "./components/templates/hc3";

const getTemplateCard = (template) => {
  switch (template.design_type) {
    case "HC3":
      return <Hc3 template={template} />;
    case "HC6":
      return <></>;
    case "HC5":
      return <></>;
    case "HC9":
      return <></>;
    case "HC1":
      return <></>;
    default:
      return <></>;
  }
};

function App() {
  const [templates, setTemplates] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    const data = await getAllCards();
    typeof data == "object" ? setTemplates(data) : setError(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {templates.length > 0
              ? templates.map((template) => getTemplateCard(template))
              : null}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
