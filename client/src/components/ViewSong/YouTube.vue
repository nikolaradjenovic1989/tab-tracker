<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="700"
      :player-height="323">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
