import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'


export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo /> 

      <AnimatePresence mode="wait" initial={true}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}