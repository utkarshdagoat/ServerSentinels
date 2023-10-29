import moment from 'moment';

const dateString = '2023-10-28T21:33:37.744384Z';
const formattedDate = moment.utc(dateString).format('DD-MM-YYYY')