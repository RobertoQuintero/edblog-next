import Head from 'next/head'
import Header from '../components/sections/Header'
import fetch from 'node-fetch'
import Post from '../components/blog/Post'
import {NextSeo} from 'next-seo'

const Home = ({posts}) => (
  <div>
    <NextSeo 
      title='Bienvenido a EDBlog'
      description='Edblog es una creación del curos de Next en EDteam'
      openGraph={{
        url : 'https:/ed.team',
        title: 'Bienvenido a EDBlog',
        description:'Edblog es una creación del curos de Next en EDteam',
        images: [
          {
            url: 'imgaes.com/logo.svg',
            width: 1200,
            height: 720,
            alt: 'Foto de perfil de edteam'
          }
        ],
        site_name: 'EDblog'
      }}
      twitter={{
        handle: '@edtemlat',
        site: '@edtemlat',
        cardType: 'summary_large_image',
      }}
    />
    <main className='ed-grid'>
      <h1>EDBlog de Roberto Carlos desde Github</h1>
      
      <div className='ed-grid m-grid-3 row-gap'>
       {
         posts.map((p )=> <Post key={p.id} post={p}/>)
       }
      </div>
    </main>
  </div>
)

export async function getStaticProps(){
  const resp = await fetch(`${process.env.API_BLOG}/posts`)
  const posts = await resp.json()
  return  {
    props: {
      posts
    }
  }
}

export default Home
