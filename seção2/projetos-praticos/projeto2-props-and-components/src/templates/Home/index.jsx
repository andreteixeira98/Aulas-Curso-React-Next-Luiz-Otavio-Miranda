import { Component } from 'react';

import './styles.css';

import { Posts } from '../../Components/Posts';
import { loadposts } from '../../utils/loadposts';


class Home extends Component {
  constructor(props){
    super(props);
    this.setupState = this.setupState.bind(this);
  }

  state={
    posts:[],
    allPosts:[],
    page:0,
    postsPerPage:3,
    
  }

  

  setupState = (state)=>{
    this.setState(state);
  }

  loadposts  = async() =>{
    const {page, postsPerPage} = this.state;
    const postsAndPhotos = await loadposts();

    this.setState({
      posts:postsAndPhotos.slice(page,postsPerPage),
      allPosts:postsAndPhotos
    })

  }
  async componentDidMount(){
    await this.loadposts();

  }

  render(){
    const {posts,allPosts,page, postsPerPage} = this.state;
    return (
      <div className="home">
       <Posts
        setState={this.setupState}
        posts={posts} 
        allPosts={allPosts} 
        page={page} 
        postsPerPage={postsPerPage}
      />
      </div>
    );
  }
}

export default Home;
