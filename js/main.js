
let spotlightwidth = 64;
let spotlightheight = 64;

const showCapture = () => {
  $('#capture').css('display', 'block');
  $('#footer').css('display', 'block');
};

const showMainPage = () => {
  $('#capture').css('display', 'none');
  $('#footer').css('display', 'none');
};

function switchTab(num) {
  
  // hide title
  $('#main-title').css('display', 'none');
  $('#btn-layerview').css('display', 'none');
  
  // hide main button
  $('#layerviewBtn').fadeOut("slow");
  
  // show main content for all tabs
  $('#main-content').show();
  
  switch (num) {
    
    // Tab 1
    case 1: {
      $('#tab-1').addClass('tab-active');
      $('#tab-2').removeClass('tab-active');
      $('#tab-3').removeClass('tab-active');
      $('#tab-4').removeClass('tab-active');
      
      $('#content-1').show();
      $('#content-1').css('animation', 'fadeInUp 0.5s');
      
      $('#content-2').hide();
      $('#content-3').hide();
      $('#content-4').hide();
      
      break;
    }
    
    // Tab 2
    case 2: {
      $('#tab-2').addClass('tab-active');
      $('#tab-1').removeClass('tab-active');
      $('#tab-3').removeClass('tab-active');
      $('#tab-4').removeClass('tab-active');
      
      $('#content-2').show();
      $('#content-2').css('animation', 'fadeIn 1s');
      
      // hide all men
      $('#img-people').hide();
      // show all men buttons
      $('#peopleBtn').show();
      $('#peopleBtn').css('animation', 'fadeIn 1s');
      
      $('#content-1').hide();
      $('#content-3').hide();
      $('#content-4').hide();
      
      break;
    }
    
    // Tab 3
    case 3: {
      $('#tab-3').addClass('tab-active');
      $('#tab-1').removeClass('tab-active');
      $('#tab-2').removeClass('tab-active');
      $('#tab-4').removeClass('tab-active');
  
      // hide all
      $('#tab-header').hide();
      $('#content-1').hide();
      $('#content-2').hide();
      $('#content-3').hide();
      $('#content-4').hide();
  
      // reset spotlight guide
      // $('#centerPoint').hide();
      $('#overlayGuide').show();
      $('#spotLightBtn').show();
      $('#night').addClass('notransition');
  
      // show overlay for spotlight
      $('#overlay').show();
      $('#night').show();
      let bg = "-webkit-radial-gradient(38% 50%, 64px 64px, transparent 50%, rgb(0, 0, 34))";
      $('#night').css('backgroundImage', bg);
  
      document.addEventListener('touchstart', process_touchstart, false);
      
      break;
    }
    
    // Tab 4
    case 4: {
      $('#tab-4').addClass('tab-active');
      $('#tab-1').removeClass('tab-active');
      $('#tab-2').removeClass('tab-active');
      $('#tab-3').removeClass('tab-active');
      
      $('#content-1').hide();
      $('#content-2').hide();
      $('#content-3').hide();
      $('#content-4').show();
      $('#content-4').css('animation', 'fadeIn 1s');
      $('#nodeCode').attr("src",'assets/note-code.gif'+"?a="+Math.random());
      
      break;
    }
  }
}

/**
 * Close <div>content by id.
 * @param id
 */
function closeContent(id) {
  $(id).fadeOut("slow");
  
  if (id === '#content-1') {
    $('#content-1').fadeOut("slow");
    $('#tab-1').removeClass('tab-active');
    $('#main-content').fadeOut("slow");
    $('#main-title').show();
    $('#layerviewBtn').show();
  }
  
  if(id === '#vanishingPointPanel'){
    $('#secretPanel').show();
  }
  
  if(id === '#videoPanel'){
    $('#notePanel').show();
    $('#notePanel').css('animation', 'fadeIn 1s');
    
    // repeat GIF
    $('#nodeCode').attr("src",'assets/note-code.gif'+"?a="+Math.random());
  }
}

function showVideoPanel() {
  $('#notePanel').fadeOut("slow");
  
  $('#videoPanel').show();
  $('#videoPanel').css('animation', 'fadeInUp 0.5s');
}

function closePeopleInfo(_people) {
  
  // hide info
  $('#peopleInfo').fadeOut("slow");
  $('#img-people').fadeOut('slow');
  
  // show all people
  $('#peopleBtn').show();
  $('#peopleInfo').css('animation', 'fadeIn 1s');
}

