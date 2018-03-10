import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';


var fakeChatData = {
  channel: "Sodapoppin",
  messages: [{username: "my_twitch_name_1", text: "Kappa 123"}, {username: "my_twitch_name_1", text: "HeyGuys whats up"}, {username: "my_twitch_name_1", text: "omg best chat"}, {username: "my_twitch_name_1", text: "this chat is toxic"}]
}

var fakeAvailableLogs = {
  channels: ["Sodapoppin", "Forsen", "AtheneLive"]
}

class Navbar extends Component {
  render(){
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary my-4">
        <span className="navbar-brand">{this.props.channel}</span>
        <div class="navbar-nav">
          <span class="nav-item nav-link" href="#">first link</span>
          <span class="nav-item nav-link" href="#">second link</span>
        </div>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-light my-2 my-sm-0">Search</button>
        </form>
      </nav>
    );
  }
}

class Chat extends Component {
  render(){
    return(
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Message</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.messages &&
            this.props.messages.map((msg)=>
              <TwitchMessage message={msg}/>
            )
          }
        </tbody>
      </table>
    )
  }
}

class TwitchMessage extends Component {
  render(){
    return (
      <tr>
        <td className="text-secondary">{this.props.message.username}</td>
        <td className="text-primary">{this.props.message.text}</td>
        <td className="text-secondary">timestamp</td>
      </tr>
    );
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      availableLogs: {},
      chatData: {}
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      for (var i = 1; i <= 30; i++) {
        fakeChatData.messages.push({username: "xx_crazy_spammer_dude_xx", text:"muhahahahahahahhahahahahahhahahahahahahhahahahahahahahahahahha im a spammer " + i})
      }
      this.setState({
        availableLogs: fakeAvailableLogs,
        chatData: fakeChatData
      })
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar channel={this.state.chatData.channel ? this.state.chatData.channel : "loading"}/>
          <Chat messages={this.state.chatData.messages}/>

        </div>
      </div>
    );
  }
}

export default App;
