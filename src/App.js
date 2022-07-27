import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {Header} from "./components/Header/Header";
import Landing from './pages/Landing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Landing />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
