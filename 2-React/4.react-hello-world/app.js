
console.log('-app.js-');

//---------------------------------------------------------------------

// ES5 - Component-Class 

// let HelloWorld = React.createClass({
//     render: function () {
//         let ele = React.createElement('div', null, 
//                     React.createElement('h2', null, "Welcome to React"));
//         return ele;
//     }
// });

// let helloWorld = React.createElement(HelloWorld, null, null);

// ReactDOM.render(helloWorld, document.getElementById('root'));

//---------------------------------------------------------------------


/*
let HelloWorld = React.createClass({
    render: function () {
        let ele = (
            <div className="well">
                <span className="badge">welcome to React</span>
            </div>
        );
        return ele;
    }
});

let helloWorld = <HelloWorld />

ReactDOM.render(helloWorld, document.getElementById('root'));*/



//---------------------------------------------------------------------

// Stateless & Functional component class
/*
function HelloWorld(props) {
    let ele = (
        <div className="well">
            <span className="badge">welcome to React</span>
        </div>
    );
    return ele;
}


let helloWorld = <HelloWorld />

ReactDOM.render(helloWorld, document.getElementById('root'));*/

//---------------------------------------------------------------------


// ES6 class

class HelloWorld extends React.Component {
    render() {
        let ele = (
            <div className="well">
                <span className="badge">welcome to React</span>
            </div>
        );
        return ele;
    }
}

ReactDOM.render(<div>
    <HelloWorld />
    <HelloWorld />
</div>, document.getElementById('root'));
