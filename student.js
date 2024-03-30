

import Person from "./person.js";

export default class Student extends Person {

    constructor(_ma, _name, _address, _email,_congViec, _Toan, _Ly, _Hoa) {
        super(_ma, _name, _address, _email, _congViec);
        this.toan = _Toan;
        this.hoa = _Hoa;
        this.ly = _Ly;
        this.dtb = 0;
    }
    tinhDTB(){
        this.dtb = (this.toan + this.ly + this.hoa)/3;
}
}