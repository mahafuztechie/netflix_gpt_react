const TMDB_TOKEN = process.env.TMDB_BEARER_TOKEN;

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const API_CONSTANTS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODVhODk4MTdkY2Q0MTI0YzI3NTEyZmVkZWVmNWQyYyIsInN1YiI6IjYwZWQ3OWM3MTQwYmFkMDA0NjI0ODczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OT9x16zOHhvDLibxhcEU81MZ7Erk6YbK47ofyP2mUh0`
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

  export const SUPPORTED_LANGUAGES = [{
    identifier: "en", name: "English"
  },
  {
    identifier: "hindi", name: "Hindi"
  },
  {
    identifier: "spanish", name: "Spanish"
  }]