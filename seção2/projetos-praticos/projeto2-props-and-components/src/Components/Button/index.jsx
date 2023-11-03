import "./styles.css";
import { Component } from "react";

export class Button extends Component{


  render(){
    const {text, loadMorePosts} = this.props;
    
    return(
      <button
        onClick={loadMorePosts}
      >
        {text}
      </button>
    );
  }
}