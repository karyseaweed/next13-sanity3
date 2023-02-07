// store custom type definitions here and Next.js 13 will automatically import them

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image extends Base {
  _type: 'image';
  asset: Reference;
}

interface Reference extends Base {
  _type: 'reference';
  _ref: string;
}

interface Slug extends Base {
  _type: 'slug';
  current: string;
}

interface Block extends Base {
  _type: 'block';
  _key: string;
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _type: 'span';
  _key: string;
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage extends Base {
  _type: 'image';
  asset: Reference;
}

interface Title extends Base {
  _type: 'string';
  current: string;
}
