export const loadposts = async () =>{
  const postsresponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts,photos] = await Promise.all([postsresponse,photosResponse]);

    const photosJson = await photos.json();

    const postsJson = await posts.json();

    const postsAndPhotos = await postsJson.map((post,index)=>{
      return {
        ...post,cover:photosJson[index].url
      }
    })

    return postsAndPhotos;
}