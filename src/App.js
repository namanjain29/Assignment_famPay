import logo from "./logo.svg";
import "./App.css";
import { getAllCards } from "./services/cardsService";
import { useEffect, useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Hc3 from "./components/templates/hc3";
import Hc6 from "./components/templates/hc6";
import Hc1 from "./components/templates/hc1";
import Hc5 from "./components/templates/hc5";
import Hc9 from "./components/templates/hc9";

const getTemplateCard = (template) => {
  switch (template.design_type) {
    case "HC3":
      return <Hc3 template={template} />;
    case "HC6":
      return <Hc6 template={template} />;
    case "HC5":
      return <Hc5 template={template} />;
    case "HC9":
      return <Hc9 template={template} />;
    case "HC1":
      return <Hc1 template={template} />;
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
    if (typeof data != "object") {
      alert(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {templates.length > 0 ? (
        <div className="container">
          <Container>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {templates.map((template) => getTemplateCard(template))}
              </Grid>
            </Box>
          </Container>
        </div>
      ) : (
        <div style={{ display: error ? "none" : "block" }} className="loader">
          <CircularProgress />
        </div>
      )}
    </>
  );
}

export default App;
