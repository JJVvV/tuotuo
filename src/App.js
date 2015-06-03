import React, { Component } from 'react';
var Router = require('react-router');

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var About = require('./components/test/about');
var Home = require('./components/test/home');
var Inbox = require('./components/test/inbox');
var ItemDetail = require('./components/table/itemDetail');
var Items = require('./components/table/items');
var Form = require('./components/table/form');
//export default class App extends Component {
//
//  render() {
//
//    //    console.log('app');
//    //  var Child;
//    //  switch(this.props.route){
//    //      case 'about':
//    //          Child = About;break;
//    //      case 'inbox':
//    //          Child = Inbox;break;
//    //      default:
//    //          Child = Home;
//    //  }
//    //return (
//    //    <div>
//    //        <h1>Hello, world.</h1>
//    //        <Child />
//    //    </div>
//    //
//    //);
//
//  }
//}

var App = React.createClass({
    render(){
        return(
            <div>
                <h1>App</h1>

                <RouteHandler />
                <Form />
            </div>
        );
    }
});


var routes = (
    <Route handler={App}>
        <Route  name="items" handler={Items} />
        <Route name="itemDetail" path="item/:itemId" handler={ItemDetail} />
        <DefaultRoute handler={Items} />
    </Route>
);


Router.run(routes, Router.HashLocation, function(Root){
    React.render(<Root />, document.querySelector('#root'));
});