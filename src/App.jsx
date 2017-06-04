import React from 'react';
import styles from './App.css';

var App = React.createClass({
  getInitialState: function () {
    var value = this.props.value;
    if (!value || value == '') {
      value = []
    }

    return {
      value: value
    }
  },
  getDefaultProps: function () {
    return {
    }
  },
  add_more: function () {
    var new_val = this.state.value.concat([])
    new_val.push('')
    this.setState({ value: new_val })
  },
  remove_item: function (i, e) {
    var new_state = this.state.value.concat([])
    new_state[i] = undefined
    this.setState({ value: new_state })
  },
  render: function () {
    var me = this

    var lines = this.state.value.map(function (e, i) {
      if (e == undefined) {
        return null
      }

      return (
        <div key={i}>
          <textarea defaultValue={e}></textarea>
          <button onClick={me.remove_item.bind(null, i)} >Remove</button>
        </div >
      )
    }).filter(function (e) {
      return e != undefined
    })

    return (
      <div>
        {lines}
        <button onClick={this.add_more}>Add item</button>
      </div>
    )
  }
});
/*const App = () =>
  <div className={styles.app}>
    its work
  </div>;*/

export default App;
