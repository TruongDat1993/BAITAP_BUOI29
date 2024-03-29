import Student from "./student.js";
import Customer from "./customer.js";
import Employee from "./employee.js";
import Person from "./person.js";
import ListPerson from "./listPerson.js";
let arrStudents = [];
let arrEmployee = [];
let arrListPerson = [];
function getEle(id) {
    return document.getElementById(id)
}

getEle("mySelect").addEventListener("change", () => {
    let check = getEle("mySelect").value;
    let content = "";
    if (check === "student") {
        content = `
        <form role="form">
        <div class="form-group" id="maSo">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                </div>
                <input type="text" name="tk" id="inputMaSo" class="form-control input-sm"
                    placeholder="Mã số">
            </div>
            <span class="sp-thongbao" id="tbMaSo"></span>
        </div>


        <div class="form-group" id="name">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-address-book"></i></span>
                </div>
                <input type="name" name="name" id="inputName" class="form-control input-sm"
                    placeholder="Họ và tên">
            </div>
            <span class="sp-thongbao" id="tbName"></span>
        </div>
        

        <div class="form-group" id="email">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                </div>
                <input type="email" name="email" id="inputEmail" class="form-control input-sm"
                    placeholder="Email">
            </div>
            <span class="sp-thongbao" id="tbEmail"></span>
        </div>

        <div class="form-group" id="address">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                </div>
                <input type="email" name="email" id="inputAddress" class="form-control input-sm"
                    placeholder="Địa chỉ">
            </div>
            <span class="sp-thongbao" id="tbAddress"></span>
        </div>


        <div class="form-group" id="diemToan">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-book"></i></span>
                </div>
                <input type="text" name="password" id="inputDiemToan" class="form-control input-sm"
                    placeholder="Điểm Toán">
            </div>
            <span class="sp-thongbao" id="tbDiemToan"></span>
        </div>
        
        <div class="form-group" id="diemLy">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-book"></i></span>
                </div>
                <input type="text" name="ngaylam" id="inputDiemLy" class="form-control"
                    placeholder="Điểm Lí">
            </div>
            <span class="sp-thongbao" id="tbDiemLy"></span>
        </div>


        <div class="form-group" id="diemHoa">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-book" aria-hidden="true"></i></span>
                </div>
                <input type="text" name="luongCB" id="inputDiemHoa" class="form-control input-sm"
                    placeholder="Điểm Hóa">
            </div>
            <span class="sp-thongbao" id="tbDiemHoa"></span>
        </div>
        </div>
    </form >`;
    } else if (check === "employee") {
        content = `
        <form role="form">
        <div class="form-group" id="maSo">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                </div>
                <input type="text" name="tk" id="inputMaSo" class="form-control input-sm"
                    placeholder="Mã số">
            </div>
            <span class="sp-thongbao" id="tbMaSo"></span>
        </div>
        <div class="form-group" id="name">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-address-book"></i></span>
                </div>
                <input type="name" name="name" id="inputName" class="form-control input-sm"
                    placeholder="Họ và tên">
            </div>
            <span class="sp-thongbao" id="tbName"></span>
        </div>
        <div class="form-group" id="email">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                </div>
                <input type="email" name="email" id="inputEmail" class="form-control input-sm"
                    placeholder="Email">
            </div>
            <span class="sp-thongbao" id="tbEmail"></span>
        </div>
        <div class="form-group" id="address">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                </div>
                <input type="email" name="email" id="inputAddress" class="form-control input-sm"
                    placeholder="Địa chỉ">
            </div>
            <span class="sp-thongbao" id="tbAddress"></span>
        </div>
        <div class="form-group" id="soNgay">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-key"></i></span>
                </div>
                <input type="number" name="" id="inputSoNgay" class="form-control input-sm"
                    placeholder="Nhập số ngay làm">
            </div>
            <span class="sp-thongbao" id="tbSoNgay"></span>
        </div>
        <div class="form-group" id="luongNgay">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-calendar"></i></span>
                </div>
                <input type="text" name="ngaylam" id="inputLuongNgay" class="form-control"
                    placeholder="nhập lương một ngày">
            </div>
            <span class="sp-thongbao" id="tbLuongNgay"></span>
        </div>
    </form >
        `
    } else if (check === "customer") {
        content = `
        <form role="form">
        <div class="form-group" id="maSo">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                </div>
                <input type="text" name="" id="inputMaSo" class="form-control input-sm"
                    placeholder="Mã số">
            </div>
            <span class="sp-thongbao" id="tbMaSo"></span>
        </div>
        <div class="form-group" id="name">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-address-book"></i></span>
                </div>
                <input type="name" name="name" id="inputName" class="form-control input-sm"
                    placeholder="Họ và tên">
            </div>
            <span class="sp-thongbao" id="tbName"></span>
        </div>
        <div class="form-group" id="email">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-envelope"></i></span>
            </div>
            <input type="email" name="email" id="inputEmail" class="form-control input-sm"
                placeholder="Email">
        </div>
        <span class="sp-thongbao" id="tbEmail"></span>
    </div>

    <div class="form-group" id="address">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-envelope"></i></span>
            </div>
            <input type="email" name="email" id="inputAddress" class="form-control input-sm"
                placeholder="Địa chỉ">
        </div>
        <span class="sp-thongbao" id="tbAddress"></span>
    </div>
    <div class="form-group" id="tenCongTy">
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-envelope"></i></span>
        </div>
        <input type="text" name="" id="inputtenCongTy" class="form-control input-sm"
            placeholder="Tên công ty">
    </div>
    <span class="sp-thongbao" id="tbtenCongTy"></span>
</div>
    <div class="form-group" id="giaTriHoaDon">
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-envelope"></i></span>
        </div>
        <input type="number" name="" id="inputgiaTriHoaDon" class="form-control input-sm"
            placeholder="giá trị hoá đơn">
    </div>
    <span class="sp-thongbao" id="tbgiaTriHoaDon"></span>
</div>
<div class="form-group" id="danhGia">
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-envelope"></i></span>
        </div>
        <input type="text" name="email" id="inputdanhGia" class="form-control input-sm"
            placeholder="Đánh giá">
    </div>
    <span class="sp-thongbao" id="tbdanhGia"></span>
</div>
        </form>
        `
    }
    getEle("render").innerHTML = content;
});

