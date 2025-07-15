/**
 * Returns the full path to an image located in the public/assets directory.
 * 
 * @param {string} path - Relative path inside the /public/assets folder (e.g., "nav/menuIcon.png")
 * @returns {string} - Full path to be used in <img src=... />
 */
export const getImageUrl = (path) => {
    return `/assets/${path}`;
  };
  