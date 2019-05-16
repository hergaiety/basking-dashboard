new Vue({
  el: '#app',
  data: {
    fetchingLastBuildDate: true,
    lastBuildDate: '',

    fetchingDiskSpace: '',
    diskSize: '',
    diskUsed: '',
    diskCapacity: '',
  },
  created() {
    this.fetchLastBuildDate();
    this.fetchDiskSpace();
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
    async fetchDiskSpace() {
      this.fetchingDiskSpace = true;
      try {
        let { data } = await axios.get('/api/diskspace');
        this.diskSize = data.size;
        this.diskUsed = data.used;
        this.diskCapacity = data.capacity;
        this.fetchingDiskSpace = false;
      } catch (err) { throw new Error(err); }
    },
  },
});
