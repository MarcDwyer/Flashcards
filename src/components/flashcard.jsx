import React, { Component } from 'react'
import Nav from './nav'
import { data } from '../data/questions'

class Flashcard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            isClicked: false

        }
    }
    componentDidMount() {
        console.log(`Total questions: ${data.length}`)
       const id = this.props.match.params.id ? parseInt(this.props.match.params.id) : null
       
         if (this.props.match.params.id) {
            if (id === 0) {
               this.setState({index: id}, () => {
                   this.props.history.push("/1")
               })
               return
           } else if (!data[id]) {
               console.log('please stop trying to break my spaghetti code')
               this.setState({index: 0}, () => {
                   this.props.history.push("/1")
               })
               return
           } else if (data[id]) {
               this.setState({index: id - 1})
           }
       } else {
        this.props.history.push('/1')
       }
    }
    componentDidUpdate(prevProps, prevState) {
        const id = parseInt(this.props.match.params.id)
        const { index } = this.state
      if (prevState.index !== this.state.index) {
            this.props.history.push(`/${this.state.index + 1}`)
        } else if (id - 1 !== this.state.index && prevState.index) {
            this.setState({index: id - 1, isClicked: false})
        }
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    {this.renderCard()}
                </div>
            </div>
        )
    }
    renderCard = () => {
        const { index, isClicked } = this.state
        const question = data[index]
        return (
            <div className="carder">
            <h5>{`Question #${index + 1}`}</h5>
                <div className="content">
                    <span className="cardtitle ml-2 mr-2">{question.question}</span>
                    {isClicked ? <span className="ml-2 mr-2">{question.answer}</span> : ''}
                </div>
                <button type="button" className="btn btn-success" onClick={() => this.setState({ isClicked: !isClicked })}>{isClicked ? 'Hide answer' : 'Show answer'}</button>
                <div className="navigator">
                    <button className="btn ml-2" onClick={() => {
                        if (!data[index - 1]) {
                            this.setState({ index: data.length - 1, isClicked: false}, () => {
                              this.props.history.push(`/${data.length}`)  
                            })
                            return
                        }
                        this.setState({ index: index - 1 , isClicked: false})
                    }}>Back</button>
                    <button className="btn ml-4" onClick={() => {
                        if (!data[this.state.index + 1]) {
                            this.setState({ index: 0, isClicked: false }, () => {
                                this.props.history.push(`/${this.state.index + 1}`)
                            })
                            return
                        }
                        this.setState({ index: index + 1, isClicked: false })
                    }}>Next</button>
                </div>
            </div>
        )
    }
}
export default Flashcard