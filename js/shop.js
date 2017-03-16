
  var shopL = document.getElementById('shop_1');
  var shopR = document.getElementById('shop_2');
  var scrollY = 0;

  var meunScroll = new BScroll(shopL,{
    click: true
  });

  var foodsScroll = new BScroll(shopR,{
    probeType: 3
  });

  foodsScroll.on('scroll',(pos) => {
    scrollY = Math.abs(Math.round(pos.y));
    console.log(scrollY);
    $('#shop_1').find('li').eq(moveCurrent()).addClass('active').siblings().removeClass('active');
  })

  var foodList = shopR.getElementsByClassName('foode-type-wrap');
  var listHeight = [];
  var height = 0;

  listHeight.push(height);
  for(var i = 0; i < foodList.length; i++){
    var item = foodList[i];
    height += item.clientHeight;
    this.listHeight.push(height);
  }
  //  console.log(listHeight);

  var moveCurrent = function(){
    for (var j = 0; j < listHeight.length; j++) {
      var height1 = listHeight[j];
      var height2 = listHeight[j + 1];
      if (!height2 || (scrollY >= height1 && scrollY < height2)) {
        return j;
      }
    }
    return 0;
  }




  $(function(){
    $('#shop_1').find('li').click(function(){
      var moveIndex = $(this).index();
      var moveDistance = listHeight[moveIndex];
      console.log(moveDistance);
      $(this).addClass('active').siblings().removeClass('active');
      $('#shop_2').find('ul').scrollTop(moveDistance);
      foodsScroll.scrollTo(0, -moveDistance,500);
    })
  })
