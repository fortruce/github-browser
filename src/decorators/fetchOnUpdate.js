import React, { PropTypes } from 'react';
import shallowEqualScalar from 'redux/lib/utils/shallowEqualScalar';
import assign from 'object-assign';

function mapParams (keys, params) {
  return keys.reduce((acc, key) => {
    return assign({}, acc, { [key]: params[key] })
  }, {});
}

export default function fetchOnUpdate(keys, fn) {
  return DecoratedComponent =>
  class FetchOnUpdateDecorator extends React.Component {
    static PropTypes = {
      actions: PropTypes.object.isRequired
    }

    componentWillMount() {
      fn(mapParams(keys, this.props.params), this.props.actions);
    }

    componentDidUpdate(prevProps) {
      const params = mapParams(keys, this.props.params);
      const prevParams = mapParams(keys, prevProps.params);

      if (!shallowEqualScalar(params, prevParams))
        fn(params, this.props.actions)
    }

    render() {
      return (
        <DecoratedComponent {...this.props} />
      );
    }
  }
}