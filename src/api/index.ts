const apiKey: string | undefined = process.env.REACT_APP_API_KEY;
const apiUrl: string = `http://www.omdbapi.com?apiKey=${apiKey}`;

const searchMovies = async (query: string) => {
  try {
    const response = await fetch(encodeURI(`${apiUrl}&s=${query}`));
    return response.json();
  } catch(e) {
    console.error(e);
  }
}

const getMovieById = async (id: string) => {
  try {
    const response = await fetch(encodeURI(`${apiUrl}&i=${id}`));
    return response.json();
  } catch(e) {
    console.error(e);
  }
}

export {
  searchMovies,
  getMovieById,
}
