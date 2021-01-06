$(".add").on('click', function(e){
    document.getElementById("calor").value = null;
    document.getElementById("quantity").value = null;
    document.getElementById('error').innerHTML = null;
    document.getElementById('error1').innerHTML = null;
    document.getElementById("porCal").value = null;
    document.getElementById("porQua").value = null;
    var parent = $(e.currentTarget).parent();
    if(parent){
        var results = parent.find('a');
        var resultsName = parent.find('p');
        var c = $(results[1]).html();
        var q = $(resultsName[0]).html();
        document.getElementById("calor").value = c;
        document.getElementById("inv").value = q;
    };
    document.getElementById("modal-background").style.display = "block";
    document.getElementById("quantity").focus();

    var inp = document.getElementById("calor").value;
    document.getElementById("quantity").oninput = function() {
        var x = document.getElementById("quantity").value;
        var res = (inp/100)*x;
        document.getElementById("calor").value = Math.round(res);
    };
});

$("#addToRes").on('click', function(e) {
    var x = Number(document.getElementById("quantity").value);
    var y = Number(document.getElementById("calor").value);
    var a = Number(document.getElementById("resQua").value);
    var b = Number(document.getElementById("resCal").value);
    if (x == 0){
        document.getElementById('error').innerHTML = "Количество не может быть равно 0";
    }
    else {
        a += +x;
        b += +y;
        document.getElementById("resQua").value = a;
        document.getElementById("resCal").value = b;
        document.getElementById("modal-background").style.display = "none";
        document.getElementById('clear').disabled = false;
        document.getElementById('clear').style.background = "#8B0000";
        document.getElementById('save').disabled = false;
        document.getElementById('save').style.background = "#006400";
        document.getElementById("choose1").style.display = "none";

        var name = document.getElementById("inv").value;
        var cal = document.getElementById("calor").value;
        var quan = document.getElementById("quantity").value;

        var html = '<div class="pos"><p class="posName">'+name+'</p><input class="posQantity" value='+quan+'>гр<input class="posCalories" value='+cal+' readonly>ккал<button class="del"> - </button></div>';
        $("#reciepe").append(html);

        document.getElementById("calor").value = null;
        document.getElementById("quantity").value = null;
        document.getElementById('error').innerHTML = null;
        document.getElementById('error1').innerHTML = null;
        document.getElementById("porCal").value = null;
        document.getElementById("porQua").value = null;
    }
});

$("#save").on('click', function(e){
    $('.pos1').remove();
    var x = document.getElementById("resQua").value;
    var z = document.getElementById("resCal").value;
    document.getElementById("reciepe-weight").value = x;
    document.getElementById("reciepe-calories").value = z;
    var arrName = document.querySelectorAll(".posName");
    var arrWeight = document.querySelectorAll(".posQantity");
    var y = null;
    for(var i = 0; i < arrName.length; i++){
        var name = arrName[i].innerHTML;
        var weight = arrWeight[i].value;
        y = y + name + ' - ' + weight + ' гр' + '!';
        document.getElementById("reciepe-info").value = y;
    }
    arrName.length = 0;
    arrWeight.length = 0;
    document.getElementById("reciepe-background").style.display = "block";
});

$("#reciepe-butClose").click(function (){
    document.getElementById("reciepe-background").style.display = "none";
});

$("#quantity").keydown(function(event) {
    if (event.keyCode == 46 || event.keyCode == 8) {
         return;
    }
    else {
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
            event.preventDefault();
        }
    }
});

$("#porQua").keydown(function(event) {
    if (Number(document.getElementById("resQua").value) == 0){
        event.preventDefault();
        document.getElementById('error1').innerHTML = "Сначала составьте блюдо";
    }
    else {
        if (event.keyCode == 46 || event.keyCode == 8) {
             return;
        }
        else {
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    }
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        var x = Number(document.getElementById("quantity").value);
        var y = Number(document.getElementById("calor").value);
        var a = Number(document.getElementById("resQua").value);
        var b = Number(document.getElementById("resCal").value);
        if (x == 0){
            document.getElementById('error').innerHTML = "Количество не может быть равно 0";
        }
        else {
            a += +x;
            b += +y;
            document.getElementById("resQua").value = a;
            document.getElementById("resCal").value = b;
            document.getElementById("modal-background").style.display = "none";
            document.getElementById('clear').disabled = false;
            document.getElementById('clear').style.background = "#8B0000";
            document.getElementById('save').disabled = false;
            document.getElementById('save').style.background = "#006400";
            document.getElementById("choose1").style.display = "none";

            var name = document.getElementById("inv").value;
            var cal = document.getElementById("calor").value;
            var quan = document.getElementById("quantity").value;

            var html = '<div class="pos"><p class="posName">'+name+'</p><input class="posQantity" value='+quan+'>гр<input class="posCalories" value='+cal+' readonly>ккал<button class="del"> - </button></div>';
            $("#reciepe").append(html);

            document.getElementById("calor").value = null;
            document.getElementById("quantity").value = null;
            document.getElementById('error').innerHTML = null;
            document.getElementById('error1').innerHTML = null;
            document.getElementById("porCal").value = null;
            document.getElementById("porQua").value = null;
        }
    }
    if (e.keyCode == 27){
        document.getElementById("modal-background").style.display = "none";
    }
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27){
        document.getElementById("reciepe-background").style.display = "none";
    }
});

