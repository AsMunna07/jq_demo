// jq
$(document).ready(function(){
    // alert
    $('.btn').on("click", function(){
      alert("Hello world");
    });
});
$(document).ready(function(){
    // show
    $('#btns').on('click', function(){
      $('h2').show();

    });
     // hide
    $('#btnh').on('click', function(){
      $('h2').hide();

    });
     // toggle
    $('#toggle').on('click', function(){
      $('h2').toggle();

    });

});
$(document).ready(function(){
    // fadein
    $('#btn_s').on('click', function(){
      $('h2').fadeIn();

    });
     // fadeout
    $('#btn_h').on('click', function(){
      $('h2').fadeOut();

    });
     // fadetoggle
    $('#btn_t').on('click', function(){
      $('h2').fadeToggle();

    });
});


$(document).ready(function(){
  $('.question').on('click', function(){
    $('.answer').slideToggle(1000);
  });
});

$(document).ready(function(){
   $( "#draggable" ).draggable();

   $( "#accordion" ).accordion({
    collapsible: true,
    heightStyle: "content"
   });

});
$(document).ready(function(){
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ){
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "Dropped!" );
      }
    });
    $( "#resizable" ).resizable();
    $( "#selectable" ).selectable();
    $( "#sortable" ).sortable();
});
