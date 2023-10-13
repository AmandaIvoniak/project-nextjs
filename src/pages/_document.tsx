import { getCssText } from '@/styles'
import { Html, Head, Main, NextScript } from 'next/document'
//index.html
//será carregado em todas as paginas do projeto
//sempre qque alterar algo aqui, start o projeto novamente
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      
      <style id="stitches" dangerouslySetInnerHTML={{__html:getCssText()}}/></Head>
      <body>
        <Main /> {/* id=root */}
        <NextScript />{/* onde você quer carregar os script */}
      </body>
    </Html>
  )
}
