import { GlobalStyleComponent } from '../styles/global'
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleComponent />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}
