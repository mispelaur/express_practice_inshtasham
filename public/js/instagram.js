var socket = io('https://5bb041cb.ngrok.io/')

socket.on('connect', function(){
  console.log('Connected!');
})

socket.on('instagram', function(obj){
  console.log(obj);
})