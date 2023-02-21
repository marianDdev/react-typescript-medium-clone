import { PostInterface } from '../../interfaces/post';
import { Post } from '../Post';

export const Posts = (props: { posts: PostInterface[] }) => {
  let posts: PostInterface[] = props.posts;
  return (
    <>
      {posts.map(post => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};
