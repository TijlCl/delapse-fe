<template>
  <div>
    <div class="chart-wrapper">
      <vue-apex-charts type="donut" :options="chartOptions" :series="series"></vue-apex-charts>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts
  },
  props: {
    checkIn: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'donut',
        },
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 1
        },
        labels: ['Happy', 'Loved', 'Excited', 'Relaxed', 'Tired', 'Bored', 'Angry', 'Stressed', 'Sad'],
        // colors:['#A9F54F', '#1BE7FF', '#E4FF1A', '#6EEB83', '#FFB800', '#FF880A', '#FF5714', '#FF6629', '#FF880A'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: .8,
            opacityTo: .8,
            stops: [0, 100],
            colorStops: []
          }
        },
        theme: {
          mode: 'light',
          monochrome: {
            enabled: true,
            color: '#19E716',
            shadeTo: 'dark',
            shadeIntensity: .7
          },
        },
        stroke: {
          show: false,
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return opts.w.config.labels[opts.seriesIndex]
          },
          offsetY: 100
        }
      },
      // series: [44, 55, 13, 43, 22, 58, 20, 90, 33],
    }
  },
  computed: {
    moodCounts() {
      return this.$store.getters['checkIns/moodCounts'];
    },
    series() {
      return Object.values(this.moodCounts);
    }
  },
  methods: {
  }
}
</script>

<style scoped>

.chart-wrapper {
  width: 80vw;
  margin: 0 auto;
  /*background: rgb(12,98,54);*/
  /*background: linear-gradient(90deg, rgba(12,98,54,.9) 0%, rgba(15,145,125,.9) 46%, rgba(0,161,255,.7) 100%);*/
  border-radius: 10px;
  padding: 10px;
}

</style>
