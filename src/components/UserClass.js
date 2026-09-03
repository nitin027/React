import React from "react";

export class UserClass extends React.Component {

    constructor(props){
        super(props)
        this.state={
            count:0
        }
        console.log('constructor render phase 1')
    }

    componentDidMount(){
        console.log('component called after dom is updated after reconciliation/diff algo process 2')
        // this.timer=setInterval(()=>{
        //     console.log('setInterval')
        // },2000)
    }
    componentDidUpdate(){
        console.log('component is re-render if there is any update in state variable this is updating phase after mouting phase')
    }
    componentWillUnmount(){
        console.log('component is not in the dome similar to ngondestroy in angular')
        //clearInterval(this.timer)
    }
  render() {
    const {name,email}=this.props
     console.log('render function call render phase 2')
    return (
      <div>
        <div>
          <h2>Name: {name}</h2>
          <h3>Location: Bhusawal</h3>
          <h4>Contact: {email}</h4>
          <button className="btn" onClick={()=>{
            
            this.setState({
                count:++this.state.count
            })
          }}>Counter</button><span>{this.state.count}</span>
        </div>
      </div>
    );
  }
}

// export default UserClass //this also works
