<template>
  <div class="p-3 bg-blue-200">
    <h1 class="text-center mb-4">Component Library</h1>
    <ChallengeCard class="mb-4" img="cake" title="Bake a cake" caption="Search a recipe for a cake and try to make it.
Once you have completed the challenge you can upload a photo here."/>

    <Button class="mb-4" title="Login" color="#1BA711"/>
    <InputField v-model="input" class="mb-4" placeholder="Username" icon="home" rules="required"/>
<!--    <BackgroundPage img="night-sky" alt="image of tree in the night sky."/>-->


  </div>
</template>

<script>
export default {
  // page properties go here
  data() {
    return {
      input: null
    }
  },
  mounted() {
    Echo.private("comment").listen(".event", e => {
      console.log('test');
    });
  }
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
