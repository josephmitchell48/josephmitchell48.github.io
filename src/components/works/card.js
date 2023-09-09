//credit - https://codepen.io/elliempatten/pen/KxmoGR
import React from 'react';
import "./card.css";

export class BlogCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { flipped: false };
        this.flip = this.flip.bind(this);
      }
    
      flip = () => {
        this.setState({ flipped: !this.state.flipped });
      }

    render() {
      return (
        <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
          <Front title={this.props.title} image={this.props.image} date = {this.props.date} company = {this.props.company}/>
          <Back description={this.props.description} />
        </div>
      )
    }
}

class Front extends React.Component {
    render() {
      return (
        <div className="front">
          <ImageArea company = {this.props.company} image={this.props.image} title={this.props.title} />
          <MainArea title={this.props.title} date = {this.props.date}/>
        </div>
      )
    }
}

class ImageArea extends React.Component {
    render() {
      return (
        <div className="image-container">
          <h1 className="company">{this.props.company}</h1>
          <img className="card-image" src={this.props.image} alt={this.props.alt}></img>
          <h1 className="title">{this.props.title}</h1>
        </div>
      )
    }
}

class Back extends React.Component {
    render() {
        return (
            <div className="back">
                <ul>
                    {this.props.description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

class MainArea extends React.Component {
render() {
    return (
        <div className="main-area">
            <p className="date">{this.props.date}</p>
            <p className="read-more">Hover to read more...</p>
        </div>
        )
    }
}