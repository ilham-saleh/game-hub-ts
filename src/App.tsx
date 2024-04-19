import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
        "aside main"`,
      }}
    >
      <GridItem area="nav" bg="tomato">
        <Navigation />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="yellow">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="orange">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
