var Links = {
  SetColor:function(color){
    /*var alist = document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length){
      alist[i].style.color = color;
      i+=1;
    }*/
    $('a').css('color',color);
  }
}
var body = {
  SetColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  } ,
  SetBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);

  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    body.SetBackgroundColor('black');
    body.SetColor('white');
    self.value = 'day';

    Links.SetColor('powderblue');


  } else {
    body.SetColor('black');
    body.SetBackgroundColor('white');
    self.value = 'night';

    Links.SetColor('blue');

  }
}
