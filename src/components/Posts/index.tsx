import { AuthorInterface } from '../../interfaces/author';
import { CategoryInterface } from '../../interfaces/category';
import { PostInterface } from '../../interfaces/post';
import { postsMock } from '../../utils/posts-mock';
import { Post } from '../Post';

export const Posts = () => {
  const posts = postsMock;
  
  return (
    <>
      {posts.map((post) => (
        <>
          <Post key={post.id} />
          <hr />
        </>
      ))}
    </>
  );
};
