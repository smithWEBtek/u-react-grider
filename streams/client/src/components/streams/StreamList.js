import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {


  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    const streams = this.props.streams
    let renderList = '<div>Fetching streams ....</div>'
    renderList = streams.map((stream) => {
      return (
        <div key={stream.id} className="item">
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{renderList}</div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams)
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
