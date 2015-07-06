// to run replace socket url with currently runing ngrok url
var socket = io('https://dcaee46c.ngrok.io/');
var photos = [];

socket.on('connect', function(){
  console.log('Connected!');
})

socket.on('instagram', function(obj){

  // console.log(obj);
  $.ajax({
    url: 'https://api.instagram.com/v1/tags/' + obj[0].object_id +'/media/recent?client_id=6e5822da8a2f4d4bab40803fb7b7fa44',
    // crossDomain:true,
    dataType: 'jsonp'
  }).done(function(response){
    console.log(response);
    $('#photo-container').prepend('<li class="animated fadeInLeft"><img src="' + response.data[0].images.thumbnail.url + '"></li>');

    // for(var i=0; i<response.data.length; i++){
    //   // console.log(response.data[i]);
    //   for(var j=0; j<response.data[i].tags.length; j++){
    //     if (response.data[i].tags[j] === "harlem" || response.data[i].tags[j] === "cycle" || response.data[i].tags[j] === "bridge" || response.data[i].tags[j] === "bicycle" || response.data[i].tags[j] === "dance") {
    //       if(photos.indexOf(response.data[i].id) === -1){
    //         console.log(response.data[i].tags[j]);
    //         debugger;
    //         $('#photo-container').prepend('<li class="animated fadeInLeft"><img src="' + response.data[i].images.standard_resolution.url + '"></li>');
    //         photos.push(response.data[i].id);
    //       }
    //     }
    //   };
    // }
      // if(photos.indexOf(response.data[0].id) === -1) {
      //   console.log('not on page');
      //   $('#photo-container').prepend('<li class="animated fadeInLeft"><img src="' + response.data[0].images.thumbnail.url + '"></li>');
      //   photos.push(response.data[0].id);
      // } else {
      //   console.log('duplicate');
      // }
  })
  // .fail(function(error) {
  //     console.log(error);
  // })
});