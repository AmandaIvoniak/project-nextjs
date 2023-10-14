import { styled } from '@/styles'
import { HomeContainer, Product } from '@/styles/pages/home'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import camiseta from "../assets/1.png"
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '@/lib/stripe'
import { GetStaticProps } from 'next'
// import { GetServerSideProps } from 'next'
import Stripe from 'stripe'
import { useEffect } from 'react'
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
interface ProductsProps{
  products: {
    id: string,
    name: string,
    imageURL: string,
    price: string,
  }[]
};
export default function Home({ products }: ProductsProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
    }
  })

 
  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {products.map(product => {
        return (
          <Product className='keen-slider__slide' key={product.id}>
            <Image src={product.imageURL} width={520} height={480} alt='' />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
      )
      })}
    </HomeContainer>
  )
}


// export const getServerSideProps: GetServerSideProps = async () => {
// Quando executamos StaticProps, não temos acesso a res, req, cookies, cache da aplicação por só atualiza por build ou  revalidate
//pois a pagina se torna estatica
  export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({expand:['data.default_price']});
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id:product.id,
      name:product.name,
      imageURL: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })
  return {
    props: {
      products
    },
    revalidate:60*60*2, // a cada 2h
  };
}