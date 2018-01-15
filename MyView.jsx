import Foobar from './Foobar.jsx';
import MyInput from './MyInput.jsx';

export default {
  name: 'MyView',

  components: {
    Foobar,
    MyInput
  },

  data: () => ({
    value: 'Test'
  }),

  methods: {
    update(v) {
      this.value = v;
    }
  },

  render() {
    return (
      <div>
        <div>REPRODUCTION</div>
        <MyInput value={this.value} update={this.update} />
        <Foobar />
      </div>
    );
  }
};
