import { allOf } from '../../utils/fns';

/**
 * Navigates to the specified URL.
 *
 * @param {string} url - The URL to navigate to.
 */
function navigate(url: string) {
  allOf({ values: [url], typeOf: ['string'] });

  window.location = url as string & Location;
  return window.location;
}

export default navigate;
