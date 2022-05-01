import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { ReactComponent as ClientAudiophile } from './icons/client-audiophile.svg';

const theme = {
  breakpoints: {
    mobile: '375px',
    desktop: '1440px',
  },
  fonts: {
    primary: "'Epilogue', sans-serif",
  },
  colors: {
    almostWhite: '#fafafa',
    mediumGray: '#696969',
    almostBlack: '#141414',
  },
};

const Div = styled.div`
  height: 20vh;
  background-color: ${(props) => (props.theme.breakpoints.mobile ? 'red' : 'yellow')};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 500;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Div>some text!!</Div>
      <ClientAudiophile />
    </ThemeProvider>
  );
}

export default App;
