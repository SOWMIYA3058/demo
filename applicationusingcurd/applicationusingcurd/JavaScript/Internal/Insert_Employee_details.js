{
    $(function () {

        alert(lstemployees);
    });
}
{
    $("#add").on("click", function (e) {
        $.ajax({
            type: "POST",
            url: "Employee.asmx/empadd",
            data: "{edata:" + JSON.stringify(lstemployees) + "}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (hdsaxjcajk) {
                alert(hdsaxjcajk.d);
                debugger;
            }
        });
    });
}