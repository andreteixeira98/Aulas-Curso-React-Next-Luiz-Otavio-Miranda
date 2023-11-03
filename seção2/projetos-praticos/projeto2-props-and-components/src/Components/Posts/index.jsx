import { useState } from "react";
import { Button } from "../Button";
import { CardPost } from "../CardPost";
import { SearchPost } from '../SearchPost';

import "./styles.css";

export const Posts =({setState,posts, allPosts, page, postsPerPage})=>{
  const [nextPage,setNextPage] = useState(page+postsPerPage);
  const [searchValue,setSearchValue] = useState('');
 const loadMorePosts = () =>{
  const amountPages = allPosts.length;
  
  if(nextPage<=amountPages){
    setState({
      posts:allPosts.slice(nextPage,nextPage+postsPerPage)
    });
  
    setNextPage(nextPage+postsPerPage);
  }
  }

  
    const filteredPosts = 
      !!searchValue ? 
      posts.filter(post=>{
        return(post.title.toLowerCase().includes(searchValue.toLowerCase()))
      }) : posts
  return(
    <section className="posts">
    <SearchPost
      allPosts={allPosts} 
      posts={posts}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    /> 
    <div className="container">
    {
      filteredPosts.length > 0 ? (
        filteredPosts.map(post=>(<CardPost post={post}  key={post.id}/>))
      ) : (
        <p>Não há posts =(</p>
      )
    }
    </div>
    {!searchValue && (
      <Button text={"Load More Posts"} loadMorePosts={loadMorePosts}/>
    )}
  </section>
  )
};