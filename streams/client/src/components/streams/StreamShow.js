import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';


class StreamShow extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    const stream = this.props.stream
    console.log("stream: ", stream);
    return (
      <div>
        <h3>{stream.title}</h3>
        <p>{stream.description}</p>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
