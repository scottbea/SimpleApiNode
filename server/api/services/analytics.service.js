let id = 0;
const data = [
    { id: id++, name: 'data 0' },
    { id: id++, name: 'data 1' },
    { id: id++, name: 'data 2' }
];

export class AnalyticsService {
  all() {
    return Promise.resolve(data);
  }
}

export default new AnalyticsService();