// const cek = (arr) => {
// //   const arr1 = arr[0].length; // panjang karakter index 0 // GO // 2
// //   const arr2 = arr[1].length; // panjang karakter index 1 // GOOGLE // 6
// //   if (arr1 < arr2) {
// //     // Jika panjang string pertama lebih kecil dari panjang string kedua
// //     const hasil = arr[1].match(arr[0]); // Mencari pola dari string kedua dalam string pertama
// //     return hasil ? hasil[1] : null; // Jika hasil pencocokan tidak null, kembalikan elemen kedua dari hasilnya
// //   } else {
// //     // Jika panjang string pertama lebih besar atau sama dengan panjang string kedua
// //     const hasil = arr[0].match(arr[1]); // Mencari pola dari string pertama dalam string kedua
// //     return hasil ? hasil[1] : null; // Jika hasil pencocokan tidak null, kembalikan elemen kedua dari hasilnya
// //   }
// // };

// // console.log("return ", cek(["FEJS", "FE"])); // Output: "FE"

// const cek2 = (arr) => {
//   const arr1 = arr[0].length; // panjang karakter index 0 // GO // 2
//   const arr2 = arr[1].length; // panjang karakter index 1 // GOOGLE // 6
//   if (arr1 < arr2) {
//     // Jika panjang string pertama lebih kecil dari panjang string kedua
//     const matchResult = arr[1].match(arr[0]); // Mencari pola dari string kedua dalam string pertama
//     return matchResult ? matchResult[1] : null; // Mengembalikan hasil pencocokan pertama atau null jika tidak ada hasil pencocokan
//   } else {
//     // Jika panjang string pertama lebih besar atau sama dengan panjang string kedua
//     const matchResult = arr[0].match(arr[1]); // Mencari pola dari string pertama dalam string kedua
//     return matchResult ? matchResult[0] : null; // Mengembalikan hasil pencocokan pertama atau null jika tidak ada hasil pencocokan
//   } //  if(matchResult){
//   //     return matchResult[0]
//   //  }else{
//   //     return null
//   //  }
// };

// console.log("return ", cek2(["js", "fejs"])); // Output: "FE"

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
console.log("return ", cek(["apple", "pineapple"]));
console.log("return ", cek(["123", "apple"]));
