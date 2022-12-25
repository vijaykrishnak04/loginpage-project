var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  let session = req.session.name;
  let error = req.session.loginError;
  if (session) {
    res.redirect("/home");
  } else {
    res.render("index", { title: "Log In", error });
  }
});

let user = {
  username: "vijay",
  password: "vijay231",
};

// log in session

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password == user.password) {
    req.session.name = req.body.username;
    res.redirect("/home");
  } else {
    req.session.loginError = "Incorrect password and username";
    res.redirect("/");
  }
});

// logout session

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

// card properties

const cars = [
  {
    title: "BMW X5",
    img: "https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/Images/all-models/BMW%20Series/BMW%20X%20series/X5%202018/INFORM_X5/inform.png",
    text: "The price of BMW X5 starts at Rs. 79.90 Lakh and goes upto Rs. 95.90 Lakh. BMW X5 is offered in 4 variants - the base model of X5 is xDrive 40i SportX Plus and the top variant BMW X5 xDrive 40i M Sport which comes at a price tag of Rs. 95.90 Lakh",
  },
  {
    title: "BMW X4",
    img: "https://images.91wheels.com/news/wp-content/uploads/2022/02/BMW-X4.jpg?width=640&q=90",
    text: "The price of BMW X4 starts at Rs. 71.90 Lakh and goes upto Rs. 73.90 Lakh. BMW X4 is offered in 2 variants - the base model of X4 is xDrive30i M Sport Silver Shadow Edition and the top variant BMW X4 xDrive30d M Sport Sliver Shadow edition which comes at a price tag of Rs. 73.90 Lakh.",
  },
  {
    title: "BMW X3",
    img: "https://static.autox.com/uploads/2022/01/2022-BMW-X3-Facelift-front-three-quarter-motion.jpg",
    text: "The price of BMW X3 starts at Rs. 61.90 Lakh and goes upto Rs. 68.30 Lakh. BMW X3 is offered in 3 variants - the base model of X3 is xDrive30i SportX Plus and the top variant BMW X3 xDrive30i M Sport which comes at a price tag of Rs. 68.30 Lakh.",
  },
  {
    title: "BMW X1",
    img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcdni.autocarindia.com%2FReviews%2FBMW-X1-front.jpg&c=0",
    text: "The price of BMW X1 starts at Rs. 41.50 Lakh and goes upto Rs. 44.50 Lakh. BMW X1 is offered in 3 variants - the base model of X1 is sDrive20i SportX and the top variant BMW X1 sDrive20d xLine which comes at a price tag of Rs. 44.50 Lakh.",
  },
  {
    title: "BMW 7 series",
    img: "https://www.bmw.in/content/dam/bmw/common/all-models/7-series/sedan/2021/highlights/bmw-series-7-sedan-onepager-taphold-design-desktop-01.jpg",
    text: "The price of BMW 7 Series starts at Rs. 1.50 Cr and goes upto Rs. 1.76 Cr. BMW 7 Series is offered in 4 variants - the base model of 7 Series is 740Li M Sport Edition and the top variant BMW 7 Series 745Le xDrive which comes at a price tag of Rs. 1.76 Cr.",
  },
];

const showlist = [
  {
    name: "BMW KUN Exclusive",
    location: "Neelambur, Tamilnadu",
  },
  {
    name: "EVM Autokraft-BMW",
    location: "Kochi,Kerala",
  },
  {
    name: "BMW Motorrad - EVM Autokraft",
    location: "Kozhikode, Kerala",
  },
];

const contact = 
[
  {
    name:"Vijay krishna",
    mobile:"9562437811",
    emailid:"vijaykrishna@gmail.com"
  },
  {
    name:"Joseph",
    mobile:"8129437811",
    emailid:"josephkutty@gmail.com"
  },
  {
    name:"Alexander zelenski",
    mobile:"00418282828",
    emailid:"alexander@gmail.com"
  }
]

router.get("/home", function (req, res) {
  let session = req.session.name;
  if (session) {
    res.render("home", { cars, showlist});
  } else {
    res.redirect("/");
  }
});

router.get("/contact", (req, res) => {
  let session = req.session.name;
  if(session){
    res.render("contact",{ contact })
  }else{
    res.redirect("/home")
  }
});

module.exports = router;
