// // Mencari semua kata 'apple' dalam sebuah kalimat
// const kalimat = "i like apple, but i don't like pineapple";
// const kata = kalimat.match(/apple/g); // Output: ['apple']
// console.log(kata);

// // Mencari semua kata yang dimulai dengan huruf 'c' dalam sebuah kalimat
// const text = "Cat, car, and cow are animals.";
// const wordsStartingWithC = text.match(/\b[cC]\w+/g); // Output: ['Cat', 'car', 'cow']
// console.log(wordsStartingWithC);

// const kalimat1 = ["go", "google"];
// const kata1 = kalimat1.match(/go/g); // Output: ['go']
// console.log(kata1);

const array = ["abcd", "1234"];
const joinedString = array.join(" "); // Menggabungkan array menjadi satu string dengan spasi sebagai pemisah
const matches = joinedString.match(); // Mencari kata "go" dalam string
console.log(matches); // Output: ['go', 'go']

const cek = (arr) => {
  //   const arr1 = arr.concat();
  //   console.log("arr ", arr1);
  const arr1 = arr[0].length; // panjang karakter index 0 // GO // 2
  const arr2 = arr[1].length; // panjang karakter index 1 // GOOGLE // 6
  if (arr1 < arr2) {
    // arr[1] // GOOGLE
    // arr[0] // GO
    // GOOGLE.match(GO) -->car bacanya apakah kata go ada pada kalimat google
    return arr[1].match(arr[0]);
  } else {
    return arr[0].match(arr[1]);
  }
};
// console.log("return ", cek(["FE", "FEJS"])[0]);
console.log("return ", cek(["kedokteran", "dokter"])[0]);
// console.log("return ", cek(["123", "ABC"])[0]);
//return  [ 'FE', index: 0, input: 'FEJS', groups: undefined ]
