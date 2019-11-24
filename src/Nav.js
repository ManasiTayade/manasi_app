import React, { Component } from 'react';
import './Nav.css';
import axios from 'axios';

class Nav extends Component {

    state = {
        newsArticles: [0],

    }
    intervalID;
    componentDidMount = () => {
        this.getArticles();
    }
    componentWillUnmount() {
       
        clearTimeout(this.intervalID);
    }
    getArticles = () => {
        console.log("Getting Articles");
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-24&sortBy=publishedAt&apiKey=0fce3301ebcc40528edf189732c57041')
            .then(
                res => {
                    console.log(res.data.articles);
                    this.setState({ newsArticles: this.state.newsArticles.concat(res.data.articles).splice(1, 9) });
                    this.intervalID = setTimeout(this.getArticles.bind(this), 5000);
                }
            )
            
    }


    render() {
        return (
            <div className="Nav">
                <h1>News Headline</h1>
                {this.state.newsArticles.map((article, i) =>
                    <div>
                        <p>{i + 1}) {article.title}</p>
                    </div>
                )}

            </div>



        )
    }
}

export default Nav;