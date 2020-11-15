import format from './format';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

function totStats(data) {
  const [statsRaw] = data;
  dayjs.extend(localizedFormat);

  return {
    cases: format.number(statsRaw.positive),
    deaths: format.number(statsRaw.death),
    recovered: format.number(statsRaw.recovered),
    ventilators: format.number(statsRaw.onVentilatorCurrently),
    hospitalized: format.number(statsRaw.hospitalized),
    icu: format.number(statsRaw.inIcuCurrently),
    tested: format.number(statsRaw.totalTestResults),
    updated: dayjs(statsRaw.lastModified).format('LLLL'),
  };
}

export default {
  totStats,
};
