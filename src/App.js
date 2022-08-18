import './App.css';
import Navbar from './Components/Navbar';
import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Divider,
  List,
  ListItem,
  Icon,
  Link,
} from "@chakra-ui/react";


function App() {
  return (
    <>
    <Navbar/>
    <Box as="main" background={"blue.500"} >
      <Container maxW="container.lg" background={"red.200"} pt={14}>
       <Text pb={20} color={"blue"}>How far</Text>
      </Container>
    </Box>
   
  
    </>
  );
}

export default App;
