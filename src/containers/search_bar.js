import React ,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import {fetchNews} from '../actions/index';
import { connect } from "react-redux";

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={news_word:''};
    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({news_word :event.target.value});
  }
  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchNews(this.state.news_word);
    this.setState({news_word:''});
  }
  render(){
    return(
      <form className="input-group" style={{ paddingTop: '3%'}} onSubmit={this.onFormSubmit}>
          <input
          value={this.state.news_word}
          onChange={this.onInputChange}
          placeholder="Get a news for anything"
          style={{width:'100%' ,height: '38px'}}
        />
          <span className="input-group-btn">
             <button type="submit" className="btn btn-secondary" >Submit</button>
          </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchNews},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);
