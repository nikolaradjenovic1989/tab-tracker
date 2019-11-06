<template>
  <panel title="Lyrics">
    <v-textarea class="textarea"
      label="Lyrics"
      readonly
      auto-grow
      v-model="song.lyrics"
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
  border: none;
  height: 400px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
