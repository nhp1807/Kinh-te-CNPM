function calculateTAW() {
    var agent1 = document.getElementById('agent1').value;
    var agent2 = document.getElementById('agent2').value;
    var agent3 = document.getElementById('agent3').value;
    var taw = 0;
    taw = agent1 * 1 + agent2 * 2 + agent3 * 3;
    document.getElementById('taw').innerHTML = 'TAW: ' + taw;
    return taw;
}

function calculateTBF(){
    var b1 = document.getElementById('b1').value * 5 * 1;
    var b2 = document.getElementById('b2').value * 10 * 1;
    var b3 = document.getElementById('b3').value * 15 * 1;
    var m1 = document.getElementById('m1').value * 5 * 1.2;
    var m2 = document.getElementById('m2').value * 10 * 1.2;
    var m3 = document.getElementById('m3').value * 15 * 1.2;
    var t1 = document.getElementById('t1').value * 5 * 1.5;
    var t2 = document.getElementById('t2').value * 10 * 1.5;
    var t3 = document.getElementById('t3').value * 15 * 1.5;
    var tbf = b1 + b2 + b3 + m1 + m2 + m3 + t1 + t2 + t3;
    document.getElementById('tbf').innerHTML = 'TBF: ' + tbf;
    return tbf;
}

function calculateTFW(){
    var twf1 = 2 * parseFloat(document.getElementById('q1').value);
    var twf2 = 1 * parseFloat(document.getElementById('q2').value);
    var twf3 = 1 * parseFloat(document.getElementById('q3').value);
    var twf4 = 1 * parseFloat(document.getElementById('q4').value);
    var twf5 = 1 * parseFloat(document.getElementById('q5').value);
    var twf6 = 0.5 * parseFloat(document.getElementById('q6').value);
    var twf7 = 0.5 * parseFloat(document.getElementById('q7').value);
    var twf8 = 2 * parseFloat(document.getElementById('q8').value);
    var twf9 = 1 * parseFloat(document.getElementById('q9').value);
    var twf10 = 1 * parseFloat(document.getElementById('q10').value);
    var twf11 = 1 * parseFloat(document.getElementById('q11').value);
    var twf12 = 1 * parseFloat(document.getElementById('q12').value);
    var twf13 = 1 * parseFloat(document.getElementById('q13').value);

    var tfw = twf1 + twf2 + twf3 + twf4 + twf5 + twf6 + twf7 + twf8 + twf9 + twf10 + twf11 + twf12 + twf13;
    document.getElementById('tfw').innerHTML = 'TFW: ' + tfw;
    return tfw;
}

function calculateTCF(){
    var tcf = 0.6 + (0.01 * calculateTFW());
    document.getElementById('tcf').innerHTML = 'TCF: ' + tcf;
    return tcf;
}

function calculateEFW(){
    var ef1 = 1.5 * parseFloat(document.getElementById('mP1').value);
    var ef2 = 0.5 * parseFloat(document.getElementById('mP2').value);
    var ef3 = 1 * parseFloat(document.getElementById('mP3').value);
    var ef4 = 0.5 * parseFloat(document.getElementById('mP4').value);
    var ef5 = 1 * parseFloat(document.getElementById('mP5').value);
    var ef6 = 2 * parseFloat(document.getElementById('mP6').value);
    var ef7 = -1 * parseFloat(document.getElementById('mP7').value);
    var ef8 = -1 * parseFloat(document.getElementById('mP8').value);
    var efw = ef1 + ef2 + ef3 + ef4 + ef5 + ef6 + ef7 + ef8;

    document.getElementById('efw').innerHTML = 'EFW: ' + efw;
    return efw;
}

function calculateES(){
    var ef1 = 1.5 * parseFloat(document.getElementById('mP1').value);
    var ef2 = 0.5 * parseFloat(document.getElementById('mP2').value);
    var ef3 = 1 * parseFloat(document.getElementById('mP3').value);
    var ef4 = 0.5 * parseFloat(document.getElementById('mP4').value);
    var ef5 = 1 * parseFloat(document.getElementById('mP5').value);
    var ef6 = 2 * parseFloat(document.getElementById('mP6').value);
    var ef7 = -1 * parseFloat(document.getElementById('mP7').value);
    var ef8 = -1 * parseFloat(document.getElementById('mP8').value);
    var es1 = checkInterpolation(ef1);
    var es2 = checkInterpolation(ef2);
    var es3 = checkInterpolation(ef3);
    var es4 = checkInterpolation(ef4);
    var es5 = checkInterpolation(ef5);
    var es6 = checkInterpolation(ef6);
    var es7 = checkInterpolation(ef7);
    var es8 = checkInterpolation(ef8);
    var es = es1 + es2 + es3 + es4 + es5 + es6 + es7 + es8;

    document.getElementById('es').innerHTML = 'ES: ' + es;
    return es;
}

function calculateEF(){
    var efw = calculateEFW();
    var ef = 1.4 + (-0.03 * efw);

    document.getElementById('ef').innerHTML = 'EF: ' + ef;
    return ef;
}

