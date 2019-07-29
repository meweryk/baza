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
    /*window.addEventListener("resize", function() {
        alert("Размер окна теперь равен " + window.innerWidth + "px");
    });*/ // событие ресайз окна браузера
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


/*$(function () {
    var i, j;
    var scrap = [];
    var him = [];
    var name_scrap = $(".acc-body tr");
    for (i = 0; i < name_scrap.length; i++) {
        var scrap_row = $(".acc-body tr").eq(i);
        var him = new Array(13);
        for (j = 0; j < 13; j++) {
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
        CreateMaterial(vid, ni, cr, mo, cu, mn, w, v, co, si, ti, al, nb);
        scrap[i] = him;
    }
});

function CreateMaterial(materialId, materialNi, materialCr, materialMo, materialCu, materialMn, materialW, materialV, materialCo, materialSi, materialTi, materialAl, materialNb) {
    $.ajax({
        url: "api/materials",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify({
            id: materialId,
            ni: materialNi,
            cr: materialCr,
            mo: materialMo,
            cu: materialCu,
            mn: materialMn,
            w: materialW,
            v: materialV,
            co: materialCo,
            si: materialSi,
            ti: materialTi,
            al: materialAl,
            nb: materialNb
        })
    })
}*/