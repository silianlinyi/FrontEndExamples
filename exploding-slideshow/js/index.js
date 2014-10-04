// inspired by http://codepen.io/natewiley/pen/pFABJ

var imgArr = [
  'http://photos-b.ak.instagram.com/hphotos-ak-xaf1/10683762_286306574891225_1761460114_n.jpg',
  'http://photos-a.ak.instagram.com/hphotos-ak-xaf1/10608075_333736466793160_136359731_n.jpg',
  'http://photos-b.ak.instagram.com/hphotos-ak-xpa1/923770_684146958333017_1066662577_n.jpg',
  'http://photos-h.ak.instagram.com/hphotos-ak-xfp1/891370_282903268549847_372291935_n.jpg',
  'http://photos-c.ak.instagram.com/hphotos-ak-xfp1/10522311_327614657387994_572306411_n.jpg',
  'http://scontent-a-dfw.cdninstagram.com/hphotos-xap1/t51.2885-15/10499271_903816752966439_1929046309_n.jpg',
  'http://distilleryimage7.ak.instagram.com/4e6ffb2a345911e2af1622000a1fb845_7.jpg',
  'http://photos-g.ak.instagram.com/hphotos-ak-xpa1/927227_1378204319094918_1009046892_n.jpg',
  'http://photos-g.ak.instagram.com/hphotos-ak-xaf1/10601958_791345707552806_310125277_n.jpg',
  'http://photos-g.ak.instagram.com/hphotos-ak-xaf1/10616847_682604518497014_1108765355_n.jpg',
  'http://scontent-a-dfw.cdninstagram.com/hphotos-xpa1/t51.2885-15/10538768_304110363083630_213156814_n.jpg',
  'http://photos-f.ak.instagram.com/hphotos-ak-xap1/10401753_889988277684421_393326615_n.jpg'
];
var speed = 2;
var firstPass = true;

function goGoGo() {
  var transSpeed = firstPass === true ? 0 : speed;

  firstPass = false;

  function makeActive() {
    $('.box')
      .addClass('active')
      .css({
        'background-image': 'url(' + imgArr[_.random(0, imgArr.length - 1)] + ')'
      });
  }
  
  $('.box.active').removeClass('active');
  
  setTimeout(makeActive, transSpeed * 1000);
}

setTimeout(goGoGo, 1000);
setInterval(goGoGo, 7000);
  
 