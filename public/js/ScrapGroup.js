/*globals $:false */
var window, document;

function ChangeSize() {
    var ww = window.innerWidth; //ширина окна 
    var tw = $(".scrapgroup").width(); //ширина таблицы
    var ch = $("section").height(); //высота основного блока
    document.getElementById("scrap").style.width = tw + "px"; //установка ширины блока с таблицей
    $("#scrap").css("height", ((ch - 17) + "px")); //высота блока с шапкой и таблицей равна высоте основного контейнера                   
    $(".scroll").css("height", ((ch - 17) + "px")); //высота блока с таблицей                 
    $(".fixFox").css("width", (tw + "px")); //устанавливаем ширину блока с шапкой
    $(".scroll").css("width", ((tw + 17) + "px")); //устанавливаем ширину блока с таблицей
    if (ww < (tw + 17)) {
        $(".content").css("width", (ww + "px")); //установка ширины в jquery            	
    } //прокрутка если окно меньше ширины окна (для мобильных)
}


$(function () {
    $(window).ready(ChangeSize); // событие загрузки html, определяем размер окна таблицы
    $(window).resize(ChangeSize); // событие изменения окна браузера, определяем размер окна таблицы

    //прикрепляем клик по заголовкам acc-head, аккордеон просмотр
    $('#accordeon .acc-head').on('click', f_acc);
});

function f_acc() {
    //скрываем все кроме того, что должны открыть
    $('#accordeon .acc-body').not($(this).next()).slideUp(10);
    // открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(10);
}


function tableSearch() {
    var phrase = document.getElementById('search-text'); //получаем значение поля формы
    var regPhrase = new RegExp(phrase.value, 'i'); //передаём в конструктор RegExp            
    if (regPhrase != "/(?:)/i") {
        $('.acc-body').slideDown(100); //скрыли строки
    } else {
        $('.acc-body').slideUp(100); //открыли скрытые строки
    } // сверка значения, если поле поиска пустое        	
    //$("table:nth-child(2)").attr("id", "no_accordeon");//переименовали id
    //var tab = document.getElementsByTagName("table");
    //tab[1].id = "no_accordeon"; //эквивалент предыдущей записи       	
    //$('.acc-body').slideDown(100);//открыли скрытые строки
    var table = document.getElementById('accordeon');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        //for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
        flag = regPhrase.test(table.rows[i].cells[0].innerHTML); //для поиска по всем ячейкам 0 заменить на j
        //if (flag) break;
        //}
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }
    }
}

/*var Material = (function () {
    function Material(_vid, _ni, _cr, _mo, _cu, _mn, _w, _v, _co, _si, _ti, _al, _nb, _fe, _s, _p, _c, _classSteel, _groupSteel, _markSteel) {
        this.vid = _vid;
        this.ni = _ni;
        this.cr = _cr;
        this.mo = _mo;
        this.cu = _cu;
        this.mn = _mn;
        this.w = _w;
        this.v = _v;
        this.co = _co;
        this.si = _si;
        this.ti = _ti;
        this.al = _al;
        this.nb = _nb;
        this.fe = _fe;
        this.s = _s;
        this.p = _p;
        this.c = _c;
        this.classSteel = _classSteel;
        this.groupSteel = _groupSteel;
        this.markSteel = _markSteel
    }
    return Material;
}());*/

/*$(function () {

    var i, j;
    var scrap = [];
    var him = [];
    var name_scrap = $(".acc-body tr");
    for (i = 0; i < name_scrap.length; i++) {
        var scrap_row = $(".acc-body tr").eq(i);
        var him = new Array(20);
        for (j = 0; j < 20; j++) {
            him[j] = scrap_row.children().eq(j).text();
            if (him[j] == "") {
                him[j] = 0;
            }
        }
        var vid = him[0];
        var ni = him[1];
        var cr = him[2];
        var mo = him[3];
        var cu = him[4];
        var mn = him[5];
        var w = him[6];
        var v = him[7];
        var co = him[8];
        var si = him[9];
        var ti = him[10];
        var al = him[11];
        var nb = him[12];
        var fe = him[13];
        var s = him[14];
        var p = him[15];
        var c = him[16];
        var classSteel = him[17];
        var groupSteel = him[18];
        var markSteel = him[19];
        CreateMaterial(vid, ni, cr, mo, cu, mn, w, v, co, si, ti, al, nb, fe, s, p, c, classSteel, groupSteel, markSteel);
        scrap[i] = him;
        console.log(`группа ${him}`)
    }
});

function CreateMaterial(Vid, Ni, Cr, Mo, Cu, Mn, W, V, Co, Si, Ti, Al, Nb, Fe, S, P, C, ClassSteel, GroupSteel, MarkSteel) {

    $.ajax({
        url: "api/materials",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify({
            vid: Vid,
            ni: Ni,
            cr: Cr,
            mo: Mo,
            cu: Cu,
            mn: Mn,
            w: W,
            v: V,
            co: Co,
            si: Si,
            ti: Ti,
            al: Al,
            nb: Nb,
            fe: Fe,
            s: S,
            p: P,
            c: C,
            classSteel: ClassSteel,
            groupSteel: GroupSteel,
            markSteel: MarkSteel
        })
    })
}*/