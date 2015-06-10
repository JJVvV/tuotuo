/**
 * Created by AlexLiu on 2015/6/2.
 */

var React = require('react');
var Reflux = require('reflux');

var tableStore = require('../../stores/table-store');
var actions = require('../../actions/app-actions');

var Item = require('./item');
var Thead = require('./thead');

var Thead = React.createClass({
    mixins: [Reflux.connect(tableStore), Reflux.ListenerMixin],

    componentDidMount(){
        this.setState({});

        //this.listenTo(actions.editItem, this.onItemChange);
        //this.listenTo(actions.removeItem, this.onItemChange);
    },

    render(){
        //var trs = this.props.tds.map((item, i)=>{
        //    return (
        //        <td></td>
        //    );
        //});
        var thead = this.props.thead.map(function(item){
          return (
            <th className="sorting">
              {item}
            </th>
          );
        });
        return (
            <thead>
                <tr>
                  {thead}
                </tr>
            </thead>
        );
    }
});

module.exports = Thead;