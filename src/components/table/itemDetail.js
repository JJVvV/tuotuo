/**
 * Created by AlexLiu on 2015/6/2.
 */

var React = require('react');
var Reflux = require('reflux');

var tableStore = require('../../stores/table-store');
var actions = require('../../actions/app-actions');



var ItemDetail = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState(){
        return {
            item:{}
        }
    },

    componentDidMount: function(){
        this.listenTo(actions.loadPage, this.loadPage);
        actions.loadPage();
    },

    loadPage(){
        var item = tableStore.getItemById(this.props.params.itemId);
        this.setState({
            item:item
        });
    },
    render(){

       debugger;
        return (
            <div>
            <p>{this.state.item.id}</p>
                <p>{this.state.item.name}</p>
                <p>{this.state.item.stock}</p>
            </div>
        );
    }
});

module.exports = ItemDetail;