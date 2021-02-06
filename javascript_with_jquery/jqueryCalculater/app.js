$('#one').click(function() {
    insert(1);
})

$('#two').click(function() {
    insert(2);
})

$('#three').click(function() {
    insert(3);
})

$('#four').click(function() {
    insert(4);
})

$('#five').click(function() {
    insert(5);
})

$('#six').click(function() {
    insert(6);
})

$('#seven').click(function() {
    insert(7);
})

$('#eight').click(function() {
    insert(8);
})

$('#nine').click(function() {
    insert(9);
})

$('#zero').click(function() {
    insert(0);
  
})

//for clearing all input
$('#C').click(function() {
   $('.calc-display, textarea').val('');
  
})

$('#add').click(function() {
    insert('+');
})


$('#subtract').click(function() {
    insert('-');
})


$('#multiply').click(function() {
    insert('*');
})


$('#divide').click(function() {
    insert('/');
})


$('#dot').click(function() {
    insert('.');
})

$('#equal').click(function() {
    equal();
})





// for displaying whatever is typed 
function insert(num) {
    $('.calc-display').val($('.calc-display').val() + num);
}


// calculation the result 
function equal() {
    $('.calc-display').val(eval($('.calc-display').val()));
}


