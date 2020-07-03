
let spotlightwidth = 64;
let spotlightheight = 64;

/**
 * Change page function
 * 0: Initial Page (Before Detecting)
 * 1: Main Page
 */
/*function switchPitage(num) {
  switch (num) {
      // Initial Page
    case 0: {
      $('#capture').css('display', 'block');
      break;
    }
      
      // Main Page
    case 1: {
      $('#capture').css('display', 'none');
      $('#footer').css('display', 'none');
      break;
    }
  }
}*/

const showCapture = () => {
  $('#capture').css('display', 'block');
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
      $('#centerPoint').hide();
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
  
  // console.log(`pageX: ${pageX} /// pageY: ${pageY}`);
  // center: pageX: 564.30078125 /// pageY: 370.0078125
  
  if (pageX >= screen.width/2 && pageY >= screen.height/2) {
    $('#centerPoint').show();
    $('#centerPoint').css('animation', 'fadeIn 1s');
    $('#night').removeClass('notransition');
    
    setTimeout((e) => {
      $('#night').fadeOut("slow");
  
      $('#tab-header').show();
      $('#tab-header').css('animation', 'fadeInDown 1s');
  
      $('#content-3').show();
      $('#content-3').css('animation', 'fadeIn 2s');
    }, 500);
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

