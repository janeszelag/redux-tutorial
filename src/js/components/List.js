import React from "react";
import { connect } from "react-redux";

//The List component receives the prop articles 
//which is a copy of the articles array we saw in the Redux state. It comes from the reducer.
const mapStateToProps = state => {
  return { articles: state.articles };
};

//This seems to be a functional component
const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>{article.title}</li>
    ))}
  </ul>
);
//List is the result of connecting the stateless component ConnectedList with the Redux store.
//Connects react component ConnectedList to the store with mapStateToProps
const List = connect(mapStateToProps)(ConnectedList);
//it does not modify connectedList but instead returns a new, wrapped component 

export default List;