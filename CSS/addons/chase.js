$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.root').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
  });

$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / 215 * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
  $('.PageSidebar\\/sidebarContainer\\/3Hxpq').css('background', 'radial-gradient(farthest-side at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
  });
