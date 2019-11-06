<template>
  <panel title="Tab" class="mt-2">
    <v-textarea class="textarea"
      label="Tab"
      readonly
      auto-grow
      v-model="song.tab"
    ></v-textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
.textarea {
  width: 100%;
  font-family: monospace;
  font-size: 15px;
  border: none;
  height: 400px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
