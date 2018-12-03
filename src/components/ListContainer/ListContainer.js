import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class ListContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
            ListContainer
        </h4>
      </div>
    );
  }
}

ListContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
