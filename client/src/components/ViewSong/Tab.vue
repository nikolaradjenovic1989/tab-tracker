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
export default {
  props: [
    'song'
  ]
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
