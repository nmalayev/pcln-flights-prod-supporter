import React, { useState } from 'react';
import { ThemeProvider, Heading, Divider, Flex } from 'pcln-design-system'
import { Departure, Arrival } from 'pcln-icons'
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Flex justifyContent='space-around' alignItems='center'>
          <Departure size={18} color='background.dark'/>
          <Heading.h3 color='primary.base' mx={1}>Flights Prod Supporter</Heading.h3>
          <Arrival size={18} color='background.dark'/>
        </Flex>

        <Divider />

        
      </div>
    </ThemeProvider>
  );
}

export default App;
