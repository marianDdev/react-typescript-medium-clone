import { AuthorInterface } from "../interfaces/author";
import { CategoryInterface } from "../interfaces/category";
import { PostInterface } from "../interfaces/post";

let authorData: AuthorInterface =  {
    name: "vasile",
    avatarUrl: "https://wkqsq"
  }

  let categoryData: CategoryInterface = {
    name: 'web dev'
  } 

  export const postsMock: PostInterface[] = [
    {id: 1,
      author: authorData,
      createdAt: new Date,
      title: 'a',
      description: 'aaa',
      photoUrl: 'https://dsd',
      category: categoryData,
      readingTime: 23,
},
{id: 2,
  author: authorData,
  createdAt: new Date,
  title: 'a',
  description: 'aaa',
  photoUrl: 'https://dsd',
  category: categoryData,
  readingTime: 23,
},
{id: 3,
  author: authorData,
  createdAt: new Date,
  title: 'a',
  description: 'aaa',
  photoUrl: 'https://dsd',
  category: categoryData,
  readingTime: 23,
},
{id: 4,
  author: authorData,
  createdAt: new Date,
  title: 'a',
  description: 'aaa',
  photoUrl: 'https://dsd',
  category: categoryData,
  readingTime: 23,
}
  ];