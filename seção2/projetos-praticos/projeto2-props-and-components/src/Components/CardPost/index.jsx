
import "./styles.css";

export const CardPost = ({post}) =>{
  return(
    <div className="card-post" key={post.id}>
    <img src={post.cover} alt={post.title} />
    <div className="content">
      <h2 className="title">{post.title} &nbsp; {post.id}</h2> <br />
      <p className="body">{post.body}</p>
    </div>
  </div>
  )
}