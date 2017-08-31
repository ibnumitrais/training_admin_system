
$('.gradeselection').dropdown({
    apiSettings: {
        responseAsync: function(settings, callback) {
            const query = settings.urlData.query;
        
            
            $.get('/grade-api', {}, function(data){
                var i;
                for(i = 0; i < data.length; i++){
                    data[i].name = data[i]['grade_name'];
                    delete data[i].grade_name;

                    data[i].value = data[i]['grade_id'];
                    delete data[i].grade_id;
                    
                }
                var response = {
                    success: true,
                    results: data
                };
                callback(response);
            });
            
        }
    }
});

var userTable = userTableInit();

$('form.addUser').submit(function (e) {
    $(".dimmer.usertable").addClass('active');
    e.preventDefault();
    $.post('/user-api', $('form.addUser').serialize(), updateUserTable);
    this.reset();
});

function updateUserTable(data) {
    userTable.ajax.reload( null, false );
    $(".dimmer.usertable").removeClass('active');
}

function userTableInit() {
    var table = $('table.usertable').DataTable( {
        "processing": true,
        "serverSide": true,
        'ajax': {
            'url': "/user-api",
            'type': 'GET',
            'data': function(d){
                return d;
            }
        },
        'orderMulti': false,
        'columns': [
            {'data' : 'user_account_name'},
            {'data' : 'user_full_name'},
            {'data' : 'user_email'},
            {'data' : 'user_status'},
            {'data' : null, "defaultContent": ''},
        ],
        "columnDefs": [ 
            {
                "targets": 4,
                "createdCell": function(td, cellData, rowData, row, col) {
                    $(td).prepend(
                        '<button data-userid="'+rowData.user_id+'" data-header="Delete user #'+rowData.user_id+'" data-modalid="delete-user" data-content="Apakah Anda yakin ingin menghapus User dengan nama '+rowData.user_full_name+'?" onclick="remove(this)" class="ui red tiny icon button"><i class="trash icon"></i></button>'
                    );
                },
                "orderable": false,
            }
        ]
    } );
    return table;
}

function remove(caller) {
    
    $(".dimmer.usertable").addClass('active');
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
            $(".dimmer.usertable").removeClass('active');
            return true;
        },
        onApprove : function() {
            $.ajax({
                url: '/user-api/' + $(caller).attr('data-userid'),
                type: 'DELETE',
                success: updateUserTable
            });
        }
    }).modal('show');
}