$("#butClose").click(function () {
    document.getElementById("modal-background").style.display = "none";
});

$(document).on('click', '.del', function (e) {
    var parent2 = $(e.currentTarget).parent();
    if(parent2){
        var componentWeight = Number(parent2.find('input.posQantity').attr("value"));
        var componentCalories = Number(parent2.find('input.posCalories').attr("value"));
        document.getElementById("resQua").value = Number(document.getElementById("resQua").value) - componentWeight;
        document.getElementById("resCal").value = Number(document.getElementById("resCal").value) - componentCalories;
        }
    $(this).closest("div").remove();
});

$(document).mouseup(function (e){
    var modalctr = $("#modal-background");
    var modal = $(".popup");
    if (!modal.is(e.target) && modal.has(e.target).length === 0){
        modalctr.hide();
    }
});

$(document).mouseup(function (e){
    var modalctr = $("#reciepe-background");
    var modal = $(".popup");
    if (!modal.is(e.target) && modal.has(e.target).length === 0){
        modalctr.hide();
    }
});

document.getElementById("porQua").oninput = function() {
    var a = Number(document.getElementById("resQua").value);
    var b = Number(document.getElementById("resCal").value);
    var x = Number(document.getElementById("porQua").value);
    var res = (b/a)*x;
    document.getElementById("porCal").value = Math.round(res);
};

$("#clear").on('click', function(e) {
if (confirm("Вы точно хотите удалить блюдо?")){
    document.getElementById("porCal").value = null;
    document.getElementById("porQua").value = null;
    document.getElementById("resCal").value = null;
    document.getElementById("resQua").value = null;
    $('.pos').remove();
    document.getElementById('clear').disabled = true;
    document.getElementById('clear').style.background = "#696969";
    document.getElementById('save').disabled = true;
    document.getElementById('save').style.background = "#696969";
    document.getElementById("choose1").style.display = "block";
    }
});

let nuts = document.getElementById('nutsPage'),
    mushrooms = document.getElementById('mushroomsPage'),
    porridge = document.getElementById('porridgePage'),
    seafood = document.getElementById('seafoodPage'),
    meat = document.getElementById('meatPage'),
    sausage = document.getElementById('sausagePage'),
    vegetable = document.getElementById('vegetablePage'),
    fruit = document.getElementById('fruitPage'),
    conserve = document.getElementById('conservePage'),
    milk = document.getElementById('milkPage'),
    drink = document.getElementById('drinkPage')

nuts.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "none";
    document.getElementById("foodPorridge").style.display = "none";
    document.getElementById("foodSeafood").style.display = "none";
    document.getElementById("foodMeat").style.display = "none";
    document.getElementById("foodSausage").style.display = "none";
    document.getElementById("foodVegetable").style.display = "none";
    document.getElementById("foodFruit").style.display = "none";
    document.getElementById("foodConserve").style.display = "none";
    document.getElementById("foodMilk").style.display = "none";
    document.getElementById("foodDrink").style.display = "none";
    document.getElementById("foodNuts").style.display = "block";
});

mushrooms.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodNuts").style.display = "none";
    document.getElementById("foodPorridge").style.display = "none";
    document.getElementById("foodSeafood").style.display = "none";
    document.getElementById("foodMeat").style.display = "none";
    document.getElementById("foodSausage").style.display = "none";
    document.getElementById("foodVegetable").style.display = "none";
    document.getElementById("foodFruit").style.display = "none";
    document.getElementById("foodConserve").style.display = "none";
    document.getElementById("foodMilk").style.display = "none";
    document.getElementById("foodDrink").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "block";
});

porridge.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodNuts").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "none";
    document.getElementById("foodSeafood").style.display = "none";
    document.getElementById("foodMeat").style.display = "none";
    document.getElementById("foodSausage").style.display = "none";
    document.getElementById("foodVegetable").style.display = "none";
    document.getElementById("foodFruit").style.display = "none";
    document.getElementById("foodConserve").style.display = "none";
    document.getElementById("foodMilk").style.display = "none";
    document.getElementById("foodDrink").style.display = "none";
    document.getElementById("foodPorridge").style.display = "block";
});

