import React from 'react';

function Food({fav}) {
  
  return <h5>{fav}</h5>;
  //return <h5>I LIKE {props.fav}</h5>;

  //console.log(props);
  //return <h5>I LOVE {props.fav}</h5>;
  //return <h6>I LOVE</h6>;
}

function App() {
  //return <div className="App"/>;
  //return <div>hello wor</div>;
  return (<div>
    <Food fav="kimchi"></Food>
    <Food fav="noodle"></Food>
  </div>
  );
  //return <Food fav="kimchi" somthing={true} papapa ={['banana',1,2,3,4,true]}></Food>
}

export default App;
