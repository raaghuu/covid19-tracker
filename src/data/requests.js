import axios from 'axios';
import parsers from './parsers';

async function stats() {
  const res = await axios.get(
    'https://api.covidtracking.com/v1/us/current.json'
  );

  return parsers.totStats(res.data);
}

export default {
  stats,
};
