import { css } from 'glamor';
import { themeColors } from '@shopgate/pwa-common/helpers/config';

const modalContent = css({
  width: '100%',
}).toString();

const modalLayout = css({
  backgroundColor: themeColors.lightOverlay,
}).toString();

const modalContainer = css({
  zIndex: 2100,
}).toString();

const container = css({
  backgroundColor: themeColors.lightOverlay,
  padding: '30px',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
}).toString();

const item = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}).toString();

const headline = css({
  fontWeight: 'bold',
  fontSize: '1.25rem',
  paddingTop: '20px',
  paddingBottom: '20px',
}).toString();

const image = css({
  width: '60%',
  maxWidth: 400,
}).toString();

const sanitizer = css({
  paddingBottom: '20px',
}).toString();

const button = css({
  textAlign: 'center',
}).toString();

export default {
  modalContent,
  modalLayout,
  modalContainer,
  container,
  item,
  headline,
  image,
  sanitizer,
  button,
};
