import { AuthorInterface } from '../../interfaces/author';
import { CategoryInterface } from '../../interfaces/category';
import { PostInterface } from '../../interfaces/post';
import Button from '../index';

export const Post = (props: { post: PostInterface }) => {
  let post: PostInterface = props.post;
  let author: AuthorInterface = post.author;
  let category: CategoryInterface = post.category;

  return (
    <div className='mb-5'>
      <p>Title: {post.title}</p>
      <p>Photo: {post.photoUrl}</p>
      <p>Description: {post.description}</p>
      <p>Reading duration: {post.readingTime}</p>
      <p>Category: {category.name}</p>
      <p>Created at: {post.createdAt.toString()}</p>

      <p>Author:</p>
      <div>
        <p>name: {author.name}</p>
        <p>Photo: {author.avatarUrl}</p>
        <p>Followers count: {author.followersCount}</p>
      </div>

      <Button />
    </div>
  );
};
