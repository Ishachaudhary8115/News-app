import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.articles) {
          setArticles(data.articles);
        } else {
          console.error("No articles found in the API response");
        }
      })
      .catch(error => console.error('Error:', error));
  }, [category]);

  return (
    <div className="bg-dark container-fluid">
      <div className="p-0 m-0">
        <marquee behavior="alternate-reverse" direction="right" scrollamount="10" >
          <h2 className="text-center text-light my-2" style={{ width: "120px" }}>
            Latest <span className="badge bg-danger">News</span>
          </h2>
        </marquee>
      </div>

      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))
      ) : (
        <p className="text-light">Loading...</p>
      )}
    </div>
  );
}

export default NewsBoard;
