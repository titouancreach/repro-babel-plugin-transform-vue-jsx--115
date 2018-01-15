import Vue from 'vue';
import MyView from './MyView.jsx';

new Vue({
  component: {
    MyView
  },
  el: '#app',
  render: h => h(MyView)
});
