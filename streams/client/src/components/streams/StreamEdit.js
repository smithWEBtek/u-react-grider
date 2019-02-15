import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamEdit extends React.Component {

  componentDidMount() {
    console.clear()
    this.props.fetchStreams()
  }

  render() {
    let renderEditStream = "Stream not found ... "

    console.log("redux state stream: ", this.props.stream);

    if (this.props.stream) {
      renderEditStream = (
        <div>
          <h1>Title: {this.props.stream.title}</h1>
          <p>Description: {this.props.stream.description}</p>
        </div>
      )
    };

    return (
      < div >
        {renderEditStream}
      </div >
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamEdit);
