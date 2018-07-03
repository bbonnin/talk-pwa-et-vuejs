<template>
  <div>
    <div class="title">
      {{ stats.name }}
    </div>
    <div>
      <button class="btn-refresh" @click.prevent="loadStats()" aria-label="refresh"><icon name="sync"></icon></button>
    </div>

    <div v-if="stats.data.length === 0" class="downasaur">
      <img src="../assets/downasaur.png">
    </div>

    <line-chart v-else
      id="stats"
      :data="stats.data"
      :xkey="stats.key"
      :ykeys="stats.series"
      :labels="stats.labels"
      :line-colors="colors"
      resize="true"
      grid="true"
      grid-text-weight="bold">
    </line-chart>
  </div>
</template>

<script>
/* eslint prefer-template: 0 */
import 'vue-awesome/icons/sync';
import Icon from 'vue-awesome/components/Icon';
import { LineChart } from 'vue-morris';

const QUERY_URL = 'http://localhost:3000/api/stats/random';
const COLORS = ['#42B8E0', '#33658A', '#F6AE2D', '#F26419', '#0E3A53'];

export default {
  name: 'stats',

  data() {
    return {
      stats: { data: [] },
      colors: [],
    };
  },

  components: { LineChart, Icon },

  beforeMount() {
    this.loadStats();
  },

  methods: {
    loadStats() {
      this.$http.get(QUERY_URL)
      .then((resp) => {
        this.colors = [];
        this.stats = resp.body;
        for (let i = 0; i < this.stats.data.length; i += 1) {
          this.colors.push(COLORS[i]);
        }
      }, (resp) => {
        // eslint-disable-next-line no-console
        console.log(resp);
        this.colors = [];
        this.stats = { data: [] };
      });
    },
  },
};
</script>

<style>
.title {
  font-size: xx-large;
}

.btn-refresh {
  margin-top: 10px;
  background-color: #fff;
  font-size: 16px;
  word-spacing: 1px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495E; /* #3b8070; */
  color: #35495E; /* #3b8070; */
  padding: 10px 30px;
}

.btn-refresh:hover {
  color: #fff;
  background-color: #35495E; /* #3b8070; */
}

.downasaur {
  margin-top: 20px;
}
</style>
