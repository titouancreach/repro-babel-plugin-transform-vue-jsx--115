export default {
  props: ['update', 'value'],

  name: 'MyInput',

  render() {
    return (
      <div>
        <input value={this.value} onInput={(ev) => this.update(ev.target.value)} />
      </div>
    );
  }
};
