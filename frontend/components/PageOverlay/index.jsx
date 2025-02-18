import React from 'react';
import PropTypes from 'prop-types';
import {
  HtmlSanitizer,
  Link,
  Button,
  Modal,
  Grid,
} from '@shopgate/engage/components';
import appConfig from '@shopgate/pwa-common/helpers/config';
import styles from './style';

/**
 * PageOverlay Component
 *
 * This component displays an overlay page with a headline, HTML content,
 * and app store buttons for iOS and Android devices.
 *
 * @param {Object} props.buttonStoreText - Contains button texts for iOS and Android
 * @param {boolean} props.showShopLogo - Indicates whether to show the shop logo
 * @param {string} props.headline - The main headline of the overlay page
 * @param {string} props.htmlContent - The HTML content displayed within the page
 * @param {boolean} props.isIos - Indicates whether the current device is an iOS device
 * @param {Object} props.storeLinks - Contains store links for iOS and Android
 *
 * @returns {JSX.Element}
 */
const PageOverlay = ({
  buttonStoreText,
  headline,
  htmlContent,
  isIos,
  shopLogoUrl,
  showShopLogo,
  storeLinks,
}) => {
  const storeLink = isIos ? storeLinks.ios : storeLinks.android;
  const buttonLabel = isIos ? buttonStoreText.ios : buttonStoreText.android;

  return (
    <Modal
      classes={{
        content: styles.modalContent,
        layout: styles.modalLayout,
        container: styles.modalContainer,
      }}
    >
      <Grid
        component="div"
        className={styles.container}
        role="alertdialog"
        aria-modal
        aria-labelledby="pageOverlayTitle"
        aria-describedby="pageOverlayDescription"
      >
        <Grid.Item component="div" className={styles.item}>
          {showShopLogo && (<img
            className={styles.image}
            src={shopLogoUrl || appConfig.logo || appConfig.logoFallback}
            alt={appConfig.shopName}
          />)}
          <div className={styles.headline} id="pageOverlayTitle">{headline}</div>
        </Grid.Item>
        <Grid.Item component="div" className={styles.item}>
          <HtmlSanitizer className={styles.sanitizer} id="pageOverlayDescription">
            {htmlContent}
          </HtmlSanitizer>
        </Grid.Item>
        {storeLink && buttonLabel && (
          <Grid.Item component="div" className={styles.item}>
            <Button>
              <Link className={styles.button} href={storeLink} state={{ target: '_blank' }}>
                {buttonLabel}
              </Link>
            </Button>
          </Grid.Item>
        )}
      </Grid>
    </Modal>
  );
};

PageOverlay.propTypes = {
  buttonStoreText: PropTypes.shape(),
  headline: PropTypes.string,
  htmlContent: PropTypes.string,
  isIos: PropTypes.bool,
  shopLogoUrl: PropTypes.string,
  showShopLogo: PropTypes.bool,
  storeLinks: PropTypes.shape(),
};

PageOverlay.defaultProps = {
  buttonStoreText: {},
  headline: '',
  htmlContent: '',
  isIos: true,
  shopLogoUrl: '',
  showShopLogo: true,
  storeLinks: {},
};

export default PageOverlay;
