// khai bao lop Date
class Date {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }

    setDay(newDay){
        this.day = newDay;
    }

    setMonth(newMonth){
        this.month = newMonth;
    }

    setYear(newYear){
        this.year = newYear;
    }
    setDate(newDay, newMonth, newYear){
        this.day = newDay;
        this.month = newMonth;
        this.year = newYear;
    }
    // toString (trả về giá trị chuỗi để mô tả đối tượng)
    toString(){
        if (this.day<10){
            return "0"+ this.day + "/" + this.month + "/" + this.year;
        }
        return this.day + "/" + this.month + "/" + this.year;
    }

}
// khoi tao doi tuong
let ngaycuoicuaD = new Date(2, 2, 2007);
let khaigiangC12 = new Date(24, 12, 2021);
// truy cap phuong thuc cua doi tuong thuoc lop Date
//ten doi tuong. ten phuong thuc
let day = ngaycuoicuaD.getDay(); //2
let month = ngaycuoicuaD.getMonth(); //2
let year = ngaycuoicuaD.getYear();//2007
//đưa ra thông tin của đối tượng đó
alert(ngaycuoicuaD.toString());
ngaycuoicuaD.setDay(5);
ngaycuoicuaD.setMonth(3);
ngaycuoicuaD.setYear(2007);
// đưa ra thông tin
alert(ngaycuoicuaD.toString());
