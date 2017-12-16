import React, { Component } from 'react';
import {Row, Col, CenterCol} from './Grid';

const characters = [ 
    'bob',
    'calvin',
    'darryl',
    'felix',
    'gene',
    'hugo',
    'jimmyjr',
    'jimmysr',
    'linda',
    'louise',
    'mort',
    'ollieandy',
    'ron',
    'teddy',
    'tina',
]

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array
}

export const Card = class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }
    
    handleClick = (event) => {
        if(this.state.clicked){
            this.props.lose();
        } else {
            console.log(this.props.name)
            this.props.update(this.props.name)
        }
        this.setState({ clicked: true })
    }

    render(){
        return <img className="card-img-top" src={'/img/'+this.props.name+'.jpg'} alt={this.props.name} onClick={this.handleClick}></img>
    }
}


export const CardDeck = class CardDeck extends Component {
    state = { 
        lastclick: '',
        score: 0
    }

    update = (name) => {
        this.setState({
            lastclick: name,
            score: this.state.score + 1
        })

        if(this.state.score >= characters.length){

        }
    }

    lose = () => {
        window.location.reload();
    }

    render(){ 
        if(this.state.score >= characters.length){
            return (
                <div>
                    <h1>Congratulations!</h1><br/>
                    <a href="/">Play again</a><br/>
                    <img src="/img/celebrate.gif" alt="celebrate"/>
                    
                </div>
            )
        } else {
            return ([
                <Row className="score">
                    <Col size='6'><h1>Last clicked: {this.state.lastclick}</h1></Col>
                    <Col size='6'><h1>Score: {this.state.score}</h1></Col>
                </Row>,
                <Row>
                    {shuffle(characters).map((name, index) => 
                            <Card key={name} name={name} update={this.update} lose={this.lose}/>
                    )}
                </Row>
            ])
        }
    }
}
