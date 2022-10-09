<script>
import { defineComponent } from 'vue';
import { QForm } from 'quasar';

const { props, emits } = QForm;

export default defineComponent({
  name: 'Form',

  props: {
    ...props,
    autocorrect: { type: String, default: 'off' },
    autocapitalize: { type: String, default: 'off' },
    autocomplete: { type: String, default: 'off' },
    spellcheck: { type: String, default: 'off' },
  },

  emits,

  setup: QForm.setup,
});
</script>
