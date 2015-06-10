/**
 * Created by AlexLiu on 2015/6/9.
 */

/**
 * Created by AlexLiu on 2015/6/2.
 */

var React = require('react');
var Reflux = require('reflux');

var tableStore = require('../../stores/table-store');
var actions = require('../../actions/app-actions');
var Router = require('react-router');

var Link = Router.Link;
var EditItem = require('./edit-item');
var RemoveItem = require('./remove-item');
//var cx = require('/node_modules/react/lib/cx');

var status = ['is-status-yellow', 'is-status-blue'];
var statusText = ['待处理', '已处理'];

var Status = React.createClass({
  render(){
    var s = status[this.props.status];
    var text = statusText[this.props.status];

    return (
      <span className={'is-state ' + s}>
        {text}
      </span>
    );
  },
  addItem: function(){
    console.log('add');
    actions.addItem();
    //actions.removeItem.call(this, this.props.item);
  }
});

module.exports = Status;