import { styled } from '@/styles'
import { HomeContainer, Product } from '@/styles/pages/home'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import camiseta from "../assets/1.png"
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'
const inter = Inter({ subsets: ['latin'] })
// teste sobre themes
// const Button = styled('button', {
//   backgroundColor: '$rocketseat',
//   borderRadius: 4,
//   border: 0,
//   padding: '4px 8px',
//   span: {
//     fontWeight:'bold'
//   },
//   '&:hover': {
//     filter:'brightness(0.8)'
//   }
// })
export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing:48,
    }
  })
 
  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider_slide'>
        <Image src={camiseta} width={520} height={480} alt='' />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
