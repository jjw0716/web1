var Links = {
  setColor: function(color){
    /*
    var lists = document.querySelectorAll('a');
    for(var link of lists)
      link.style.color = color;
    */
    $('a').css('color',color);
  }
}
var Body = {
  setBackgroundColor: function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  },
  setColor: function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body').style;
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
  }
  else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('black');
  }
}
//check
