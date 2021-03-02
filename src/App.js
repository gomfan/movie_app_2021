import React from 'react';

function Food({name ,picture}) {
  
  return (
    <div>
      <h2>I LIKE {name}</h2>
      <img src={picture} />
    </div>
  );
  //return <h5>I LIKE {props.fav}</h5>;

  //console.log(props);
  //return <h5>I LOVE {props.fav}</h5>;
  //return <h6>I LOVE</h6>;
}

const foodILike = [
  {
    name:'kimchi',
    image:'https://m.jnmall.kr/web/product/big/201904/609ee5a2a4bea63000745b65a63f064a.png',
  },
  {
    name:'ramen',
    image:'http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2020/05/23/20200523000093_0.jpg',
  },
];


function App() {
  //return <div className="App"/>;
  //return <div>hello wor</div>;
  return (
    <div>
      {foodILike.map(dish => ( 
        <Food name={dish.name} picture={dish.image} ></Food>))}
    </div>
  );
  //return <Food fav="kimchi" somthing={true} papapa ={['banana',1,2,3,4,true]}></Food>
}

export default App;
