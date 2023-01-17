import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
