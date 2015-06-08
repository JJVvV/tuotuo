var React = require('react');
var TableStore = require('./js/stores/table-store');
var Reflux = require('reflux');
var Actions = require('./js/actions/app-actions');
var Router = require('react-router');

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var About = require('./js/components/test/about');
var Home = require('./js/components/test/home');
var Inbox = require('./js/components/test/inbox');
var ItemDetail = require('./js/components/table/itemDetail');
var Items = require('./js/components/table/items');
var Form = require('./js/components/table/form');
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
    mixins:[Reflux.connect(TableStore)],

    componentDidMount(){



        Actions.loadPage();
    },
    render(){
        return(
            <div>
                <h1>App</h1>

                <RouteHandler list={this.state.products} />
                <Form />
            </div>
        );
    }
});


var routes = (
    <Route handler={App}>
        <Route  name="items" handler={Items}></Route>
        <Route name="itemDetail" path="item/:itemId" handler={ItemDetail} />
        <DefaultRoute handler={Items} />
    </Route>
);


Router.run(routes, Router.HashLocation, function(Root){
    React.render(<Root />, document.querySelector('#root'));
});