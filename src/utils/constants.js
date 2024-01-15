const TMDB_TOKEN = process.env.TMDB_BEARER_TOKEN;

export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const API_CONSTANTS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_TOKEN}`
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"