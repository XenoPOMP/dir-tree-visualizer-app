import MatchMediaMock from 'vitest-matchmedia-mock';

import { injectMocks } from '@test/assets';

/**
 * Mocks stuff related to window.matchMedia.
 */
export const injectMatchMediaMock = () => {
  const matcher = new MatchMediaMock();

  injectMocks(() => {
    matcher.clear();
    return () => matcher.destroy();
  }, 'afterEach');
};
