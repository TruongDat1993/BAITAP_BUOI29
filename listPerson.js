

export default class ListPerson {
    mangHocVien = [];
    themHV = function (hv) {
        this.mangHocVien.push(hv);
    }
}
// themDoiTuong = (object) => {
//     this.mangStudent = [];
//     this.mangEployee = [];
//     this.mangCustomer = [];
//     if (object.congViec === "student") {
//         this.mangStudent.push(object);
//     } else if (object.congViec === "employee") {
//         this.mangEployee.push(object);
//     } else if (object.congViec === "customer") {
//         this.mangCustomer.push(object);
//     }
// }
// }