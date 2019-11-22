<template>
      <TheFooter>
        <div>
          <!--footer-->
          <a href="#">Dal Elektrik</a>
          <span class="ml-1">&copy; 2019.</span>
        </div>
        <div class="ml-auto">
          <span class="mr-1">Powered by</span>
          <a href="#">Nader Alfakesh</a>
        </div>
      </TheFooter>
</template>
<script>
import { Footer as TheFooter } from '@coreui/vue'
export default {
  name: 'DefaultFooter',
  components: {
    TheFooter
  },
}
</script>