seafood.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodNuts").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "none";
    document.getElementById("foodPorridge").style.display = "none";
    document.getElementById("foodMeat").style.display = "none";
    document.getElementById("foodSausage").style.display = "none";
    document.getElementById("foodVegetable").style.display = "none";
    document.getElementById("foodFruit").style.display = "none";
    document.getElementById("foodConserve").style.display = "none";
    document.getElementById("foodMilk").style.display = "none";
    document.getElementById("foodDrink").style.display = "none";
    document.getElementById("foodSeafood").style.display = "block";
});

meat.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodNuts").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "none";
    document.getElementById("foodPorridge").style.display = "none";
    document.getElementById("foodSeafood").style.display = "none";
    document.getElementById("foodSausage").style.display = "none";
    document.getElementById("foodVegetable").style.display = "none";
    document.getElementById("foodFruit").style.display = "none";
    document.getElementById("foodConserve").style.display = "none";
    document.getElementById("foodMilk").style.display = "none";
    document.getElementById("foodDrink").style.display = "none";
    document.getElementById("foodMeat").style.display = "block";
});

sausage.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodNuts").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "none";
    document.getElementById("foodPorridge").style.display = "none";
    document.getElementById("foodSeafood").style.display = "none";
    document.getElementById("foodMeat").style.display = "none";
    document.getElementById("foodVegetable").style.display = "none";
    document.getElementById("foodFruit").style.display = "none";
    document.getElementById("foodConserve").style.display = "none";
    document.getElementById("foodMilk").style.display = "none";
    document.getElementById("foodDrink").style.display = "none";
    document.getElementById("foodSausage").style.display = "block";
});

vegetable.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodNuts").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "none";
    document.getElementById("foodPorridge").style.display = "none";
    document.getElementById("foodSeafood").style.display = "none";
    document.getElementById("foodMeat").style.display = "none";
    document.getElementById("foodSausage").style.display = "none";
    document.getElementById("foodFruit").style.display = "none";
    document.getElementById("foodConserve").style.display = "none";
    document.getElementById("foodMilk").style.display = "none";
    document.getElementById("foodDrink").style.display = "none";
    document.getElementById("foodVegetable").style.display = "block";
});

fruit.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodNuts").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "none";
    document.getElementById("foodPorridge").style.display = "none";
    document.getElementById("foodSeafood").style.display = "none";
    document.getElementById("foodMeat").style.display = "none";
    document.getElementById("foodSausage").style.display = "none";
    document.getElementById("foodVegetable").style.display = "none";
    document.getElementById("foodConserve").style.display = "none";
    document.getElementById("foodMilk").style.display = "none";
    document.getElementById("foodDrink").style.display = "none";
    document.getElementById("foodFruit").style.display = "block";
});

conserve.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodNuts").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "none";
    document.getElementById("foodPorridge").style.display = "none";
    document.getElementById("foodSeafood").style.display = "none";
    document.getElementById("foodMeat").style.display = "none";
    document.getElementById("foodSausage").style.display = "none";
    document.getElementById("foodVegetable").style.display = "none";
    document.getElementById("foodFruit").style.display = "none";
    document.getElementById("foodMilk").style.display = "none";
    document.getElementById("foodDrink").style.display = "none";
    document.getElementById("foodConserve").style.display = "block";
});

milk.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodNuts").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "none";
    document.getElementById("foodPorridge").style.display = "none";
    document.getElementById("foodSeafood").style.display = "none";
    document.getElementById("foodMeat").style.display = "none";
    document.getElementById("foodSausage").style.display = "none";
    document.getElementById("foodVegetable").style.display = "none";
    document.getElementById("foodFruit").style.display = "none";
    document.getElementById("foodConserve").style.display = "none";
    document.getElementById("foodDrink").style.display = "none";
    document.getElementById("foodMilk").style.display = "block";
});

drink.addEventListener( 'click', function( e ) {
    document.getElementById("choose").style.display = "none";
    document.getElementById("foodNuts").style.display = "none";
    document.getElementById("foodMushrooms").style.display = "none";
    document.getElementById("foodPorridge").style.display = "none";
    document.getElementById("foodSeafood").style.display = "none";
    document.getElementById("foodMeat").style.display = "none";
    document.getElementById("foodSausage").style.display = "none";
    document.getElementById("foodVegetable").style.display = "none";
    document.getElementById("foodFruit").style.display = "none";
    document.getElementById("foodConserve").style.display = "none";
    document.getElementById("foodMilk").style.display = "none";
    document.getElementById("foodDrink").style.display = "block";
});