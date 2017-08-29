var table = TableInit();

$('form.addGrade').submit(function (e) {
    $(".dimmer.gradetable").addClass('active');
    e.preventDefault();
    $.post('/grade-api', $('form.addGrade').serialize(), updateTable);

    this.reset();
});

function updateTable(data) {
    
    if(data > 0) {
        table.ajax.reload( null, false );
    } else {
        swal({
            title: 'Opps!',
            text: "Something wrong in our backend!",
            type: 'error',
            width: 300,
        });
    }
    $(".dimmer.gradetable").removeClass('active');
}

function TableInit() {
    var table = $('table.gradetable').DataTable( {
        "processing": true,
        "serverSide": true,
        'ajax': {
            'url': "/grade-api",
            'data': function(d){
                return d;
            }
        },
        'orderMulti': false,
        'columns': [
            {'data' : 'grade_code'},
            {'data' : 'grade_name'},
            {'data' : 'grade_description'},
            {'data' : null, "defaultContent": ''},
        ],
        "columnDefs": [{
            "targets": 3,
            "createdCell": function(td, cellData, rowData, row, col) {
                $(td).prepend(
                    '<button data-id="'+rowData.grade_id+'" data-header="Delete grade #'+rowData.grade_name+'" data-modalid="delete-grade" data-content="Apakah Anda yakin ingin menghapus Grade dengan nama '+rowData.grade_name+'?" onclick="remove(this)" class="ui red tiny icon button"><i class="trash icon"></i></button>'
                );
            },
            "orderable": false,
        }]
    } );
    return table;
}

function remove(caller) {
    $(".dimmer.gradetable").addClass('active');
    var currentModal = $('#' + $(caller).attr('data-modalid'));

    currentModal.modal({
        closable  : false,
        onShow    : function() {
            var headerText      = $(caller).attr('data-header');
            var headerContent   = $(caller).attr('data-content');

            currentModal.find('.header').html(headerText);
            currentModal.find('.content').html(headerContent);
        },
        onDeny    : function() {
            $(".dimmer.gradetable").removeClass('active');
            return true;
        },
        onApprove : function() {
            $.ajax({
                url: '/grade-api/' + $(caller).attr('data-id'),
                type: 'DELETE',
                success: updateTable
            });
        }
    }).modal('show');
}