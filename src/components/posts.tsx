import { Post } from './post';

export const Posts = () => {
  let posts: string[] = ['a', 'b', 'c'];
  return (
    <>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
};
