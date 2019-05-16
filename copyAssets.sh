mkdir -p public
cp src/index.html public
cp -R src/assets public
cp node_modules/vital-css/dist/css/vital.min.css public/assets
cp node_modules/vue/dist/vue.min.js public/assets
cp node_modules/axios/dist/axios.min.js public/assets
