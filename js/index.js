
console.log("Welcome to JQuery!");

 // $('selector').action();
 $('h1').click(function(){
    console.log('Clicked',this);
    $('h1').hide();
});

$('h2').click(function(){
    console.log("Register here");
    $('.reg').show();
})
$('p').click(function(){
    console.log("clear the content from the specified element")
    $('.p').empty();
    $('a').remove();
})

