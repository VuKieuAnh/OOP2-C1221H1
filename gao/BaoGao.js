class BaoGao {
    constructor(can) {
        this.can=can;
    }

    // phuong thuc
    // tham so cua ham
    // cach trien khai cua ham
    dogao(socan, baoGaoKhac){
//tru so can cua bao gao hien tai
        this.can -= socan;
//tang can cua bao gao khac
        baoGaoKhac.can += socan;
    }
}


let baoGaoCuuDoi = new BaoGao(1000);
let gaoCuaKA = new BaoGao(0);
let gaoCuaTuan = new BaoGao(10);
let gaoCuaHieu = new BaoGao(5);
