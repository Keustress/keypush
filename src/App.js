import styled from 'styled-components';
import './App.css';
import Banner from './components/Banner';
import Category from './components/Category';

function App() {
  return (
    <Container>
      <Banner />
      <Category />
    </Container>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  }
`;
