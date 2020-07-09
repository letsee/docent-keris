let spotlightwidth = 64;
let spotlightheight = 64;

const TAB_1 = $('#tab-1');
const TAB_2 = $('#tab-2');
const TAB_3 = $('#tab-3');
const TAB_4 = $('#tab-4');

let lastActiveElement = null;

const showCapture = () => {
  $('#capture').css('display', 'block');
  $('#footer').css('display', 'block');
};

const showMainPage = () => {
  console.warn('showMainPage');
  // TAB_1.addClass('tab-active');
  //showFirstTab();
  
  if (lastActiveElement !== null) {
    if (lastActiveElement.selector === '#tab-2') {
      switchTab(2);
    }
    else if (lastActiveElement.selector === '#tab-3') {
      switchTab(3);
    }
    else if (lastActiveElement.selector === '#tab-4') {
      switchTab(4);
    }
    //else switchTab(1);
  }
  else switchTab(1);
  
  $('#capture').css('display', 'none');
  $('#footer').css('display', 'none');
};

function showFirstTab() {
  
  TAB_2.removeClass('tab-active');
  TAB_3.removeClass('tab-active');
  TAB_4.removeClass('tab-active');
  TAB_1.addClass('tab-active');
  
  // reset abother tabs
  /*TAB_2.css('background-color', 'none !important');
  TAB_3.css('background-color', 'none !important');
  TAB_4.css('background-color', 'none !important');
  
  // set tab-1 active
  TAB_1.css('background-color', '#009bb1 !important');*/
  
  $('#main-content').css('display', 'block');
  $('#content-1').css('display', 'block');
  $('#content-1').css('animation', 'fadeInUp 0.5s');
  
  $('#main-title').fadeOut("slow");
  $('#layerviewBtn').fadeOut("slow");
  
  $('#content-2').css('display', 'none');
  $('#content-3').css('display', 'none');
  $('#content-4').css('display', 'none');
}

