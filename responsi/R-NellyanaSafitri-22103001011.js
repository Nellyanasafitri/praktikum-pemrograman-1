const arr =[1,3,5,7];
const arr2 =[2,4,7,9];
function seqSearch(arr, data){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] == data){
            return false
        }
        else{
            console.log("ganjil")
        }
    }
    return true
}
Nim = 3
console.log(seqSearch(arr, Nim, true));
console.log(arr[1]);

function bubbleSort(arr2) {
    for (var i = arr2.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (arr2[j] > arr2[j + 1]) {
          var bubble = arr2[j];
          arr2[j] = arr2[j + 1];
          arr2[j + 1] = bubble;
        }
      }
    }
  
    return arr2;
  }
  
  let array = bubbleSort([2]);
  console.log(arr2);
  console.log("genap")
