// ============= CARA KAK RANGGA ==========
// const cek = (arr) => {
//   //hitung panjang string pada indeks ke-0 dan ke-1 dari array arr.
//   const arr1 = arr[0].length; // panjang karakter index 0 // GO // 2
//   const arr2 = arr[1].length; // panjang karakter index 1 // GOOGLE // 6
//   //jika panjang dari arr1<arr2 maka..
//   if (arr1 < arr2) {
//     // arr[1] // GOOGLE
//     // arr[0] // GO
//     // GOOGLE.match(GO) -->cara bacanya apakah kata go ada pada kalimat google
//     return arr[1].match(arr[0]); //.match digunakan untuk mencari nilai dalam string dan mengembalikan hasil pencocokan.
//   } else {
//     return arr[0].match(arr[1]);
//   }
// };
// //output
// console.log("return ", cek(["go", "google"])[0]);
// //return  [ 'FE', index: 0, input: 'FEJS', groups: undefined ]

// ============= JAWABAN KUIS NO 28 =============
// soal 28 : membuat function untuk mencocokan/mencari huruf yang sama pada dua kata yang berbeda dalam array.
// contoh : ["GO", "GOOGLE"] --> output: GO

//function ini memiliki nama = cek.
//dan parameter bernama = arr.
const cek = (arr) => {
  //menghitung panjang string pada indeks ke-0 dan ke-1 dari array arr.
  const arr1 = arr[0].length; // panjang karakter index 0 // GO // 2
  const arr2 = arr[1].length; // panjang karakter index 1 // GOOGLE // 6

  if (arr1 < arr2) {
    // arr[1] // GOOGLE
    // arr[0] // GO
    // GOOGLE.match(GO) -->cara bacanya apakah kata go ada pada kalimat google?
    const matchResult = arr[1].match(arr[0]); //.match digunakan untuk mencari nilai yg sama dalam string dan mengembalikan hasil pencocokan.
    return matchResult !== null ? matchResult[0] : null; // ? --> untuk memengevaluasi kondisi // : --> operator ternary
  } else {
    const matchResult = arr[0].match(arr[1]);
    return matchResult !== null ? matchResult[0] : null;
    // if(matchResult){
    //   return matchResult[0]
    // }else{
    //   return null
    // }
  }
};
//output
console.log("return ", cek(["apple", "pineapple"])); //output: apple
console.log("return ", cek(["123", "apple"])); //output: null
