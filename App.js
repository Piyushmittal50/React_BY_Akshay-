import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
   - Logo Comop
   - NAV Items
* Body
   - Search Bar
   - Card Container 
       -> have many Resturant Card
             - image
             - name of res
             - star rating
             - time for delivery
             - cusines
* Footer
  - Copy Write
  - Links
  - Address
  - Contact Info
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFIL0OvRjKcZxEoYzeXyqC40V7oIHFgsnhxA&usqp=CAU" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};
const ResCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card">
            <img
                alt="Image"
                className="res-image"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId 
                }
            />
            <h3>{resData.resName}</h3> 
            <h4>{resData.cusine}</h4>
            <h4>{resData.delTime}</h4>
            <h4>{resData.rating}</h4>
        </div>
    )
};

const resObj = 
    {
  "restaurantCarts": [
    { 
          "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "id":"10",
      "resName": "Tasty Haven",
      "cusine": "Mexican",
      "delTime": "45 minutes",
      "rating": 4.2
    },
    { 
        "cloudinaryImageId": "258fe8a3577877fbfe064095ed1d9dc3", 
        "id":"12",
      "resName": "Spice Palace",
      "cusine": "Indian",
      "delTime": "40 minutes",
      "rating": 4.8
    },
            {
                "cloudinaryImageId": "thfmjr9vav3tye3ce9xw",
        "id":"14",
      "resName": "Sushi Delight",
      "cusine": "Japanese",
      "delTime": "35 minutes",
      "rating": 4.6
    },
            {
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "id":"15",
      "resName": "Mediterranean Flavors",
      "cusine": "Mediterranean",
      "delTime": "50 minutes",
      "rating": 4.4
    },
            {
                "cloudinaryImageId": "ce6f722eed5661c7356a98671799f305",
        "id":"17",
      "resName": "Burger Kingdom",
      "cusine": "American",
      "delTime": "30 minutes",
      "rating": 4.7
    },
            {
                "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
        "id":"20",
      "resName": "Vegetarian Delights",
      "cusine": "Vegetarian",
      "delTime": "25 minutes",
      "rating": 4.9
    },
            {
                "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
        "id":"25",
      "resName": "Seafood Paradise",
      "cusine": "Seafood",
      "delTime": "55 minutes",
      "rating": 4.3
    },
            {
                "cloudinaryImageId": "drarpnpeqchbx8yfwvlw",
        "id":"30",
      "resName": "Cozy Cafe",
      "cusine": "Coffee Shop",
      "delTime": "20 minutes",
      "rating": 4.5
    },
            {
                "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
        "id":"50",
      "resName": "Sweet Treats Bakery",
      "cusine": "Desserts",
      "delTime": "40 minutes",
      "rating": 4.6
    },
            {
                "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
        "id":"100",
      "resName": "Healthy Greens",
      "cusine": "Salads",
      "delTime": "30 minutes",
      "rating": 4.1
    }
  ]
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {resObj.restaurantCarts.map((restaurantCarts,index) => (
                    
                <ResCard
                  key={index} resData = {restaurantCarts}
                />
                ))}
        
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className = "app">
            <Header />
            <Body/>
       </div>
    )
};

const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(<AppLayout />);
