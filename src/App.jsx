import * as React from 'react'

const welcome = {
  greeting: 'Hey',
  title: 'React',
}

function getTitle(title){
  return title;
}

function App() {
  return (
      <div>
        <hi>{getTitle(welcome.title)}</hi>
        <label htmlFor="search"> Search: </label>
        <input id="search" type="text" />
    </div>
  );
}

export default App;
