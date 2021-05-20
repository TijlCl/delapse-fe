<template>
  <div class="min-h-screen">
    <div id="map"></div>
    <bottom-nav active="map"/>
  </div>
</template>

<script>
const mapboxgl = require('mapbox-gl');

export default {
  data() {
    return {
      position: [4.348358870413222,50.888056606737166],
      map: null
    }
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css',
      },
    ],
  },

  async mounted() {

    // initialize map
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1Ijoic2VwcGVjIiwiYSI6ImNraHZyYjFxdTBodGwydm8yNjU1NXY0cHgifQ.h3-kkvjsMkTrjB701I-VCQ',
      container: 'map', // <div id="map"></div>
      style: 'mapbox://styles/mapbox/streets-v9', // default style
      center: this.position, // starting position as [lng, lat]
      zoom: 9
    });

    // add user location to map
    var geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });

    // Add the control to the map.
    this.map.addControl(geolocate);

    navigator.permissions.query({name:'geolocation'}).then(permissionStatus => {
      if (permissionStatus.state === 'granted'){
        this.markRehabCenters();
      }
      permissionStatus.onchange = () => {
        this.markRehabCenters();
      };
    });

    // ask for location on load
    this.map.on('load', function() {
      geolocate.trigger();
    });

    geolocate.on('geolocate', e => {
      this.position = [e.coords.longitude, e.coords.latitude];
    });

  },

  methods: {
    markRehabCenters() {
      this.$axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/Rehab.json?types=poi&proximity=${this.position.join()}&limit=20&access_token=${this.$config.mapboxAccessToken}`).then(res => {
        res.data.features.forEach(marker => {

          // make a marker for each feature and add to the map
          new mapboxgl.Marker()
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(marker.place_name))
            .addTo(this.map);
        });
      });
    }
  }



}
</script>

<style scoped>

#map{
  height: 92vh;
}

</style>
