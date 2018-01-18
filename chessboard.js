function chessboard(size) {
  let pattern = [];
  let pattern2 = [];
  for (let i = 0; i < size; i++) {
    pattern.length % 2 !== 0 ? pattern.push("#") : pattern.push(" ");
  }
  for (let a = 0; a < size; a++) {
    pattern2.length % 2 !== 0 ? pattern2.push(" ") : pattern2.push("#");
  }
  for (let c = 0; c < size ; c++) {
    c % 2 === 0 ? console.log(pattern.join("")) : console.log(pattern2.join(""))
  }
}
