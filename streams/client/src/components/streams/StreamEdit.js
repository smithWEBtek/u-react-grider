import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    let renderEditStream = "Loading ... "
    console.log("this.props.stream: ", this.props.stream);

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

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
