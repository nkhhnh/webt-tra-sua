let sp1 = {masp:1,hinhanh:'../img/chauhoa1.PNG', tensp:"Hoa 1", soluong:1, dongia:1000, mota:'Chiều Dài: 10cm -Chiều Rộng: 10cm -Chiều Dày: 11cm'}
let sp2 = {masp:2,hinhanh:'../img/chauhoa2.PNG', tensp:"Hoa 2", soluong:1, dongia:1200, mota:'Chiều Dài: 15cm -Chiều Rộng: 15cm -Chiều Dày: 11cm'}
let sp3 = {masp:3,hinhanh:'../img/chauhoa3.PNG', tensp:"Hoa 3", soluong:1, dongia:1500, mota:'Chiều Dài: 17cm -Chiều Rộng: 17cm -Chiều Dày: 11cm'}
let sp4 = {masp:4,hinhanh:'../img/chauhoa4.PNG', tensp:"Hoa 4", soluong:1, dongia:1000, mota:'Chiều Dài: 20cm -Chiều Rộng: 15cm -Chiều Dày: 11cm'}
let sp5 = {masp:5,hinhanh:'../img/chauhoa5.PNG', tensp:"Hoa 5", soluong:1, dongia:1000, mota:'Chiều Dài: 25cm -Chiều Rộng: 30cm -Chiều Dày: 11cm'}

let dssp = [sp1, sp2, sp3, sp4, sp5]

// Array --> Json

localStorage.setItem("dssp", JSON.stringify(dssp))


