/* global chrome */
import React, { useState } from "react";
import {
  ThemeProvider,
  Heading,
  Divider,
  Flex,
  getPaletteColor,
  Button,
} from "pcln-design-system";
import { Departure, Arrival } from "pcln-icons";
import "./App.css";
import FlightsApp from "./components/FlightsApp/FlightsApp";
import styled from "styled-components";

const AppWrapper = styled(Flex)`
  border: 1px solid ${getPaletteColor("border.base")};
  border-radius: 6px;
`;

const CalcDiffsButton = styled(Button)`
  border-radius: 6px;
`;

function App() {
  const initialState = [
    { name: "m-fly-search", isChecked: true },
    { name: "fly-ql", isChecked: true },
    { name: "fly-seats", isChecked: true },
    { name: "fly-deals", isChecked: true },
    { name: "m-flights", isChecked: true },
    { name: "m-fly-checkout", isChecked: true },
  ];

  const [flightsApps, setFlightsApps] = useState(initialState);

  const onChange = (e) => {
    const currentApp = flightsApps.find((app) => app.name === e.target.name);
    currentApp.isChecked = e.target.checked;

    // https://stackoverflow.com/questions/49477547/setstate-of-an-array-of-objects-in-react
    const newState = [...flightsApps].map((app) => {
      if (app.name === currentApp.name) {
        return { ...currentApp };
      } else return app;
    });

    setFlightsApps(newState);
  };

  const selectAllApps = () => {
    const newState = [...flightsApps].map(
      app => ({...app, isChecked: true})
    )
    console.log(newState)
    setFlightsApps(newState)
  }

  const deselectAllApps = () => {
    const newState = [...flightsApps].map(
      app => ({...app, isChecked: false})
    )

    setFlightsApps(newState)
  }

  const renderFlightsApps = () =>
    flightsApps.map((app) => (
      <FlightsApp
        key={app.name}
        app={app.name}
        isChecked={app.isChecked}
        onChange={onChange}
      />
    ));

  const getDiffUrl = (appName) =>
    `https://github.com/pcln/${appName}/compare/master...develop`;

  const getDiffs = () =>
    flightsApps.forEach(
      (app) => app.isChecked && chrome.tabs.create({url: getDiffUrl(app.name)})
    );

  return (
    <ThemeProvider>
      <div className="App">
        <Flex justifyContent="space-around" alignItems="center">
          <Departure size={18} color="background.dark" />
          <Heading.h3 color="primary.base" mx={1}>
            Flights Prod Supporter
          </Heading.h3>
          <Arrival size={18} color="background.dark" />
        </Flex>

        <Divider />

        <Flex flexDirection='column' alignItems='center'>
          <AppWrapper flexDirection="column" mt="18px" p={2}>
            {renderFlightsApps()}
          </AppWrapper>

          <Flex mt='16px'>
            <Button size='small' variation='link' mr={3} onClick={selectAllApps}>
              Select all
            </Button>
            <Button size='small' variation='link' onClick={deselectAllApps}>
              Deselect all
            </Button>
          </Flex>

          <CalcDiffsButton
            color="primary"
            mt="26px"
            variation="outline"
            onClick={getDiffs}
          >
            Calculate Diffs
          </CalcDiffsButton>
        </Flex>
      </div>
    </ThemeProvider>
  );
}

export default App;
