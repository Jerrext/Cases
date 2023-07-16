export const getSinglePost = async (postId) => {
  const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!request.ok) {
    throw new Error(request.status);
  }
  const data = await request.json();
  return data;
};

export const getPosts = async () => {
  const request = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await request.json();
};

export const getAlbums = async () => {
  const request = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  return await request.json();
};
