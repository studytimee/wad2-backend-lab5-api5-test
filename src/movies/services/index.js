import axios from 'axios';
import Account from '../entities/Accounts';


export default {
    getMovie: async (movieId) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
          );
          return response.data;
    },
    find: async (query) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
          );
          return response.data;
    },

    updateAccount: async  (id, firstName, lastName, email, password, {accountsRepository}) => {
      const account = new Account(undefined, firstName, lastName, email, password);
      return accountsRepository.merge(account);
    },

    findUpcoming: async () => {
      const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false`
        );
        return response.data;
  }

  };