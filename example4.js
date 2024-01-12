let boxes = document.getElementsByClassName("box")
// console.log(boxes)

function getrandomcolor(){ 
    // a + math random() (b-a)
    var1 = Math.ceil(0 + Math.random()*255);
    var2 = Math.ceil(0 + Math.random()*255);
    var3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${var1} , ${var2} , ${var3})`
}

Array.from(boxes).forEach(e => {
    console.log(e)
    e.style.backgroundColor = getrandomcolor()
    e.style.color = getrandomcolor()
    
});


