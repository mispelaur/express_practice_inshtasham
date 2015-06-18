var socket = io('https://5bb041cb.ngrok.io/');
var photos = [];


socket.on('connect', function(){
  console.log('Connected!');
})

socket.on('instagram', function(obj){
  console.log(obj);
  $.ajax({
    url: 'https://api.instagram.com/v1/tags/' + obj[0].object_id +'/media/recent?client_id=6e5822da8a2f4d4bab40803fb7b7fa44',
    // crossDomain:true,
    dataType: 'jsonp'
  }).done(function(response){
    console.log(response);
      if(photos.indexOf(response.data[0].id) === -1) {
        console.log('not on page');
        $('#photo-container').prepend('<li class="animated fadeInLeft"><img src="' + response.data[0].images.thumbnail.url + '"></li>');
        photos.push(response.data[0].id);
      } else {
        console.log('duplicate');
      }
        })
        .fail(function(error) {
          console.log(error);
        })
      });