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
        if (this.props.match.params.id > data.length || !data[parseInt(this.props.match.params.id)]) {
            this.setState({index: 0}, () => {
                this.props.history.push("/1")
            })
            return
        }
        if (this.props.match.params.id) {
            this.setState({index: parseInt(this.props.match.params.id) - 1})
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const id = parseInt(this.props.match.params.id)
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
                    <span className="cardtitle">{question.question}</span>
                    {isClicked ? <span className="ml-2 mr-2">{question.answer}</span> : ''}
                </div>
                <button type="button" className="btn btn-success" onClick={() => this.setState({ isClicked: !isClicked })}>{isClicked ? 'Hide answer' : 'Show answer'}</button>
                <div className="navigator">
                    <button className="btn ml-2" onClick={() => {
                        if (index === 0) return
                        this.setState({ index: index - 1 , isClicked: false})
                    }}>Back</button>
                    <button className="btn ml-4" onClick={() => {
                        this.setState({ index: index + 1, isClicked: false })
                    }}>Next</button>
                </div>
            </div>
        )
    }
}
export default Flashcard