getEle("btnThemDoiTuong").onclick = () => {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Add Đối Tượng";

    //creat button "Add object"
    const btnAdd = `<button class="btn btn-success" onclick="addDoiTuong()">Add Đối Tượng</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;
}

function layThongTinDoiTuong() {
    const check = getEle("mySelect").value;

    const _ma = getEle("inputMaSo").value;
    const _name = getEle("inputName").value;
    const _address = getEle("inputAddress").value;
    const _email = getEle("inputEmail").value;
    const _congViec = getEle("mySelect").value;
    let obj = Object();

    if (check === "student") {
        const _Hoa = Number(getEle("inputDiemHoa").value);
        const _Toan = Number(getEle("inputDiemToan").value);
        const _Ly = Number(getEle("inputDiemLy").value);
        obj = new Student(_ma, _name, _address, _email, _congViec, _Toan, _Ly, _Hoa);
        obj.tinhDTB();

    } else if (check === "employee") {
        const _soNgayLam = Number(getEle("inputSoNgay").value);
        const _luongNgay = Number(getEle("inputLuongNgay").value);
        obj = new Employee(_ma, _name, _address, _email, _congViec, _soNgayLam, _luongNgay);
        obj.tinhLuong();
    } else {
        obj = new Customer(_ma, _name, _address, _email, _congViec, _nameCTY, _giaTriHoaDon, _danhGia);
    }
    return obj;
}

const hienThiDanhSachHocVien = (data) => {
    let content = "";
    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        content += `
    <tr>
    <td>${i + 1}</td>
    <td>${obj.ma}</td>
    <td>${obj.name}</td>
    <td>${obj.address}</td>
    <td>${obj.email}</td>
    <td>${obj.congViec}</td>

    <td>
    <button id="editPerson" class = "btn btn-info" data-toggle="modal" data-target="#myModal" onclick ="editDoiTuong('${obj.ma}')">Edit</button>
    <button class = "btn btn-danger" onclick="deleteDoiTuong('${obj.ma}')">Delete</button>
    </td>
    </tr>
    `
    }
    getEle("tblDanhSachDoiTuong").innerHTML = content;
}
function addDoiTuong() {
    let objHocVien = layThongTinDoiTuong();
    arrListPerson.push(objHocVien);
    console.log(arrListPerson);
    setLocalStorage(arrListPerson);
    if (objHocVien.congViec === "student") {
        arrStudents.push(objHocVien)
    } else if (objHocVien.congViec === "employee") {
        arrEmployee.push(objHocVien);
    }

    hienThiDanhSachHocVien(arrListPerson);
};
window.addDoiTuong = addDoiTuong;

// xoá đối tượng
const timViTri = (ma) => {
    let index = -1;
    for (let i = 0; i < arrListPerson.length; i++) {
        const obj = arrListPerson[i];
        if (obj.ma === ma) {
            index = i;
            break;
        }
    }
    return index;
}

const deleteDoiTuong = (ma) => {
    console.log(ma)
    let index = timViTri(ma);
    arrListPerson.splice(index, 1);
    hienThiDanhSachHocVien(arrListPerson);
}
window.deleteDoiTuong = deleteDoiTuong;

//cập nhật

const editDoiTuong = (ma) => {
    document.getElementsByClassName("modal-title")[0].innerHTML = "chỉnh sửa Đối Tượng";

    //creat button "update Object"
    const btnupdate = `<button class="btn btn-success" onclick="updateDoiTuong()">Update Đối Tượng</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = btnupdate;
    const index = timViTri(ma);
    const obj = arrListPerson[index];
    if(obj.congViec === "student"){
        getEle("mySelect").value = obj.congViec;
        getEle("inputMaSo").value = obj.ma;
        getEle("inputMaSo").disabled = true;
        getEle("inputName").value = obj.name;
        getEle("inputAddress").value = obj.address;
        getEle("inputEmail").value = obj.email;
        getEle("inputDiemToan").value = obj.toan;
        getEle("inputDiemLy").value = obj.ly;
        getEle("inputDiemHoa").value = obj.hoa;
    }

}
window.editDoiTuong = editDoiTuong;

const updateDoiTuong = () => {

}
window.updateDoiTuong = updateDoiTuong;

const setLocalStorage = (arr)=>{
    const arrString = JSON.stringify(arr);
    localStorage.setItem("DSHV",arrString);
}
