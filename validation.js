

export default class Validation {
    constructor(arrListPerson) {
        this.arrListPerson = arrListPerson;
    }

    timKiemOBJ(keyword) {
        let mangTimKiem = [];
        const keywordLowerCase = keyword.toLowerCase();
        for (let i = 0; i < this.arrListPerson.length; i++) {
            const obj = this.arrListPerson[i];
            const tenobjLowerCase = obj.name.toLowerCase();
            if (tenobjLowerCase.includes(keywordLowerCase)) {
                mangTimKiem.push(obj);
            }
        }
        return mangTimKiem;
    }
}