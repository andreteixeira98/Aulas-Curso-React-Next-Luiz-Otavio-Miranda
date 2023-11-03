import { Component } from 'react';
import './App.css';

class App extends Component {


state={
 
  posts:[]
};


loadposts = async () =>{
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const photosresponse = await fetch('https://jsonplaceholder.typicode.com/photos/');

  const [posts,photos] = await Promise.all([postsResponse,photosresponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsandphotos = await postsJson.map((post,index)=>{
    return {
      ...post,cover:photosJson[index].url
    }
  })
  
  // console.log(postsJson)


  this.setState({
    posts:postsandphotos
  })

  console.log(postsJson)

  // return postsJson;
}
componentDidMount(){
  this.loadposts();


}
componentDidUpdate(){
 

}
componentWillUnmount(){

}


  render(){
    const {posts} = this.state;
   
   
    return ( 
       <section className='container'>

        outra coisa
        <div className="posts">
          {posts.map(post => (
            <div className="post" key={post.id}>
              <img src={post.cover} alt={post.title} />
              <div className="post_content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div> 
            </div>
          ))}
        </div>
       </section>
    );
  }
}

export default App;
