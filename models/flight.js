const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new mongoose.Schema({
  airport: {type: String, required: true, 
  enum: ["AUS", "DFW", "DEN", "LAX"], default: "SAN"},
  arrival: {type: Date}
});

const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true, 
    enum: ["American", "Jetblue", "United"] },
  airport: {
    type: String,
    enum: ["LAX", "JFK", "AUS", "DEN"], default: "DEN"
    },
  
  flightNo: {
    type: Number,
    required: true, min: 10, max: 9999
  },
  departs: {
    type: Date,
    default: function () {
      return new Date().setFullYear(new Date().getFullYear() + 1);
    },
  },
  destinations: [destinationSchema],
}, {
  timestamps: true
});
 
const ticketSchema = new mongoose.Schema( {
    seat: {
      type: String,
      match: /[A-F][1-9]\d?/
      }, 
    price: {
      type: Number,
      min: 0
    },
    flight: {
      type: Number,
    }  
 }, {
  timestamps: true
 })


module.exports = mongoose.model('Flight', flightSchema);