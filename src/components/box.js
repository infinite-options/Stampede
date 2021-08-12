import React, {Component} from "react"
import Ably from "./Ably"
import "./box.css"
import {render} from 'react-dom'

class RandomBox  extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {random:0};
  }
  handleClick() {
      const min = 1;
      const max = 100;
      const rand = min + Math.random() * (max-min);
      const num = {rand};
      const channel = Ably.channels.get("num ")
      channel.publish("add_num", num )
      this.setState({random:this.state.random + rand})
  }
  render() {
    return (
      <div className="firstBox">
          <button onClick={this.handleClick.bind(this)}>Click for Random Number</button>
            <div>The number is: {this.state.random}</div>
      </div>
    )
  }
  addComment(e) {
    // Prevent the default behaviour of form submit
    e.preventDefault()
    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim()
    const name = e.target.elements.name.value.trim()
    // Get the current time.
    const timestamp = Date.now()
    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { name, comment, timestamp }
      // Publish comment
      const channel = Ably.channels.get("comments")
      channel.publish("add_comment", commentObject, (err) => {
        if (err) {
          console.log("Unable to publish message; err = " + err.message)
        }
      })
      // Clear input fields
      e.target.elements.comment.value = ""
    }
  }
}

export default RandomBox
