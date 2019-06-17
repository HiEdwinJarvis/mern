var contentNode = document.getElementById('contents');
var component = React.createElement(
  'h1',
  null,
  'Hello World!\u6492\u5927\u58F0\u5730\u7B97\u6CD5'
); // A simple JSX component 
ReactDOM.render(component, contentNode); //  Render the component inside  the content Node