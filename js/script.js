// Set Up Variables
let txt = "";
let byteSize = 64;
let buffer = new ArrayBuffer(byteSize);
let i32View = new Int32Array(buffer);
// Display Variables and Properties
txt += `byteSize is ${byteSize} <br>`;
txt += `i32View is ${i32View} <br>`;
txt += `Byte Length of buffer is ${buffer.byteLength} <br>`;
txt += `Byte Length of i32View is ${i32View.byteLength} <br>`;
txt += `Length of i32View is ${i32View.length} <br>`;
// Set the First Element of i32View to 1
i32View[0] = 1;
// View i32View
txt += `Changing the first element of i32View to 1 gives ${i32View} <br>`;
// Display Information in Browser Window
document.getElementById("displayinfo").innerHTML = txt;
