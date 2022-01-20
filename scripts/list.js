

// Handles On Click
function addToList(id, msg, value) {
    var list = document.getElementById('list'); //Lists current <ul> & <il>
    var newLI = document.createElement('li'); 
    var newImg = document.createElement('img');
    console.log(newLI);

    var listLength = document.getElementById('list').getElementsByTagName('li').length //Counts how many items are in the list
    newImg.setAttribute("src", id);
    newLI.innerHTML = '<div class="dImg"><img src=' + id + ' width="50px" height="50px"><div class="dValue">+' +  value + 'NIM </div></div><div class="dMsg">' + msg + '</div>';
    list.prepend(newLI);

    setTimeout(function() {
      newLI.className = newLI.className + " show";
      // if (listLength >= 14){
      //   list.querySelector('li').remove()
      // }
    }, 10);
  }