function switchTab(num) {
  
  // hide title
  $('#main-title').css('display', 'none');
  $('#btn-layerview').css('display', 'none');
  
  // show main content for all tabs
  $('#main-content').css('display', 'block');
  
  switch (num) {
      
      // Tab 1 => Open the main page
    case 1: {
      TAB_2.removeClass('tab-active');
      TAB_3.removeClass('tab-active');
      TAB_4.removeClass('tab-active');
      TAB_1.addClass('tab-active');
      lastActiveElement = TAB_1;
      
      // reset abother tabs
      /*TAB_2.css('background-color', 'none !important');
      TAB_3.css('background-color', 'none !important');
      TAB_4.css('background-color', 'none !important');
      
      // set tab-1 active
      TAB_1.css('background-color', '#009bb1 !important');*/
      
      $('#main-content').css('display', 'none');
      $('#main-title').css('display', 'block');
      $('#main-title').css('animation', 'fadeIn 1s');
      $('#layerviewBtn').css('display', 'block');
      $('#layerviewBtn').css('animation', 'fadeIn 1s');
      
      break;
    }
      
      // Tab 2
    case 2: {
      console.warn('TAB 2!');
      
      // hide main button
      $('#layerviewBtn').css('display', 'none');
      
      TAB_1.removeClass('tab-active');
      TAB_3.removeClass('tab-active');
      TAB_4.removeClass('tab-active');
      TAB_2.addClass('tab-active');
      lastActiveElement = TAB_2;
      
      // reset another tabs
      /*TAB_1.css('background-color', 'none !important');
      TAB_3.css('background-color', 'none !important');
      TAB_4.css('background-color', 'none !important');
  
      // set tab-2 active
      TAB_2.css('background-color', '#009bb1 !important');*/
      
      $('#content-2').css('display', 'block');
      // $('#content-2').css('animation', 'fadeIn 1s');
      
      // hide all men
      $('#img-people').css('display', 'none');
      
      // hide people info
      $('#peopleInfo').css('display', 'none');
      
      // show all men buttons
      $('#peopleBtn').css('display', 'block');
      // $('#peopleBtn').css('animation', 'fadeIn 1s');
      
      $('#content-1').css('display', 'none');
      $('#content-3').css('display', 'none');
      $('#content-4').css('display', 'none');
      
      break;
    }
      
      // Tab 3
    case 3: {
      // hide main button
      $('#layerviewBtn').css('display', 'none');
      
      TAB_1.removeClass('tab-active');
      TAB_2.removeClass('tab-active');
      TAB_4.removeClass('tab-active');
      TAB_3.addClass('tab-active');
      lastActiveElement = TAB_3;
      
      // reset another tabs
      /*TAB_1.css('background-color', 'none !important');
      TAB_2.css('background-color', 'none !important');
      TAB_4.css('background-color', 'none !important');
  
      // set tab-3 active
      TAB_3.css('background-color', '#009bb1 !important');*/
      
      // hide all
      $('#tab-header').css('display', 'none');
      $('#content-1').css('display', 'none');
      $('#content-2').css('display', 'none');
      $('#content-4').css('display', 'none');
      
      // reset spotlight guide
      $('#centerPoint').css('display', 'none');
      $('#secretPanel').css('display', 'none');
      
      $('#overlayGuide').css('display', 'block');
      $('#spotLightBtn').css('display', 'block');
      $('#night').addClass('notransition');
      
      // show overlay for spotlight
      $('#overlay').css('display', 'block');
      $('#night').css('display', 'block');
      
      let bg = "-webkit-radial-gradient(38% 50%, 64px 64px, transparent 50%, rgb(0, 0, 34))";
      $('#night').css('backgroundImage', bg);
      
      document.addEventListener('touchstart', process_touchstart, false);
      
      break;
    }
      
      // Tab 4
    case 4: {
      // hide main button
      $('#layerviewBtn').css('display', 'none');
      
      TAB_1.removeClass('tab-active');
      TAB_2.removeClass('tab-active');
      TAB_3.removeClass('tab-active');
      TAB_4.addClass('tab-active');
      lastActiveElement = TAB_4;
      
      // reset another tabs
      /*TAB_1.css('background-color', 'none !important');
      TAB_2.css('background-color', 'none !important');
      TAB_3.css('background-color', 'none !important');
  
      // set tab-4 active
      TAB_4.css('background-color', '#009bb1 !important');*/
      
      $('#content-1').css('display', 'none');
      $('#content-2').css('display', 'none');
      $('#content-3').css('display', 'none');
      $('#content-4').css('display', 'block');
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
  // $(id).fadeOut("slow");
  $(id).css('display', 'none');
  
  if (id === '#content-1') {
    $('#content-1').fadeOut("slow");
    
    // set tab-1 active
    TAB_1.addClass('tab-active');
    
    $('#main-content').fadeOut("slow");
    $('#main-title').css('display', 'block');
    $('#layerviewBtn').css('display', 'block');
  }
  
  if(id === '#vanishingPointPanel'){
    $('#secretPanel').css('display', 'block');
  }
  
  if(id === '#videoPanel'){
    $('#notePanel').css('display', 'block');
    $('#notePanel').css('animation', 'fadeIn 1s');
    
    // repeat GIF
    $('#nodeCode').attr("src",'assets/note-code.gif'+"?a="+Math.random());
  }
}

function showVideoPanel() {
  $('#notePanel').fadeOut("slow");
  
  $('#videoPanel').css('display', 'block');
  $('#videoPanel').css('animation', 'fadeInUp 0.5s');
}

function closePeopleInfo(_people) {
  
  // hide info
  $('#peopleInfo').fadeOut("slow");
  $('#img-people').fadeOut('slow');
  
  // show all people
  $('#peopleBtn').css('display', 'block');
  $('#peopleInfo').css('animation', 'fadeIn 1s');
  
  $('#tab2-title').css('display', 'block');
}

function showPeopleInfo(_people) {
  console.warn(_people);
  
  // hide all people
  $('#peopleBtn').fadeOut("slow");
  $('#tab2-title').fadeOut('slow');
  
  // show info panel
  $('#peopleInfo').css('display', 'block');
  $('#peopleInfo').css('animation', 'fadeIn 1s');
  
  // show men's images
  $('#img-people').css('display', 'block');
  $('#img-people').css('animation', 'fadeIn 1s');
  
  switch (_people) {
    case 'bartholomaeusBtn':
      $("#img-people img").css({top: '60%', left: '12%', width: '25%'});
      $('#peopleInfo').css({top: '37%', left: '45%', width: '450px'});
      
      $('#manImage').attr('src', 'assets/last-supper/01-bartholomaeus@3x.png');
      $('#man-name').text('ë°”ë¥´í†¨ë¡œë©”ì˜¤');
      $('#man-info').text('ì•¼ê³ ë³´ ê³ì— í—ˆë¦¬ë¥¼ êµ½í˜€ ì˜ˆìˆ˜ë‹˜ ìª½ì„ ì£¼ì‹œí•˜ê³  ìžˆìœ¼ë©°, ë§Žì´ ìƒê°í•˜ê³  ì—°êµ¬í•˜ëŠ” ìŠ¤íƒ€ì¼ì´ë‹¤.');
      
      break;
    case 'jacobusBtn':
      $("#img-people img").css({top: '52%', left: '16%', width: '20%'});
      $('#peopleInfo').css({top: '84%', left: '42%', width: '450px'});
      
      $('#manImage').attr('src', 'assets/last-supper/02-jacobus@3x.png');
      $('#man-name').text('í° ì•¼ê³ ë³´');
      $('#man-info').html('ì•ˆë“œë ˆì•„ì˜ ì–´ê¹¨ì— ì†ì„ ì–¹ê³  ìžˆìœ¼ë©° <br> ì„±ê²©ì€ ë‚¨ë³´ë‹¤ ì•žì„œê¸°ë³´ë‹¤ëŠ” ë³´ì¡° ì—­í• ì— ë¨¸ë¬¸ë‹¤.');
      
      break;
    case 'andreasBtn':
      $("#img-people img").css({top: '55%', left: '22%', width: '24%'});
      $('#peopleInfo').css({top: '43%', left: '54.5%', width: '450px' });
      
      $('#manImage').attr('src', 'assets/last-supper/03-andreas@3x.png');
      $('#man-name').text('ì•ˆë“œë ˆì•„');
      $('#man-info').text('ë² ë“œë¡œì˜ ë™ìƒì´ë©°, ê¼¼ê¼¼ížˆ ì‚´íŽ´ë³´ëŠ” ì‚¬ë ¤ ê¹Šì€ ì‚¬ëžŒìœ¼ë¡œ ì¹œêµ¬ë¥¼ ìž˜ ì‚¬ê·€ì–´ì„œ ì¸ë„ìžë¼ê³ ë„ ë¶ˆë ¸ë‹¤.');
      break;
    case 'petrusBtn':
      $("#img-people img").css({top: '60%', left: '30%', width: '30%'});
      $('#peopleInfo').css({top: '40%', left: '66.5%', width: '475px'});
      
      $('#manImage').attr('src', 'assets/last-supper/04-petrus@3x.png');
      $('#man-name').text('ë² ë“œë¡œ');
      $('#man-info').text('ì„±ì§ˆì´ ê¸‰í•œ ë² ë“œë¡œëŠ” ìš”í•œì—ê²Œ ë°°ì‹ ìžê°€ ëˆ„êµ¬ì¸ì§€ ë¬¼ì–´ë³´ë ¤ëŠ” ë“¯ ì¼ì–´ì„œê³  ìžˆëŠ”ë° ë² ë“œë¡œì˜ ì˜¤ë¥¸ì†ì— ì‹ì‚¬ ë•Œ ì“°ëŠ” ì¹¼ì„ ì¥” ì±„ ì•žì— ìžˆëŠ” ìœ ë‹¤ë¥¼ ê±´ë“œë ¤ ë†€ë¼ê²Œ í•˜ê³  ìžˆë‹¤.');
      
      break;
    case 'judasBtn':
      $("#img-people img").css({top: '60%', left: '35%', width: '30%'});
      $('#peopleInfo').css({top: '87%', left: '60.3%', width: '450px'});
      
      $('#manImage').attr('src', 'assets/last-supper/05-judas@3x.png');
      $('#man-name').text('ìœ ë‹¤');
      $('#man-info').html('ì˜ˆìˆ˜ë‹˜ì„ íŒ”ì•„ ë„˜ê¸´ ì œìžë¡œ <br> ì˜ˆìˆ˜ë‹˜ê³¼ ê°™ì€ ë¹µì„ ì§‘ìœ¼ë ¤ê³  ì†ì„ ë‚´ë°€ê³  ìžˆë‹¤.');
      
      break;
    case 'jonnesBtn':
      $("#img-people img").css({top: '55%', left: '43%', width: '30%'});
      $('#peopleInfo').css({top: '30%', left: '69.5%', width: '450px'});
      
      $('#manImage').attr('src', 'assets/last-supper/06-jonnes@3x.png');
      $('#man-name').text('ìš”í•œ');
      $('#man-info').html('ì˜ˆìˆ˜ë‹˜ì´ ê°€ìž¥ ì•„ê¼ˆë˜ ì œìžë¡œ <br> ì˜ˆìˆ˜ë‹˜ ì˜¤ë¥¸íŽ¸ì— ì•‰ì•„ ë² ë“œë¡œì˜ ì–˜ê¸°ë¥¼ ë“£ê³  ìžˆë‹¤.');
      break;
    case 'jesusBtn':
      $("#img-people img").css({top: '55%', left: '50%', width: '33%'});
      $('#peopleInfo').css({top: '91%', left: '63%', width: '450px'});
      
      $('#manImage').attr('src', 'assets/last-supper/00-jesus@3x.png');
      $('#man-name').text('ì˜ˆìˆ˜');
      $('#man-info').html('ìžì‹ ì€ ë¬´ì£„ ë¼ë©° ì›…ì„±ê±°ë¦¬ê³  ìžˆëŠ” ì œìžë“¤ ì‚¬ì´ì—ì„œ <br> ì˜ˆìˆ˜ëŠ” ì›€ì§ì´ì§€ ì•Šê³  ê³ ìš”ížˆ ì•‰ì•„ìžˆë‹¤.');
      break;
    case 'jamesBtn':
      $("#img-people img").css({top: '55%', left: '61%', width: '32%'});
      $('#peopleInfo').css({top: '27%', left: '33%', width: '470px'});
      
      $('#manImage').attr('src', 'assets/last-supper/07-james@3x.png');
      $('#man-name').text('ìž‘ì€ ì•¼ê³ ë³´');
      $('#man-info').text('ì–‘ìª½íŒ”ì„ ë²Œë¦¬ê³  ë¹„ê·¹ì„ ì˜ˆê°í•œ ë“¯ì´ ê³µí¬ìŠ¤ëŸ½ê²Œ ì•‰ì•„ ìžˆë‹¤.');
      break;
    case 'thomasBtn':
      $("#img-people img").css({top: '55%', left: '62%', width: '23%'});
      $('#peopleInfo').css({top: '23%', left: '32.5%', width: '455px'});
      
      $('#manImage').attr('src', 'assets/last-supper/08-thomas@3x.png');
      $('#man-name').text('í† ë§ˆìŠ¤');
      $('#man-info').html('ì˜ì‹¬ì´ ë§Žì€ í† ë§ˆìŠ¤ëŠ” ë†€ëžŒì˜ í‘œì‹œë¡œ ì†ê°€ë½ì„ ë“¤ê³  <br> ì„¤ë§ˆ ë‚˜ëŠ” ì•„ë‹ˆì£ ? ë¼ëŠ” ë“¯ ìžì‹ ì˜ ë¨¸ë¦¬ë¥¼ ê°€ë¦¬í‚¤ê³  ìžˆë‹¤.');
      break;
    case 'philipBtn':
      $("#img-people img").css({top: '46%', left: '65%', width: '30%'});
      $('#peopleInfo').css({top: '68%', left: '32.5%', width: '380px'});
      
      $('#manImage').attr('src', 'assets/last-supper/09-philip@3x.png');
      $('#man-name').text('í•„ë¦½ë³´');
      $('#man-info').text('ê±±ì •ì´ ë§Žì€ í•„ë¦½ë³´ëŠ” ê°€ìŠ´ì— ë‘ ì†ì„ ëª¨ìœ¼ê³  ìžì‹ ì˜ ìˆœê²°ì„ ì£¼ìž¥í•˜ê³  ìžˆë‹¤.');
      break;
    case 'mathewBtn':
      $("#img-people img").css({top: '50%', left: '70%', width: '35%'});
      $('#peopleInfo').css({top: '32%', left: '38%', width: '465px'});
      
      $('#manImage').attr('src', 'assets/last-supper/10-matthaeus@3x.png');
      $('#man-name').text('ë§ˆíƒœì˜¤');
      $('#man-info').html('ë§ˆíƒœì˜¤ëŠ” ìœ ëŒ€ì™€ ì„± ì‹œëª¬ì—ê²Œ ì–¼êµ´ì„ ëŒë¦¬ê³  ìžˆì§€ë§Œ, <br> ì˜ˆìˆ˜ ìª½ìœ¼ë¡œ ë‘ ì†ì„ ë»—ì€ ì±„ ë¯¿ì„ ìˆ˜ ì—†ë‹¤ëŠ” í‘œì •ì„ ì§€ìœ¼ë©° ë‘ ë™ë£Œë¥¼ ë°”ë¼ë³´ê³  ìžˆë‹¤.');
      break;
    case 'thaddaeusBtn':
      $("#img-people img").css({top: '50%', left: '80%', width: '25%'});
      $('#peopleInfo').css({top: '48%', left: '48.5%', width: '400px'});
      
      $('#manImage').attr('src', 'assets/last-supper/11-thaddaeus@3x.png');
      $('#man-name').text('ìœ ëŒ€');
      $('#man-info').text('ë°±ë°œì˜ í• ì•„ë²„ì§€ë¡œ ê·¸ë¦° ìœ ëŒ€ëŠ” ê°‘ìž‘ìŠ¤ëŸ° ì‚¬íƒœë¥¼ ë¯¿ì„ ìˆ˜ ì—†ë‹¤ëŠ” í‘œì •ìœ¼ë¡œ í•œ ì†ìœ¼ë¡œ ì‹íƒì„ ì§šê³  ë‹¤ë¥¸ ì†ì€ ì‹íƒì„ ë‚´ë¦¬ì¹  ë“¯ì´ ë“¤ì–´ì˜¬ë¦¬ê³  ìžˆë‹¤.');
      break;
    case 'simonBtn':
      $("#img-people img").css({top: '55%', left: '86%', width: '30%'});
      $('#peopleInfo').css({top: '40%', left: '47%', width: '525px'});
      
      $('#manImage').attr('src', 'assets/last-supper/12-simon@3x.png');
      $('#man-name').text('ì„± ì‹œëª¬');
      $('#man-info').html('ì‹ ì˜ ìœ¨ë²•ì„ ì² ì €ížˆ ì§€í‚¤ëŠ” ì—´ì‹¬ë‹¹ì›ì´ì˜€ìœ¼ë‚˜ ì˜ˆìˆ˜ë‹˜ì˜ ì„¤êµì™€ <br> ê¸°ì ì„ ë³´ê³  ì—´ì‹¬ë‹¹ì›ì„ íƒˆí‡´í•˜ê³  ì œìžê°€ ë˜ì—ˆë‹¤. <br> ìµœí›„ì˜ ë§Œì°¬ ë•Œ ì‹íƒ ë§¨ ëì— ì•‰ì•„ ëŒ€ë‹¨í•œ ìœ„ì—„ì„ ë³´ì´ê³  ì•‰ì•„ ìžˆë‹¤.');
      break;
  }
}

function showVanishingPointInfo(){
  
  $('#secretPanel').fadeOut("slow");
  $('#vanishingPointPanel').css('display', 'block');
  $('#vanishingPointPanel').css('animation', 'fadeInUp 0.5s');
}

function callAutoLight(){
  $('#centerPoint').css('display', 'block');
  $('#centerPoint').css('animation', 'fadeIn 1s');
  $('#night').removeClass('notransition');
  $('#night').fadeOut("slow");
  
  $('#tab-header').css('display', 'block');
  // $('#tab-header').css('animation', 'fadeInDown 1s');
  
  $('#content-3').css('display', 'block');
  $('#content-3').css('animation', 'fadeIn 2s');
  
  $('#secretPanel').css('display', 'block');
  $('#spotLightBtn').css('display', 'none');
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
  
  // console.warn(ev);
  // console.warn(`pageX: ${pageX} /// pageY: ${pageY}`);
  // console.warn(`screenX: ${screen.width/2} /// screenY: ${screen.height/2}`);
  // console.warn(`windowX: ${ window.innerWidth / 2} /// windowY: ${window.innerHeight / 2}`);
  // console.warn('==============');
  
  if (pageX >= window.innerWidth / 2 && pageY >= window.innerHeight / 2) {
    $('#centerPoint').css('display', 'block');
    $('#centerPoint').css('animation', 'fadeIn 1s');
    $('#night').removeClass('notransition');
    
    setTimeout((e) => {
      $('#night').fadeOut("slow");
      $('#spotLightBtn').fadeOut("slow");
      
      $('#tab-header').css('display', 'block');
      // $('#tab-header').css('animation', 'fadeInDown 1s');
      
      // Only proceed if tab-3 is active
      if (lastActiveElement !== null && lastActiveElement.selector === '#tab-3') {
        $('#content-3').css('display', 'block');
        $('#content-3').css('animation', 'fadeIn 2s');
        
        $('#secretPanel').css('display', 'block');
      }
      
    }, 100);
  }
}

// touchstart handler
function process_touchstart(ev) {
  switch (ev.touches.length) {
    case 1:
      console.warn('touch start');
      
      $('#overlayGuide').fadeOut("slow");
      // $('#spotLightBtn').fadeOut("slow");
      
      break;
    case 2: break;
    case 3: break;
    default: break;
  }
}
