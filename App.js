import React from "react";
import ReactDOM from "react-dom/client";

const Header =()=>{
return( <div className="header">
    <div className="logo-container">
    <img src = "https://cdn.pixabay.com/photo/2024/09/30/07/06/lemon-9084904_1280.jpg" className="logo"/>
</div>

<div className="nav-items" >
<ul >
<li>Home</li>
<li>About Us</li>

<li>Contact Us</li>
<li>Cart</li>

</ul>

</div>
</div>
)
}
const resList = [
    {data:{
      name: "Meghana Foods",
      cuisine: "Italian",
      rating: 4.5,
      deliverytime: 45,
      costfortwo: 400,
      img:"https://cdn.pixabay.com/photo/2024/09/30/07/06/lemon-9084904_1280.jpg",
      id: 1
    }
    },
    {
        data:{
      name: "KFC",
      cuisine: "Chinese",
      rating: 4.4,
      deliverytime: 25,
      costfortwo: 300,
      img:"https://img.freepik.com/free-vector/watercolor-background-with-sky-with-clouds-stars_306501-846.jpg?t=st=1729618094~exp=1729621694~hmac=67e8f16bff0c9db210c0e2d6360d4eefd2ecb502f1f7c4a4b62d3e21942d1640&w=826" ,
      id:2
     },
    }
  ];

const Body =()=>{
   return <div className="body">
        <div className="search">
            Search
        </div>
        <div className="rescontainer">
            {resList.map((restaurant)=>
            <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
            )}
          

        </div>
    </div>
   
}



//in jsx inline css has to be given as an object -- not a preferred way
const styleCard={
    backgroundColor:"#f0f0f0"
}
const RestaurantCard=(props)=>{
const {resData}= props;
const { name, cuisine,rating, deliverytime,costfortwo, img} =resData?.data;
return(
<div className="rescard" style={styleCard}>
<img src={img} className="resimg"/>
<h3>{name}</h3>
<h4>{cuisine}</h4>
<h5>{rating} stars</h5>
<h5>{deliverytime} mins</h5>
<h5> Rs. {costfortwo} for two</h5>

</div>
)
}
const AppLayout = ()=>(
<div className="app"><Header/>
<Body/>
</div>

)
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<AppLayout/>)
