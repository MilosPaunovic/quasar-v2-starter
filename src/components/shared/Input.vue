<script>
import { defineComponent } from 'vue';
import { QInput } from 'quasar';

const { props, emits } = QInput;

export default defineComponent({
  name: 'Input',

  props: {
    ...props,
    lazyRules: { type: Boolean, default: true },
    outlined: { type: Boolean, default: true },
    hideBottomSpace: { type: Boolean, default: true },
    noErrorIcon: { type: Boolean, default: true },
    color: { type: String, default: 'primary' },
  },

  emits,

  setup: QInput.setup,
});
</script>