function calculateP(){
    var es = calculateES();
    var p = 0;

    if(es >= 3){
        p = 20;
    }else if(es >= 1){
        p = 32;
    }else{
        p = 48;
    }

    document.getElementById('p').innerHTML = 'P: ' + p;
    return p;
}

function checkInterpolation(x){
    if(x > 3){
        return 1;
    }else if(x > 2){
        return 0.6;
    }else if(x > 1){
        return 0.1;
    }else if(x > 0){
        return 0.05;
    }else{
        return 0;
    }
}

function calculateTongLuongPerMonth(){
    var sl1 = document.getElementById('sl1').value;
    var sl2 = document.getElementById('sl2').value;
    var sl3 = document.getElementById('sl3').value;

    var tongLuong = sl1 * 8500000 + sl2 * 7500000 + sl3 * 6000000;

    document.getElementById('tongLuongPerMonth').innerHTML = 'Tổng lương: ' + tongLuong;
    return tongLuong;
}

function calculateavgLuongPerPersonPerMonth(){
    var sl1 = document.getElementById('sl1').value;
    var sl2 = document.getElementById('sl2').value;
    var sl3 = document.getElementById('sl3').value;
    var sum = parseInt(sl1) + parseInt(sl2) + parseInt(sl3);
    var avgLuongPerPersonPerMonth = calculateTongLuongPerMonth() / sum;

    document.getElementById('avgLuongPerPersonPerMonth').innerHTML = 'Lương trung bình 1 người/tháng: ' + avgLuongPerPersonPerMonth;
    return avgLuongPerPersonPerMonth;
}

function calculateavgLuongPerPersonPerHour(){
    var avgLuongPerPersonPerMonth = calculateavgLuongPerPersonPerMonth();
    var avgLuongPerPersonPerHour = avgLuongPerPersonPerMonth / 160;

    document.getElementById('avgLuongPerPersonPerHour').innerHTML = 'Lương trung bình 1 người/giờ: ' + avgLuongPerPersonPerHour;
    return avgLuongPerPersonPerHour;
}

function calculateUUCP(){
    var uucp = calculateTAW() + calculateTBF();

    document.getElementById('uucpFinal').innerHTML = 'UUCP: ' + uucp;
    return uucp;
}

function calculateAUCP(){
    var aucp = calculateUUCP() * calculateTCF() * calculateEF();

    document.getElementById('aucpFinal').innerHTML = 'AUCP: ' + aucp;
    return aucp;
}

function calculateE(){
    var E = 10/6 * calculateAUCP();

    document.getElementById('eFinal').innerHTML = 'E: ' + E;
    return E;

}

function calculateG(){
    var E = calculateE();
    var P = calculateP();
    var H = calculateavgLuongPerPersonPerHour();
    var G = 1.4 * E * P * H;

    document.getElementById('gFinal').innerHTML = 'G: ' + G;
    return G;
}

function main(){
    var taw = calculateTAW();
    var tbf = calculateTBF();
    var tfw = calculateTFW();
    var tcf = calculateTCF();
    var efw = calculateEFW();
    var es = calculateES();
    var p = calculateP();
    var ef = calculateEF();
    var tongLuong = calculateTongLuongPerMonth();
    var avgLuongPerPersonPerMonth = calculateavgLuongPerPersonPerMonth();
    var avgLuongPerPersonPerHour = calculateavgLuongPerPersonPerHour();
    var uucp = calculateUUCP();
    var aucp = calculateAUCP();
    var e = calculateE();
    var g = calculateG();

    console.log('TAW: ' + taw);
    console.log('TBF: ' + tbf);
    console.log('TFW: ' + tfw);
    console.log('TCF: ' + tcf);
    console.log('EFW: ' + efw);
    console.log('ES: ' + es);
    console.log('P: ' + p);
    console.log('EF: ' + ef);
    console.log('Tong luong: ' + tongLuong);
    console.log('avgLuongPerPersonPerMonth: ' + avgLuongPerPersonPerMonth);
    console.log('avgLuongPerPersonPerHour: ' + avgLuongPerPersonPerHour);
    console.log('UUCP: ' + uucp);
    console.log('AUCP: ' + aucp);
    console.log('E: ' + e);
    console.log('G: ' + g);

    document.getElementById('tawFinal').innerHTML = 'TAW: ' + taw;
    document.getElementById('tbfFinal').innerHTML = 'TBF: ' + tbf;
    document.getElementById('uucpFinal').innerHTML = 'UUCP: ' + uucp;
    document.getElementById('tcfFinal').innerHTML = 'TCF: ' + tcf;
    document.getElementById('efFinal').innerHTML = 'EF: ' + ef;
    document.getElementById('aucpFinal').innerHTML = 'AUCP: ' + aucp;
    document.getElementById('pFinal').innerHTML = 'P: ' + p;
    document.getElementById('eFinal').innerHTML = 'E: ' + e;
    document.getElementById('hFinal').innerHTML = 'H: ' + avgLuongPerPersonPerHour;
    document.getElementById('gFinal').innerHTML = 'G: ' + g;

}