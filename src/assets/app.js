new Vue({
  el: '#app',
  data: {
    lastBuildDate: '',
    fetchingLastBuildDate: true,
  },
  created() {
    this.fetchLastBuildDate();
  },
  methods: {
    async fetchLastBuildDate() {
      this.fetchingLastBuildDate = true;
      try {
        let { data } = await axios.get('/api/builddate');
        this.lastBuildDate = data.pretty;
        this.fetchingLastBuildDate = false;
      } catch (err) { throw new Error(err); }
    },
  },
});
