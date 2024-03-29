import Person from "./person.js";

export default class Customer extends Person{
    constructor(_ma, _name, _address, _email,_congViec, _nameCTY, _giaTriHoaDon, _danhGia){
        super(_ma, _name, _address, _email, _congViec);
        this.nameCTY = _nameCTY;
        this.giaTriHoaDon = _giaTriHoaDon;
        this.danhGia = _danhGia;
    } 
}