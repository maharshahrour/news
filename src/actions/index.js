import axios from 'axios';
const KEY='7d50e46c66cb456ca2d3e8d6aa09ccef';

const RootURL=`https://newsapi.org/v2/everything`;
export const NEWS_SELECT = 'NEWS_SELECT';

export function fetchNews(word){
  const URL=`${RootURL}?q=${word}&apiKey=${KEY}`;
  const request=axios.get(URL);
  return{
    type:NEWS_SELECT,
    payload:request
  }
}
