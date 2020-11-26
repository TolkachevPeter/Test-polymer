'use strict';

const e = React.createElement;

class ColorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  onChangeHandler= e => {
    this.setState({
      color: e.target.value
    })
  }

  render() {
    const styleObj = {
      background: this.state.color
    }

      return (
          <div style={styleObj} className="App">
            <input 
            onChange={this.onChangeHandler}
            value={this.state.color}
            type="text" />
          </div>
      );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(ColorInput), domContainer);