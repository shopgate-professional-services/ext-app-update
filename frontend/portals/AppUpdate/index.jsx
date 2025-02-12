import React from 'react';
import PropTypes from 'prop-types';
import PageOverlay from '../../components/PageOverlay';
import PopUp from '../../components/PopUp';
import connect from './connector';
import {
  popup,
  fullPageOverlay,
  storeLinks,
  buttonStoreText,
  minRequiredAppVersion,
} from '../../config';

/**
 * Compares two version strings to determine if the current app version is lower
 * than the required version.
 *
 * @param {*} deviceVersion - The version of the app running on the device.
 * @param {*} minVersion - The minimum required version before triggering an update.
 * @returns {boolean}
 */
const isVersionLower = (deviceVersion, minVersion) =>
  deviceVersion.localeCompare(minVersion, undefined, { numeric: true }) < 0;

/**
 * AppUpdate Component
 *
 * Displays a popup or full-page overlay if the app version is lower than the required version.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.appVersion - The current version of the app running on the device.
 * @param {boolean} props.isIosDevice - A flag indicating if the device is iOS or Android.
 * @returns {JSX.Element|null}
 */
const AppUpdate = ({ appVersion, isIosDevice }) => {
  const minVersion = isIosDevice
    ? minRequiredAppVersion?.ios || null
    : minRequiredAppVersion?.android || null;

  if (!minVersion || !isVersionLower(appVersion, minVersion)) return null;

  if (popup.enabled) {
    return (
      <PopUp
        buttonDismissText={popup.buttonDismissText}
        buttonStoreText={buttonStoreText}
        headline={popup.headline}
        htmlContent={popup.htmlContent}
        isIos={isIosDevice}
        storeLinks={storeLinks}
      />
    );
  }

  if (fullPageOverlay.enabled) {
    return (
      <PageOverlay
        buttonStoreText={buttonStoreText}
        shopLogoUrl={fullPageOverlay.shopLogoUrl}
        showShopLogo={fullPageOverlay.showShopLogo}
        headline={fullPageOverlay.headline}
        htmlContent={fullPageOverlay.htmlContent}
        isIos={isIosDevice}
        storeLinks={storeLinks}
      />
    );
  }

  return null;
};

AppUpdate.propTypes = {
  appVersion: PropTypes.string,
  isIosDevice: PropTypes.bool,
};

AppUpdate.defaultProps = {
  appVersion: '',
  isIosDevice: false,
};

export default connect(AppUpdate);
