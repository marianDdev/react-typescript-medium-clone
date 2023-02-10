import { Posts } from '../components/posts';
import { Footer } from '../layouts/footer';
import { Header } from '../layouts/header';
import { Navbar } from '../layouts/navbar';
import { Sidebar } from '../layouts/sidebar';

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Posts />
      <Sidebar />
      <Footer />
    </>
  );
};
