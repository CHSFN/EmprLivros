$(document).ready(function() {
    $('#Emprestimos').DataTable({
        language: {
            "decimal":        "",
            "emptyTable":     "Nenhum resultado dentro da tabela",
            "info":           "Mostrando _START_ de _END_ um total de _TOTAL_ resultados",
            "infoEmpty":      "Mostrando 0 de 0 de 0 resultados",
            "infoFiltered":   "(Filtrando um total de _MAX_ resultados)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "Mostrando _MENU_ resultados",
            "loadingRecords": "carregando...",
            "processing":     "",
            "search":         "Buscar:",
            "zeroRecords":    "Nenhum resultado encontrado",
            "paginate": {
                "first":      "Primeiro",
                "last":       "Ultimo",
                "next":       ">",
                "previous":   "<"
            },
            "aria": {
                "orderable":  "Order by this column",
                "orderableReverse": "Reverse order this column"
            }
        }
    });
});

setTimeout(function() {
    $('.alert').fadeOut('slow', function () {
        $(this).alert('close');
    });
}, 5000);