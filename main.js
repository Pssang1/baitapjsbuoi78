var array = [];
function addNumber() {
  var number = document.getElementById("number").value * 1;
  array.push(number);
  document.getElementById("alert").innerHTML = `Mảng: ${array}`;
}
//ex1
function calcEx1() {
  if (array.length != 0) {
    var sumPostiveArray = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        sumPostiveArray += array[i];
      }
      document.getElementById(
        "card-1"
      ).innerHTML = `Tổng số dương: ${sumPostiveArray}`;
    }
  } else {
    alert("Mảng rỗng");
  }
}
//ex2
function calcEx2() {
  if (array.length != 0) {
    var count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        count++;
      }
      document.getElementById("card-2").innerHTML = `Số dương: ${count}`;
    }
  } else {
    alert("Mảng rỗng");
  }
}
//ex3
function calcEx3() {
  if (array.length != 0) {
    var min = Infinity;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
      document.getElementById("card-3").innerHTML = `Số nhỏ nhất: ${min}`;
    }
  } else {
    alert("Mảng rỗng");
  }
}
//ex4
function calcEx4() {
  if (array.length != 0) {
    var positiveArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        positiveArray.push(array[i]);
      }
    }
    // console.log(positiveArray);
    if (positiveArray != 0) {
      var min = Infinity;
      for (let i = 0; i < positiveArray.length; i++) {
        if (positiveArray[i] < min) {
          min = positiveArray[i];
        }
        document.getElementById(
          "card-4"
        ).innerHTML = `Số dương nhỏ nhất: ${min}`;
      }
    } else {
      document.getElementById(
        "card-4"
      ).innerHTML = `Không có số dương trong mảng`;
    }
  } else {
    alert("Mảng rỗng");
  }
}
//ex5
function calcEx5() {
  if (array.length != 0) {
    var even = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0) {
        even = array[i];
        document.getElementById(
          "card-5"
        ).innerHTML = `Số chẵn cuối cùng: ${even}`;
      } else if (even == 0) {
        document.getElementById(
          "card-5"
        ).innerHTML = `Không có số chẵn nào trong mảng`;
      }
    }
  } else {
    alert("Mảng rỗng");
  }
}
//ex6
function calcEx6() {
  if (array.length != 0) {
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var temp;
    if (number1 < array.length && number2 < array.length) {
      temp = array[number1];
      array[number1] = array[number2];
      array[number2] = temp;
      document.getElementById("card-6").innerHTML = `Mảng sau khi đổi ${array}`;
    } else {
      alert("1 trong 2 vị trí không hợp lệ");
    }
  } else {
    alert("Mảng rỗng");
  }
}
//ex7
function bubleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function calcEx7() {
  document.getElementById(
    "card-7"
  ).innerHTML = `Mảng sau khi sắp xếp ${bubleSort(array)}`;
}
//ex8
function test_prime(n) {
  if (n <= 0) {
    return false;
  } else if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
// console.log(test_prime(-1));
function calcEx8() {
  if (array.length != 0) {
    for (let i = 0; i < array.length; i++) {
      if (test_prime(array[i]) == true) {
        document.getElementById(
          "card-8"
        ).innerHTML = `Số nguyên tố đầu tiên: ${array[i]}`;
        break;
      }
    }
  } else {
    alert("Mảng rỗng");
  }
}
//ex9
var array_ex9 = [];
function addNumberEx9() {
  var number_ex9 = document.getElementById("number-ex9").value * 1;
  array_ex9.push(number_ex9);
  document.getElementById("alert-ex9").innerHTML = `Mảng: ${array_ex9}`;
}
function calcEx9() {
  if (array_ex9.length != 0) {
    var countInteger = 0;
    for (let i = 0; i < array_ex9.length; i++) {
      if (Number.isInteger(array_ex9[i]) == true) {
        countInteger++;
      }
    }
    document.getElementById("card-9").innerHTML = `Số nguyên ${countInteger}`;
  } else {
    alert("Mảng rỗng");
  }
}
//ex10
function calcEx10() {
  if (array.length != 0) {
    positiveCount = 0;
    negativeCount = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        positiveCount++;
      } else if (array[i] < 0) {
        negativeCount++;
      } else {
        positiveCount += 0;
      }
    }
    if (positiveCount > negativeCount) {
      document.getElementById("card-10").innerHTML = `Số dương > Số âm`;
    } else if (positiveCount < negativeCount) {
      document.getElementById("card-10").innerHTML = `Số âm > Số dương`;
    } else {
      document.getElementById("card-10").innerHTML = `Số dương = Số âm`;
    }
    // console.log(positiveCount, negativeCount);
  } else {
    alert("Mảng rỗng");
  }
}
