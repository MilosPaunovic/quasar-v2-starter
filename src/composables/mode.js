import { onMounted, ref } from 'vue';
import { Dark } from 'quasar';

const MODE_KEY = 'mode';
const LIGHT_MODE = 'light';
const DARK_MODE = 'dark';

export default function useMode() {
  const currentMode = ref();

  function getMode() {
    return localStorage.getItem(MODE_KEY);
  }

  function updateMode(mode) {
    currentMode.value = mode;
    Dark.set(mode === DARK_MODE);
    localStorage.setItem(MODE_KEY, mode);
  }

  function classes({ prefix, invert, colors = ['white', 'dark'] } = {}) {
    const light = prefix ? `${prefix}-${colors[0]}` : colors[0];
    const dark = prefix ? `${prefix}-${colors[1]}` : colors[1];

    if (invert) return Dark.isActive ? dark : light;
    return Dark.isActive ? light : dark;
  }

  onMounted(() => {
    updateMode(getMode() ?? LIGHT_MODE);
  });

  return { currentMode, updateMode, classes };
}
