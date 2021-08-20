(function() {
  let frame = document.createElement("iframe");
  frame.setAttribute("src", "https://www.mcc-berlin.net/fileadmin/data/clock/carbon_clock.htm?i=3267263");
  frame.style.width = "600px";
  frame.style.height = "340px";
  frame.style.marginTop = "2em";
  frame.style.marginBottom = "2em";

  document.querySelector(".wrapper .v-align").appendChild(frame);

  let zoom = (window.screen.availWidth - 10) /frame.clientWidth;
  //console.log(`window width: ${window.screen.availWidth}, frame width: ${frame.clientWidth}|${frame.offsetWidth}, zoom: ${zoom}`);

  if ( zoom < 1.0 ) {
    frame.style.transform = `scale(${zoom})`;
    let frameMargin = Math.floor((window.screen.availWidth - (frame.clientWidth * zoom)));
    frame.style.transformOrigin = `${frameMargin}px 0`;
  }

})()

