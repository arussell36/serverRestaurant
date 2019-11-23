// Dependencies
// ===========================================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Data
// ===========================================================

const reservation = [{
    custName: "bo-bob",
    custEmail: "bobob@gmail.com",
    custID: "412312312",
    custPhone: "321.123.2312",
},{
    custName: "mo-bamba",
    custEmail: "moooo@gmail.com",
    custID: "51341412",
    custPhone: "321.231.2452"
}];

const waitList = [{
    custName: "wait bo-bob",
    custEmail: "bobob@gmail.com",
    custID: "412312312",
    custPhone: "321.123.2312",
}];


// Routes
// ===========================================================
// Site Grab
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/reservations", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/reservations.html"));
});

// ===========================================================
// API Grab
app.get("/api/reservation", (req, res) => {
    res.json(reservation);
    // res.json("YOU MADE IT");
});

app.get("/api/waitlist", (req, res) => {
    res.json(waitList);
  });

// ===========================================================
// API Grab
app.post("/api/tables", function(req, res) {
// Getting the raw data from the client //
// We need to format the data to fit in the database /
    if (reservation.length < 5) {
        reservation.push(req.body);
        res.json(reservation)
        console.log("hi");
    } else {
        waitList.push(req.body);
        res.json(waitList);
// You need the below json because it sends back a string to let the server or user know the info was sent/received //
        console.log("hello");
}});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("Reservations listening on PORT " + PORT);
});
