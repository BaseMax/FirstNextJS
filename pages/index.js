import { server } from '../config'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'

export default function Home({
  articles
}) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>First NextJS</title>
        <meta name="keywords" content="web development, programming"/>
      </Head>
      {/* <h1>Welcome to Next</h1> */}

      <ArticleList articles={articles} />

      {/* {articles.map(article => {
        <h3>{article.title}</h3>
      })} */}
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/`)

  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }
