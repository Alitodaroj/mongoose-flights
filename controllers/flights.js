const Flight = require('../models/flight');
// const Ticket = require('../models/ticket');
async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', {title: 'Flight Details', flight})
    
  }
  
  async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
  }

  function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' })
  }

  async function create(req, res) {
 
    
    
  try {
      await Flight.create(req.body);
      
      res.redirect('/flights');  
    } catch (err) {
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }
  async function addTicket(req, res) {
    const flight = await Flight.find({});
    const ticket = await ticket.find({}).sort('name');
    res.render('ticket/new', { title: 'Add Ticket', flight, ticket});
  }

  async function addDestination(req, res) {
    const flights = await Flight.findById(req.params.id);
  
  flights.destinations.push(req.body);
  try {
    await flights.save();
  } catch (err) {
    console.log(err);
  }
 
  res.redirect(`/flights/${flights._id}`);
}
  

  
  module.exports = {
    index, 
    show,
    newFlight,
    create,
    addTicket,
    addDestination
  }
