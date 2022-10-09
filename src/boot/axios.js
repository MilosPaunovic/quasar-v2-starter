import { Notify } from 'quasar';
import axios from 'axios';

const $axios = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

const showErrorNotification = ({ message, caption }) => Notify.create({
  message: message || 'Ooooops! An error occured',
  caption: caption || 'Contact support for more information',
  color: 'negative',
});

export default () => {
  $axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status, statusText } = error.response;
      const options = process.env.DEBUGGING ? { message: `${status} ${statusText}` } : {};

      if (![400, 401].includes(status)) showErrorNotification(options);

      return error;
    },
  );
};

export { $axios };
