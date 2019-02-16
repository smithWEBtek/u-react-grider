import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    console.log("[StreamEdit]formValues: ", formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return (<div>Loading ...</div>)
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          // initialValues={this.props.stream}   // full object, including TMI:  userId and id
          // initialValues={{ title: this.props.stream.title, description: this.props.stream.description }} 
          // what if you have many fields, the above would be unwieldy, so lodash:
          initialValues={_.pick(this.props.stream, 'title', 'description')}
        />
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
