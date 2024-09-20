// Bai 1

// 1. Ham co san
/*
let arr = [1, 5, 2, 36, 4, 5, 65, 78, 85, 123];
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] >= 10) {
		arr1.push(arr[i]);
	}
}
console.log(arr1);
console.log(arr1.length);
*/

// 2. Random 10 so
/*
let arr = [];
let arr1 = [];
for (let i = 0; i < 10; i++) {
	let randomNum = Math.floor(Math.random() * 100);
	// arr.push(randomNum);
	arr[i] = randomNum;
}
console.log(arr);
for (j in arr) {
	if (arr[j] >= 10) {
		arr1.push(arr[j]);
		// arr[j];
	}
}
console.log(arr1);
*/

// Bai 2 va bai 3
// Bai 2
// let arr = [];

// for (let i = 0; i < 10; i++) {
// 	let randomNum = Math.floor(Math.random() * 100);
// 	arr[i] = randomNum; //  Khởi tạo mảng
// }

// let max = arr[0];
// let sum = 0;
// for (let j = 0; j < arr.length; j++) {
// 	if (arr[j] > max) {
// 		// So sánh số lớn nhất
// 		max = arr[j];
// 	}
// 	sum += arr[j];
// }
// console.log(arr);
// console.log(max);

// console.log(sum); // Bai 3

// Bai 4
// console.log(arr.reverse());
// let arr2 = [];
// for (let p = arr.length - 1; p >= 0; p--) {
// 	// arr2.push(arr[p]);
// 	arr2[arr2.length] = arr[p];
// 	// vi moi lan them la tang lenght va giam index p
// }
// console.log(arr2);

// Bai 5 & 6
// let count = 0;
// let arr3 = [];
// // let arr4 = [];
// for (let x = 0; x < 10; x++) {
// 	let randomNum = Math.floor(Math.random() * 101) - 50;
// 	arr3[x] = randomNum; //  Khởi tạo mảng
// }
// console.log(arr3);
// for (let y = 0; y < arr3.length; y++) {
// 	if (arr3[y] < 0) {
// 		// console.log(arr3[y]);
// 		arr4.push(arr3[y]);
// 	}
// }
// console.log(arr4);
// console.log(arr4.length);

// Bai 6
// let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a1);
// function findNum() {
// 	let soV = document.getElementById("soV").value;
// 	let index = -1;

// 	for (let z = 0; z < soV; z++) {
// 		if (soV == a1[z]) {
// 			index = z;
// 			break;
// 		}
// 	}
// 	if (index != -1) {
// 		console.log("V is in the array");
// 		for (let i = index; i < a1.length; i++) {
// 			a1[i] = a1[i + 1]; // Bai 7
// 			a1[a1.length - 1] = 0;
// 		}
// 		console.log(a1);
// 	} else {
// 		console.log("V is not in the array");
// 	}
// }

// Bai 8
// Tao ra random 10 so ca am va duong
let arr3 = [];
for (let x = 0; x < 10; x++) {
	let randomNum = Math.floor(Math.random() * 101) - 50;
	arr3[x] = randomNum;
}
console.log(arr3);
let arr4 = [...arr3];

for (let i = 0; i < arr4.length; i++) {
	for (let j = 0; j < arr4.length - i - 1; j++) {
		if (arr4[j] < arr4[j + 1]) {
			let temp = arr4[j];
			arr4[j] = arr4[j + 1];
			arr4[j + 1] = temp;
		}
	}
}
console.log(arr4);
// Bai 9
let concatArr = [];
// for (let i = 0; i < arr3.length; i++) {
// 	concatArr.push(arr3[i]);
// }
// for (let i = 0; i < arr4.length; i++) {
// 	concatArr.push(arr4[i]);
// }
concatArr = arr3.concat(arr4);
console.log(concatArr);
