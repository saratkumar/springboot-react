

const e = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color:props.color };
  }

  render() {
 
    return e(
      'button',
      {style: {color: this.state.color} },
      'Clear'
    );
  }
}