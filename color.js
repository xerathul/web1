var Links ={
  setColor:function (color){
    // var alist = document.querySelectorAll('a')
    //   var i = 0;
    //   while(i<alist.length){
    //   console.log(alist[i]);
    //   alist[i].style.color = color;
    //   i = i+1;
    //   }
    $('a').css('color', color);
    }
}
var Body = {
  setColor: function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor: function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);

  }
}
function nightDayhandler(self){
    var target = document.querySelector('body');
      if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white')
        document.querySelector('a').style.color = 'white';
        self.value = 'day';

        Links.setColor('pink');
      } else{
        Body.setBackgroundColor('white');
        Body.setColor('black')
        document.querySelector('a').style.color = 'black';
        self.value = 'night';

        Links.setColor('blue');
      }
    }
