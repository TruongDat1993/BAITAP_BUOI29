import Person from "./person.js";

export default class Employee extends Person {
    constructor(_ma, _name, _address, _email, _congViec, _soNgayLam, _luongNgay) {
        super(_ma, _name, _address, _email, _congViec);
        this.soNgaylam = _soNgayLam;
        this.luongNgay = _luongNgay;
        this.tongLuong = this.tinhLuong();
    }
    tinhLuong = () =>this.soNgaylam * this.luongNgay;
}