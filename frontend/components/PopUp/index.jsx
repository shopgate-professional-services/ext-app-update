import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { HtmlSanitizer, Dialog } from '@shopgate/engage/components';
import connect from './connector';
import styles from './style';

/**
 * PopUp Component
 *
 * This component displays a modal popup with a headline, HTML content,
 * and buttons that link to the configured app store for iOS and Android.
 *
 * @component
 * @param {Function} props.historyPush - Navigation function for redirection
 * @param {Object} props.buttonStoreText - Contains button texts for iOS and Android
 * @param {string} props.headline - The main headline of the overlay
 * @param {string} props.htmlContent - The HTML content displayed in the popup
 * @param {boolean} props.isIos - Indicates whether the current device is an iOS device
 * @param {Object} props.storeLinks - Contains store links for iOS and Android
 *
 * @returns {JSX.Element|null}
 */
const PopUp = ({
  buttonDismissText,
  buttonStoreText,
  headline,
  historyPush,
  htmlContent,
  isIos,
  storeLinks,
}) => {
  const [showPopup, setShowPopup] = useState(true);

  const storeLink = isIos ? storeLinks.ios : storeLinks.android;
  const buttonStoreLabel = isIos ? buttonStoreText.ios : buttonStoreText.android;

  const handleConfirm = useCallback(() => {
    historyPush({
      pathname: storeLink,
      state: { target: '_blank' },
    });
    setShowPopup(false);
  }, [historyPush, storeLink]);

  const handleClose = useCallback(() => setShowPopup(false), []);

  return (
    showPopup ? (
      <Dialog
        onConfirm={handleConfirm}
        onDismiss={handleClose}
        modal={{
          title: headline,
          confirm: buttonStoreLabel,
          dismiss: buttonDismissText,
        }}
      >
        <HtmlSanitizer className={styles.sanitizer}>
          {htmlContent}
        </HtmlSanitizer>
      </Dialog>
    ) : null);
};

PopUp.propTypes = {
  historyPush: PropTypes.func.isRequired,
  buttonDismissText: PropTypes.string,
  buttonStoreText: PropTypes.shape(),
  headline: PropTypes.string,
  htmlContent: PropTypes.string,
  isIos: PropTypes.bool,
  storeLinks: PropTypes.shape(),
};

PopUp.defaultProps = {
  buttonDismissText: '',
  buttonStoreText: {},
  headline: '',
  htmlContent: '',
  isIos: true,
  storeLinks: {},
};

export default connect(PopUp);
