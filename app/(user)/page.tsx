import { previewData } from 'next/headers';
import { groq } from 'next-sanity'; // groq is the query language or graphql equivalent in Sanity's world
import { client } from '../../lib/sanity.client';

const query = groq`
  *[_type=='post'] { // get all the posts
    ..., // all the fields
    author->, // expand author and categories fields, otherwise you only get a reference but not the full detail
    categories[]->
  } | order(_createdAt desc) // piping, ordering the result by created date descending
`;

export default async function Page() {
  if (previewData()) {
    return <h1 className='text-3xl font-bold'>Preview mode</h1>;
  }

  // if NOT in preview mode:
  const posts = await client.fetch(query);
  return (
    <div>
      <h1 className='text-3xl font-bold'>Not in preview mode</h1>
      <p>some page content...</p>
    </div>
  );
}
