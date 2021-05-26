<template>
  <div class="nav grid-cols-4 grid w-full">
    <div class="flex place-content-center flex-wrap-reverse icon text-xl md:text-3xl lg:text-4xl" v-bind:class="isActive('home') ? 'active' : '' ">
      <NuxtLink  to="/">
        <font-awesome-icon icon="home" class="text-green-600" v-bind:class="isActive('home') ? 'active-icon' : '' "/>
      </NuxtLink>
    </div>
    <div class="flex place-content-center flex-wrap-reverse icon text-xl md:text-3xl lg:text-4xl" v-bind:class="isActive('chat') ? 'active' : '' ">
      <NuxtLink  to="/friends">
        <font-awesome-icon icon="comment" class="text-green-600" v-bind:class="isActive('chat') ? 'active-icon' : '' "/>
      </NuxtLink>
    </div>
    <div class="flex place-content-center flex-wrap-reverse icon text-xl md:text-3xl lg:text-4xl" v-bind:class="isActive('gallery') ? 'active' : '' ">
      <NuxtLink  to="/gallery">
        <font-awesome-icon icon="image" class="text-green-600" v-bind:class="isActive('gallery') ? 'active-icon' : '' "/>
      </NuxtLink>
    </div>
    <div class="flex place-content-center flex-wrap-reverse icon text-xl md:text-3xl lg:text-4xl" v-bind:class="isActive('map') ? 'active' : '' ">
      <NuxtLink to="/map">
        <font-awesome-icon icon="map-marker-alt" class="text-green-600" v-bind:class="isActive('map') ? 'active-icon' : '' "/>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: 'none'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    isActive(link) {
      return link === this.active;
    }
  }
}
</script>

<style scoped>

.nav {
  position: fixed;
  bottom: 0;
  height: 8vh;
  background-color: rgba(255, 255, 255, 0.8);
}

.icon {
  margin: 0 auto;
}

.active {
  background: #38a169;
  border-radius: 50%;
  width: 1.75em;
  height: 1.75em;
  align-self: center;

}

.active-icon {
  color: white;
}

</style>
