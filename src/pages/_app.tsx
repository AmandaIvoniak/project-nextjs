import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
globalStyles();
import logoImg from '../assets/logo.svg';
import Image from 'next/image';
import { Container, Header } from '@/styles/pages/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
    <Header>
        <Image src={logoImg.src} alt='' width={100} height={100} />
    </Header>
      
    <Component {...pageProps} />
    </Container>);
}
