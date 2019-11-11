<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :host="'https://www.youtube.com'"
      :player-width="700"
      :player-height="323">
    </youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
