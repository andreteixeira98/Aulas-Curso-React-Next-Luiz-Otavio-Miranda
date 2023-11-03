
import './App.css';
import {Component} from 'react';





class App extends Component {

  state={
    posts:[]
  }


  loadposts  = async() =>{

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


    this.setState({
      posts:postsAndPhotos
    })

  }
  componentDidMount(){
    this.loadposts();

  }

  render(){
    const {posts} = this.state;
    return (
      <div className="app">
       
       <section className="posts">
        <h1>List posts</h1> <br />
        <div className="container">
        {
          posts.map(post=>{
            return(
              <div className="card-post" key={post.id}>
                <img src={post.cover} alt={post.title} />
                <div className="content">
                  <h2 className="title">{post.title}</h2> <br />
                  <p className="body">{post.body}</p>
                </div>
              </div>
            )
          })
        }
        </div>
       </section>
      </div>
    );
  }
}

export default App;
