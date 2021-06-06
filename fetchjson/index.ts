import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// async so we will receive a promise
axios.get(url).then(res => {
  console.log(res.data);
});
