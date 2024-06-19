import React from "react";
class LifeCycleEventClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.interval = null;
  }

  componentDidMount() {
    console.log("Starting interval")
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 5000);
  }
  componentWillUnmount() {
    console.log("Stopping interval")
    clearInterval(this.interval);
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default LifeCycleEventClass;
