import React, { PropTypes } from 'react';

export default class MDSpinner extends React.Component {
  static propTypes: {
    width: PropTypes.string,
    height: PropTypes.string,
    borderColor: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  show() {
    this.setState({
      show: true
    });
  }

  hide() {
    this.setState({
      show: false
    });
  }

  render() {
    const {show} = this.state;
    const mdStyles = {
      width: this.props.width,
      height: this.props.height,
      borderColor: this.props.borderColor
    };

    return (
      <div
        className='md-spinner'
        hideSpinner={this.hide}
        style={mdStyles}
        showSpinner={this.show}>
      </div>
    );
  }
};

MDSpinner.defaultProps = {
  width: '15px',
  height: '15px',
  borderColor: '#4285f4'
};
