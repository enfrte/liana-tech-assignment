// To setup, change target and endNums to desired selectors. 

const target = document.querySelector("#company-numbers"); // the element you want to target as the trigger
const numbersClass = '.company-numbers-statistic'; // the css class of the number(s) element you want to target 

const endNums = document.querySelectorAll(numbersClass); 
const endNumsArray = [];

var observer = new IntersectionObserver(changes => {
  for (const change of changes) {
    //console.log(change.target); // the Element target
    // change.isIntersecting returns boolean of whether the element is in the viewport. 
    if (!change.isIntersecting) {
      //console.log('isIntersecting', change.isIntersecting);
      return;
    }
    //console.log("observer called");
    countSetUp(endNumsArray);
    observer.unobserve(target); // don't restart if user scrolls in and out of view
  }
  observer.disconnect(); // clean up, I guess
}, {
  threshold: 1 // the whole of the element has to be in the viewport
});

// note: if you have more than one target (like a class) you can iterate and call an observer for each target
observer.observe(target); // Watch for intersection events on a specific target Element.



function getNumbers(endNums) {
  endNums.forEach(function(endNum) {
    //console.log('endNum.innerHTML:', endNum.innerHTML);
    endNumsArray.push(endNum.innerHTML);
    //countUp(endNum.innerHTML)
  });
  //console.log(endNumsArray);
}
getNumbers(endNums);

function countSetUp(endNumsArray) {
  //console.log(endNumsArray);
  for (let i = 0; i < endNumsArray.length; i++) {
    const endNum = endNumsArray[i];
    //console.log(endNumsArray[i]);
    //setInterval(countUp(endNumsArray[i], i), 1000);
    countUp(endNum, i);
  }
}
//countSetUp(endNumsArray);

function countUp(endNum, index) {
  let startNum = 0;
  //console.log(endNum, index);
  setInterval(function() {
    if (endNum < 300) {
      startNum++;
    } else if (endNum < 1000) {
      startNum += 5
    } else if (endNum < 10000) {
      startNum += 50
    } else if (endNum < 100000) {
      startNum += 500
    } else if (endNum < 1000000) {
      startNum += 5000
    } else {
      startNum += 100000
    }
    if (startNum <= endNum) {
      document.querySelectorAll(numbersClass)[index].innerHTML = startNum;
      //console.log(startNum);
    } else {
      clearInterval()
      document.querySelectorAll(numbersClass)[index].innerHTML = endNum;
    }
  }, 10);

}