<script>
import { defineComponent } from 'vue';
import { QBtn } from 'quasar';

const { props, emits } = QBtn;

export default defineComponent({
  name: 'Button',

  props: {
    ...props,
    filled: { type: Boolean, default: true },
    unelevated: { type: Boolean, default: true },
    color: { type: String, default: 'primary' },
    padding: { type: String, default: props.icon ? 'xs md' : 'xs xl' },
  },

  emits,

  setup: QBtn.setup,
});
</script>
