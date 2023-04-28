//allows embellishments to be used 
dragFunction(document.getElementById("lychee"));
dragFunction(document.getElementById("pbow"));
dragFunction(document.getElementById("wbow"));
dragFunction(document.getElementById("ydog"));
dragFunction(document.getElementById("ystar"));
dragFunction(document.getElementById("twinkle"));
dragFunction(document.getElementById("toast"));
dragFunction(document.getElementById("tae"));
dragFunction(document.getElementById("strawberry"));
dragFunction(document.getElementById("pinkheart"));
dragFunction(document.getElementById("phflower"));
dragFunction(document.getElementById("oski"));
dragFunction(document.getElementById("narutomaki"));
dragFunction(document.getElementById("greenheart"));
dragFunction(document.getElementById("frog"));
dragFunction(document.getElementById("fishbowl"));
dragFunction(document.getElementById("bunny"));
dragFunction(document.getElementById("bubble"));
dragFunction(document.getElementById("angel"));

function dragFunction(item) {
  let pos1=0;
  let pos2=0;
  let pos3=0;
  let pos4=0;
  //onmousedown event occurs when a user presses a mouse button over an HTML element
  item.onmousedown = dropFunction;

  function dropFunction(i) {
    //By assigning the variable to itself, it ensures that its reference remains intact and can be used as expected
    i = i 
    i.preventDefault();
    // client x/y are read-only properties of mouseevent (vertical/horizontal respectively)
    pos3 = i.clientX;
    pos4 = i.clientY;
    document.onmouseup = stopFunction;
    document.onmousemove = itemDrag;
  }

  function itemDrag(i) {
    i = i 
    i.preventDefault();
    // new cursor position
    pos1 = pos3 - i.clientX;
    pos2 = pos4 - i.clientY;
    pos3 = i.clientX;
    pos4 = i.clientY;
    //sets new element position
    item.style.top = (item.offsetTop - pos2) + "px";
    item.style.left = (item.offsetLeft - pos1) + "px";
  }

  function stopFunction() {
    // stops item moving when mouse isnt active 
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

