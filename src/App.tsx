import { Header } from "./components/Header"
import { Post } from "./components/Post"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabhpadilha02.png',
      name: 'Gabriel Padilha',
      role: 'Web Developer',
    },
    content: [
     {type: 'paragraph', content: 'Fala galeraa 👋'},
     {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     {type: 'link', content:'👉{" "}jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-09 13:52:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/102609614_1450553805136489_2385890851484114005_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=84a396&_nc_eui2=AeFS8pQ-1-r40nTpxbjsu4ETtnJyRdgSvim2cnJF2BK-Kb2rYhDMhCbtQdL9gvAchsRR9jUOsZM-peXRdRJDkJs1&_nc_ohc=wy3DYVg7aAcAX-FrfnZ&_nc_ht=scontent-gru2-2.xx&oh=00_AT8wmE63E3HpsJJ6M6kZc5lqIoC15DFw6DxwtuPXoH-19Q&oe=62C9A11E',
      name: 'Thor',
      role: 'Pet',
    },
    content: [
     {type: 'paragraph', content: 'AU AU AU AU 🐶'},
     {type: 'paragraph', content:'AU AU AU AU AU AU AU AU AU AU AU AU AU AU AU AU AU 🐼 '},
     {type: 'link', content:'👉{" "}jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-09 14:00:00')
  },
]


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              
              />
            )
          })}
        </main>
      </div>
      
    </>
    
  )  
}
export default App
