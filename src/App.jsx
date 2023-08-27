//import * as React from 'react'

const contract = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://reduc.js.org/',
    author: 'Dan Abramvo, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
      <div>
        <hi>My Hacker Stories</hi>
        <label htmlFor="search"> Search: </label>
        <input id="search" type="text" />

        <hr />
        <ul>
          {contract.map(function(item){
            return <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              </li>;
          })}
        </ul>
    </div>
  );
}

export default App;
