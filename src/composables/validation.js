export default function useValidation() {
  function required(value, field) {
    return !!value || `* ${field} field is required.`;
  }

  function email(value) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value) || 'Email format is not valid.';
  }

  return { required, email };
}
