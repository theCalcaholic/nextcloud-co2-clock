(function() {

  let co2clock_container = document.createElement("div");
  co2clock_container.style.width = "100%";
  co2clock_container.style.display = "block";
  co2clock_container.style.marginTop = "2em";
  co2clock_container.style.marginBottom = "2em";
  co2clock_container.style.textAlign = "center";

  let frame = document.createElement("iframe");
  frame.setAttribute("src", "https://www.mcc-berlin.net/fileadmin/data/clock/carbon_clock.htm?i=3267263");
  frame.style.width = "700px";
  frame.style.height = "450px";
  frame.style.marginBottom = "4px";


  let info_link = document.createElement("a");
  info_link.innerText = "Info";
  info_link.href = "https://www.mcc-berlin.net/en/research/co2-budget.html";
  info_link.style.display = "block";
  info_link.style.width = "700px";
  info_link.style.backgroundColor = "black";

  co2clock_container.appendChild(frame);
  co2clock_container.appendChild(info_link);

  let wrapper = document.querySelector(".wrapper .v-align");
  wrapper.appendChild(co2clock_container);

  let zoom = (window.screen.availWidth - 10) /frame.clientWidth;
  //console.log(`window width: ${window.screen.availWidth}, frame width: ${frame.clientWidth}|${frame.offsetWidth}, zoom: ${zoom}`);

  if ( zoom < 1.0 ) {
    frame.style.transform = `scale(${zoom})`;
    let frameMargin = Math.floor((window.screen.availWidth - (frame.clientWidth * zoom)));
    frame.style.transformOrigin = `${frameMargin}px 0`;
    info_link.style.width = `${Math.floor(frame.clientWidth * zoom)}px`;
    info_link.style.marginTop = `${Math.floor(frame.clientHeight * (zoom - 1))}px`;
    info_link.style.marginLeft = "auto";
    info_link.style.marginRight = "auto";
  }

})()

