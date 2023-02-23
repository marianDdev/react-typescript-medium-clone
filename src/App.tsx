import './index.css';
import { Posts } from './components/Posts';
import { PostInterface } from './interfaces/post';
import { Layout } from './layout';
import { Footer } from './layout/components/Footer';
import { Header } from './layout/components/Header';
import { Navbar } from './layout/components/Navbar';
import { postsMock } from './utils/posts-mock';

function App() {
  let posts: PostInterface[] = postsMock;

  return (
    <Layout>
      <Navbar />
      <Header />
      <Posts posts={posts} />
      <Footer />
    </Layout>
  );
}

export default App;
