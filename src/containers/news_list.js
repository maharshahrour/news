import React , { Component } from 'react';
import { connect } from 'react-redux';


class NewsList extends Component {

renderNews(data){
    const auth=data.articles.map(news => news.author);
    const title=data.articles.map(news =>news.title);
    const content=data.articles.map(news =>news.content);
    const description=data.articles.map(news =>news.description);

  return (
      <tr key={data.totalResults}>
      <td>{auth}</td> <br/><br/>
      <td>{title}</td><br/><br/>
      <td>{content}</td><br/><br/>
      <td>{description}</td>
      </tr>

  );
}


  render(){
    return(
<table className="table table-hover" >
  <thead>
   <tr>
     <th>Author</th>
     <th>Title</th>
     <th>Content</th>
     <th>Description</th>

   </tr>
  </thead>
  <tbody>
   {this.props.news.map(this.renderNews)}
  </tbody>

</table>
  );
  }
}

function mapStateToProps({news}){
  console.log({news});
  return {news};
}

export default connect(mapStateToProps)(NewsList);
