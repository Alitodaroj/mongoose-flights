const Flight = require('../models/flight');

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', {title: "Flight Details", flight})  
  }
  
  async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
  }

  function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' })
  }

  async function create(req, res) 
  {console.log(req.body)
    // convert nowShowing's checkbox of nothing or "on" to boolean
    
  try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }
  async function addTicket(req, res) {
    try{
    const ticket = await ticket.find({}).sort('name');
    res.render('ticket/new', { title: 'Add Ticket', ticket });
  }
}

  module.exports = {
    index, 
    show,
    newFlight,
    create,
    addTicket
  }