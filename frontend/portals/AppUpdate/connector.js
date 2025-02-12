import { connect } from 'react-redux';
import { getClientInformation, isIos } from '@shopgate/pwa-common/selectors/client';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  appVersion: getClientInformation(state).appVersion,
  isIosDevice: isIos(state),
});

export default connect(mapStateToProps);
