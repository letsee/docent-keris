
let spotlightwidth = 64;
let spotlightheight = 64;

/**
 * Change page function
 * 0: Initial Page (Before Detecting)
 * 1: Main Page
 */
function switchPage(num) {
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
}

function switchTab(num) {
  
  // hide title
  $('#main-title').css('display', 'none');
  $('#btn-layerview').css('display', 'none');
  
  // hide main button
  $('#layerviewBtn').hide();
  
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
      $('#content-1').hide();
      $('#content-3').hide();
      $('#content-4').hide();
      
      break;
    }
    
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
  
      // show overlay for spotlight
      $('#overlay').show();
      $('#night').show();
      let bg = "-webkit-radial-gradient(38% 50%, 64px 64px, transparent 50%, rgb(0, 0, 34))";
      $('#night').css('backgroundImage', bg);
  
      document.addEventListener('touchstart', process_touchstart, false);
      
      break;
    }
    
    case 4: {
      $('#tab-4').addClass('tab-active');
      $('#tab-1').removeClass('tab-active');
      $('#tab-2').removeClass('tab-active');
      $('#tab-3').removeClass('tab-active');
      
      $('#content-1').hide();
      $('#content-2').hide();
      $('#content-3').hide();
      $('#content-4').show();
      // $("#content-4").load();
      
      break;
    }
  }
}

function closeContent(id) {
  $(id).hide();
  
  if(id === '#vanishingPointPanel'){
    $('#secretPanel').show();
  }
  
  if(id === '#videoPanel'){
    $('#notePanel').show();
  }
}

function showVideoPanel() {
  $('#notePanel').hide();
  $('#videoPanel').show();
}

function closePeopleInfo(_people) {
  
  // hide info
  $('#peopleInfo').hide();
  
  // show all people
  $('#u1').show();
  $('#u2').show();
  
  switch (_people) {
    case 'u1':
      break;
    case 'u2':
      break;
  }
  
}

function showPeopleInfo(_people) {

  // show info panel
  $('#peopleInfo').show();
  
  // hide people
  $('#u1').hide();
  $('#u2').hide();
  
  switch (_people) {
    case 'u1':
      break;
    case 'u2':
      break;
  }
}

function showVanishingPointInfo(){
  
  $('#secretPanel').hide();
  $('#vanishingPointPanel').show();
  
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
    
    setTimeout((e) => {
      $('#night').css('animation', 'fadeOut 2s');
  
      $('#tab-header').show();
      $('#tab-header').css('animation', 'fadeInDown 1s');
      $('#night').hide();
  
      $('#content-3').show();
      $('#content-3').css('animation', 'fadeIn 2s');
    }, 500);
  }
}

// touchstart handler
function process_touchstart(ev) {
  switch (ev.touches.length) {
    case 1:
      console.log('touch start');
      $('#overlayGuide').hide();
      $('#spotLightBtn').hide();
      break;
    case 2: break;
    case 3: break;
    default: break;
  }
}

