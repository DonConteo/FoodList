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
     document.getElementById('resultQuantity').innerHTML = sumQ;
     document.getElementById('resultCalories').innerHTML = Math.round(sumC);
};

    var x = document.getElementById('resultQuantity').value;
    var y = document.getElementById('resultCalories').value;
    var z = document.getElementById('quan');
    var result = +z.value;
    result = (y/x)*result;
function calculate() {
    document.getElementById('calo').innerHTML = Math.round(result);
}