$(document).ready(function () {
    var variant = $('#uzz')
        .clone(true);
    $('#ss')
        .click(function () {
            $(variant)
                .clone(true)
                .appendTo('#variants')
                .fadeIn('slow')
                .find("input[name*=name]")
                .focus();
        });
    $(document)
        .on('click', 'button.del_variant', function () {
            $(this)
                .parents(".control-group")
                .remove();
        });
});

document.getElementById('consCal').onclick = function() {
     var sumC = 0;
     var resC = true;
     var sumQ = 0;
     var resQ = true;
     var inputsQ = document.getElementsByName("foodQuantity");
     var cal = 0;
     var inputsC = document.getElementsByName("foodCalories");
     for (var i = inputsC.length; i-- > 0;) {
         var vC = Number(inputsC[i].value);
         var vQ = Number(inputsQ[i].value);
         if (vC == 456)
             document.getElementById('error').innerHTML = "Вы ввели: "+v;
         else
            document.getElementById('error').innerHTML = "";
         cal = (vC/100) * vQ;
         sumC += +cal;
         sumQ += +vQ;
     }
     document.getElementById('resultQuantity').value = sumQ;
     document.getElementById('resultCalories').value = Math.round(sumC);
     if (sumQ == 0 || Math.round(sumC) == 0){
         document.getElementById('save').disabled = true;
         document.getElementById('save').style.background = "#696969";
     }
     else {
         document.getElementById('save').disabled = false;
         document.getElementById('save').style.background = "#006400";
     }
};

$("#save").on('click', function(e) {
    var x = document.getElementById('resultQuantity').value;
    var z = document.getElementById('resultCalories').value;
    document.getElementById('reciepe-weight').value = x;
    document.getElementById('reciepe-calories').value = z;
    var arrName = document.querySelectorAll('[name="foodName"]');
    var arrWeight = document.querySelectorAll('[name="foodQuantity"]');
    var y = null;
    for(var i = 0; i < arrName.length; i++){
        var name = arrName[i].value;
        var weight = arrWeight[i].value;
        y = y + name + ' - ' + weight + ' гр' + '!';
        document.getElementById('reciepe-info').value = y;
    }
    arrName.length = 0;
    arrWeight.length = 0;
    document.getElementById("reciepe-background").style.display = "block";
});

$('.food').keydown(function(event) {
    if (event.keyCode == 46 || event.keyCode == 8) {
        return;
    }
    else {
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
            event.preventDefault();
        }
    }
});

$("#butClose").click(function () {
    document.getElementById("modal-background").style.display = "none";
});

$(document).mouseup(function (e){
    var modalctr = $("#reciepe-background");
    var modal = $(".popup");
    if (!modal.is(e.target) && modal.has(e.target).length === 0){
        modalctr.hide();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27){
        document.getElementById("reciepe-background").style.display = "none";
    }
});

$("#reciepe-butClose").click(function (){
    document.getElementById("reciepe-background").style.display = "none";
});

$(".del_variant").click(function (){
    document.getElementById('save').disabled = true;
    document.getElementById('save').style.background = "#696969";
});