function showPeopleInfo(_people) {
  console.warn(_people);
  
  // hide all people
  $('#peopleBtn').fadeOut("slow");
  $('#tab2-title').fadeOut('slow');
  
  // show info panel
  $('#peopleInfo').show();
  $('#peopleInfo').css('animation', 'fadeIn 1s');
  
  // show men's images
  $('#img-people').show();
  $('#img-people').css('animation', 'fadeIn 1s');
  
  switch (_people) {
    case 'bartholomaeusBtn':
      $("#img-people img").css({top: '60%', left: '12%', width: '25%'});
      $('#peopleInfo').css({top: '37%', left: '45%'});
  
      $('#manImage').attr('src', 'assets/last-supper/01-bartholomaeus@3x.png');
      $('#man-name').text('바르톨로메오');
      $('#man-info').text('야고보 곁에 허리를 굽혀 예수님 쪽을 주시하고 있으며, 많이 생각하고 연구하는 스타일이다.');
      
      break;
    case 'jacobusBtn':
      $("#img-people img").css({top: '52%', left: '16%', width: '20%'});
      $('#peopleInfo').css({top: '84%', left: '42%'});
  
      $('#manImage').attr('src', 'assets/last-supper/02-jacobus@3x.png');
      $('#man-name').text('큰 야고보');
      $('#man-info').text('안드레아의 어깨에 손을 얹고 있으며 성격은 남보다 앞서기보다는 보조 역할에 머문다.');
      break;
    case 'andreasBtn':
      $("#img-people img").css({top: '55%', left: '22%', width: '24%'});
      $('#peopleInfo').css({top: '43%', left: '54.5%'});
  
      $('#manImage').attr('src', 'assets/last-supper/03-andreas@3x.png');
      $('#man-name').text('안드레아');
      $('#man-info').text('베드로의 동생이며, 꼼꼼히 살펴보는 사려 깊은 사람으로 친구를 잘 사귀어서 인도자라고도 불렸다.');
      break;
    case 'petrusBtn':
      $("#img-people img").css({top: '60%', left: '30%', width: '30%'});
      $('#peopleInfo').css({top: '40%', left: '65%'});
  
      $('#manImage').attr('src', 'assets/last-supper/04-petrus@3x.png');
      $('#man-name').text('베드로');
      $('#man-info').text('성질이 급한 베드로는 요한에게 배신자가 누구인지 물어보려는 듯 일어서고 있는데 베드로의 오른손에 식사 때 쓰는 칼을 쥔 채 앞에 있는 유다를 건드려 놀라게 하고 잇다.');
      break;
    case 'judasBtn':
      $("#img-people img").css({top: '60%', left: '35%', width: '30%'});
      $('#peopleInfo').css({top: '87%', left: '60.5%'});
  
      $('#manImage').attr('src', 'assets/last-supper/05-judas@3x.png');
      $('#man-name').text('유다');
      $('#man-info').text('예수님을 팔아 넘긴 제자로 예수님과 같은 빵을 집으려고 손을 내밀고 있다.');
      break;
    case 'jonnesBtn':
      $("#img-people img").css({top: '55%', left: '43%', width: '30%'});
      $('#peopleInfo').css({top: '30%', left: '69.5%'});
  
      $('#manImage').attr('src', 'assets/last-supper/06-jonnes@3x.png');
      $('#man-name').text('요한');
      $('#man-info').text('예수님이 가장 아꼈던 제자로 예수님 오른편에 앉아 베드로의 얘기를 듣고 있다.');
      break;
    case 'jesusBtn':
      $("#img-people img").css({top: '55%', left: '50%', width: '33%'});
      $('#peopleInfo').css({top: '91%', left: '63%'});
  
      $('#manImage').attr('src', 'assets/last-supper/00-jesus@3x.png');
      $('#man-name').text('예수');
      $('#man-info').text('자신은 무죄 라며 웅성거리고 있는 제자들 사이에서 예수는 움직이지 않고 고요히 앉아있다.');
      break;
    case 'jamesBtn':
      $("#img-people img").css({top: '55%', left: '61%', width: '32%'});
      $('#peopleInfo').css({top: '23%', left: '33%'});
  
      $('#manImage').attr('src', 'assets/last-supper/07-james@3x.png');
      $('#man-name').text('작은 야고보');
      $('#man-info').text('양쪽팔을 벌리고 비극을 예감한 듯이 공포스럽게 앉아 있다.');
      break;
    case 'thomasBtn':
      $("#img-people img").css({top: '55%', left: '62%', width: '23%'});
      $('#peopleInfo').css({top: '23%', left: '32.5%'});
  
      $('#manImage').attr('src', 'assets/last-supper/08-thomas@3x.png');
      $('#man-name').text('토마스');
      $('#man-info').text('의심이 많은 토마스는 놀람의 표시로 손가락을 들고 설마 나는 아니죠? 라는 듯 자신의 머리를 가리키고 있다.');
      break;
    case 'philipBtn':
      $("#img-people img").css({top: '46%', left: '65%', width: '30%'});
      $('#peopleInfo').css({top: '68%', left: '28.5%'});
  
      $('#manImage').attr('src', 'assets/last-supper/09-philip@3x.png');
      $('#man-name').text('필립보');
      $('#man-info').text('걱정이 많은 필립보는 가슴에 두 손을 모으고 자신의 순결을 주장하고 있다.');
      break;
    case 'mathewBtn':
      $("#img-people img").css({top: '50%', left: '70%', width: '35%'});
      $('#peopleInfo').css({top: '32%', left: '38.5%'});
  
      $('#manImage').attr('src', 'assets/last-supper/10-matthaeus@3x.png');
      $('#man-name').text('마태오');
      $('#man-info').text('마태오는 유대와 성 시몬에게 얼굴을 돌리고 있지만, 예수 쪽으로 두 손을 뻗은 채 믿을 수 없다는 표정을 지으며 두 동료를 바라보고 있다.');
      break;
    case 'thaddaeusBtn':
      $("#img-people img").css({top: '50%', left: '80%', width: '25%'});
      $('#peopleInfo').css({top: '48%', left: '46%'});
  
      $('#manImage').attr('src', 'assets/last-supper/11-thaddaeus@3x.png');
      $('#man-name').text('유대');
      $('#man-info').text('백발의 할아버지로 그린 유대는 갑작스런 사태를 믿을 수 없다는 표정으로 한 손으로 식탁을 짚고 다른 손은 식탁을 내리칠 듯이 들어올리고 있다.');
      break;
    case 'simonBtn':
      $("#img-people img").css({top: '55%', left: '86%', width: '30%'});
      $('#peopleInfo').css({top: '43%', left: '51%'});
  
      $('#manImage').attr('src', 'assets/last-supper/12-simon@3x.png');
      $('#man-name').text('성 시몬');
      $('#man-info').text('신의 율법을 철저히 지키는 열심당원이였으나 예수님의 설교와 기적을 보고 열심당원을 탈퇴하고 제자가 되었다. 최후의 만찬 때 식탁 맨 끝에 앉아 대단한 위엄을 보이고 앉아 있다.');
      break;
  }
}

