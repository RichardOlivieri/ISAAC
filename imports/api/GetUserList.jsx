// A functional component using an ES2015 (ES6) arrow function:
var UserList = (List) => {
  var list = getList(props.users);
  return <User>{list}</User>;
};