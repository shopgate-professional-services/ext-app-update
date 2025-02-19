import { connect } from 'react-redux';
import { historyPush } from '@shopgate/pwa-common/actions/router';

/**
 * Maps dispatch actions to component props.
 *
 * @param {Function} dispatch The Redux dispatch function.
 * @return {Object} The mapped dispatch actions.
 */
const mapDispatchToProps = {
  historyPush,
};

export default connect(null, mapDispatchToProps);
