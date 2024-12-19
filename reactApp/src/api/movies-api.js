export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ed60a06abc1db5c7350061663d269696&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };