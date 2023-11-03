import "./styles.css";

export const SearchPost = ({searchValue,setSearchValue}) =>{

  return(
    <div className="searchPosts">

      <h2>Search Value: {searchValue}</h2>
      <input 
      type="search" 
      className="searchPosts" 
      value={searchValue}
      placeholder={"Type Search Value"}
      onChange={(e)=> {
        setSearchValue(e.target.value)
      }}
      />
      
    </div>
  )
}