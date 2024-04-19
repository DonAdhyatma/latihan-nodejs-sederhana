console.log("server running...")
// ada 3 jenis variable atau penampung data
// const, let, dan var tetapi karena var sudah usang jadi sudah jarang digunakan
let namaGue = "Dea Afrizal"
let UsiaGue = 0
// const namaLoe = "Raffi Ahmad"
// perbedaan variable const dan let yaitu, untuk variable let nilai/datanya bisa berubah-ubah,
// sedangkan untuk variable const nilai/datanya tetap tidak bisa berubah-ubah
namaGue = "Danni Adhyatma"
let hobiGue
const muda = "gue masih muda"
const tua = "gue sudah tua"
function panggilSaya() {
  if (UsiaGue > 0 && UsiaGue <= 25) {
    hobiGue = "ngulik"
    console.log(`hey, nama gue ${namaGue}, usia gue ${UsiaGue} tahun dan hobi gue adalah ${hobiGue} ternyata ${muda}`)
  }
  else if (UsiaGue > 25) {
    hobiGue = "mancing"
    console.log(`hey, nama gue ${namaGue}, dan usia gue ${UsiaGue} tahun dan hobi gue adalah ${hobiGue} ternyata ${tua}`)
  }
  else {
    console.log("ada kesalahan memasukan nilai")
  }
}

panggilSaya()