function showVanishingPointInfo(){
  
  $('#secretPanel').fadeOut("slow");
  $('#vanishingPointPanel').show();
  $('#vanishingPointPanel').css('animation', 'fadeInUp 0.5s');
}

// Register touch event handlers
document.addEventListener('touchmove', process_touchmove, false);

// touchmove handler
function process_touchmove(ev) {
  
  // Set call preventDefault()
  ev.preventDefault();

  let pageX = ev.touches[0].pageX;
  let pageY = ev.touches[0].pageY;
  
  let bg = "-webkit-radial-gradient(" + pageX + "px " + pageY + "px, " + spotlightwidth + "px " + spotlightheight + "px, transparent 50%, #000022)";
  $('#night').css('backgroundImage', bg);
  
  console.warn(`pageX: ${pageX} /// pageY: ${pageY}`);
  console.warn(`screenX: ${screen.width/2} /// screenY: ${screen.height/2}`);
  console.warn('==============');
  
  if (pageX >= screen.width/2 && pageY >= screen.height/2) {
    // $('#centerPoint').show();
    // $('#centerPoint').css('animation', 'fadeIn 1s');
    $('#night').removeClass('notransition');
    
    setTimeout((e) => {
      $('#night').fadeOut("slow");
  
      $('#tab-header').show();
      $('#tab-header').css('animation', 'fadeInDown 1s');
  
      $('#content-3').show();
      $('#content-3').css('animation', 'fadeIn 2s');
    }, 100);
  }
}

// touchstart handler
function process_touchstart(ev) {
  switch (ev.touches.length) {
    case 1:
      console.warn('touch start');
      $('#overlayGuide').fadeOut("slow");
      $('#spotLightBtn').fadeOut("slow");
      break;
    case 2: break;
    case 3: break;
    default: break;
  }
}

