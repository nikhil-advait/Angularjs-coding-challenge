var express = require('express');
var path = require('path');
var app = express();


app.use(express.static('bower_components'));
app.use(express.static('client'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.get('/api/order-counts', function(req, res){

  setTimeout(function(){
    res.json([{
      status: 'Total Orders',
      count: 111
    },
    {
      status: 'Unassigned',
      count: 454
    },
    {
      status: 'Allotted',
      count: 214
    },
    {
      status: 'Collected',
      count: 747
    },
    {
      status: 'Delivered',
      count: 343
    },
    {
      status: 'Cancelled',
      count: 434
    }]);
  },2000)

});

app.get('/api/cluster-wise-orders', function(req, res){

  setTimeout(function(){
    res.json({
      'Cluser 1' : 26,
      'Cluser 2' : 28,
      'Cluser 3' : 91,
      'Cluser 4' : 76,
    });
  },3000)

});

app.get('/api/single-cluster-orders', function(req, res){

  setTimeout(function(){
    res.json({
      'Seller 1' : 20,
      'Seller 2' : 30,
      'Seller 3' : 50,
      'Seller 4' : 95,
      'Seller 5' : 130,
      'Seller 6' : 25,
      'Seller 7' : 190,
      'Seller 8' : 15,
    });
  },4000)

});

app.get('/api/alerts', function(req, res){

  setTimeout(function(){
    res.json([{
      type: 'Issue',
      from: 'Test Store',
      desc: 'No delivery boy alloted'
    },{
      type: 'Feedback',
      from: 'Test Store',
      desc: 'Rating :5. Good Service'
    },{
      type: 'Issue',
      from: 'Test Store',
      desc: 'No delivery boy alloted'
    },{
      type: 'Feedback',
      from: 'Test Store',
      desc: 'Rating :5. Good Service'
    }]);
  },3300);

});


app.get('/api/rider-attendance', function(req, res){

  setTimeout(function(){
    res.json({
      'Present' : 170,
      'Not Recorded' : 30,
      'Leave with Approval' : 50,
      'Leave without Approval' : 95,
      'Weekly Off' : 20
    });
  },1500);

});


app.listen(3000, function(){
  console.log('Server is listening on port 3000');
});
