// $(document).ready(function() {
//   $('#btn1').click(function() {
//     $('#para').hide();
//   })
  
// })

// $(document).ready(function() {
//   $('#btn2').click(function() {
//     $('#para').show();
//   })
  
// })

// $(document).ready(function() {
//   $('#btn1').hover(function() {
//     $('#para').toggle();
//   })
  
// })

// $('#btn1').on('mouseenter', function() {
//   $('#para').toggle();
// })


// $('#btn1').on('mouseleave', function() {
//   $('#para').toggle();
// })


// $('#btn1').on('mousemove', function() {
//   $('#para').toggle();
// })


// $('#btn1').on('mousedown', function() {
//   $('#para').toggle();
// })


// $('#btn1').on('mouseup', function() {
//   $('#para').toggle();
// })


// $(document).on('mousemove', function(x) {
//   $('#coords').html(`${x.clientX} and ${x.clientY}`);
//   //  console.log(`${x.clientX} and ${x.clientY}`);
// });

// $(document).ready(function() {
//   $('ul').empty();
// })

// $('a').click(function() {
// alert($('a').attr('href'));
// })
 
// $('#my').keyup(function(x) {
//   var code = x.which;
//  console.log(code);
//   if(code === 13) {
//     x.preventDefault();
//     $('ul').append('<li> '+ x.target.value +' </li>'); 
//   }
// })



// var arr = ['aadil','altamas','alhan','ujef', 'najib', 'rahil', 'bhagoo'];


// var newarr = $('ul li').toArray();

// $.each(newarr, function(i, val) {
//   console.log(val.innerHTML);
// })


$(document).ready(function() {
  // $('#result').load('test.html', function(responseTxt, statusTxt, xhr) {
  //  if(statusTxt === "success"){
  //    alert('it wnet well');
  //  }else if(statusTxt === "error"){
  //    alert(`error:  ${xhr.statusTxt}`);
  //  }
  // });

  // $.get('test.html', function(data) {
  //    $('#result').html(data);
  // })

  
  // $.ajax({
  //   method: 'GET',
  //   url:" http://localhost:3000/posts",
  //   dataType: 'json'
  // }).done(function(data) {
  //   // console.log(data);
  //   $('#users').append(`<li>${data[0].author}</li>`);
  // } 
  // );

  // for some reason $getJSON is not working find out why 

  
  // $.ajax({
  //   method:'GET',
  //   url:'https://jsonplaceholder.typicode.com/posts',
  //   dataType:'json'
  // }).done(function(data){
  //   console.log(data);

  //   $.map(data, function(element , i) {
  //     $('#users').append(`<h3>${element.title}</h3> <br> <p>${element.body} </p>`)

  //   })
  // });

// $('#postForm').submit(function(x) {
//   x.preventDefault();

//   var title = $('#title').val();
//   var body = $('#body').val();
//   var url = $(this).attr('action');

//   $.post(url, {title: title , body: body})
//   .done(function(data) {
//     console.log('post saved')
//     console.log(data)
//   })
// })


})
