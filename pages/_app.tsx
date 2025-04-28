import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/argon-design-system-react.css';
import '../styles/styles.css';
import '../styles/vendor/font-awesome/css/font-awesome.min.css';
import '../styles/vendor/nucleo/css/nucleo.css';
import { Container } from 'reactstrap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <footer style={{ marginTop: '10px' }}>
        <Container>
          <p className="text-center">
            ® {new Date().getFullYear()} Yuvraj Angad Singh. All rights
            reserved.
          </p>
        </Container>
      </footer>
    </>
  );
}

export default MyApp;
