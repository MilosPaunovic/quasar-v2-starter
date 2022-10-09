import Form from 'components/shared/Form.vue';
import Input from 'components/shared/Input.vue';
import Button from 'components/shared/Button.vue';

export default ({ app }) => {
  app
    .component('Form', Form)
    .component('Input', Input)
    .component('Button', Button);
};
