$(document).ready(function () {
    
    var userTable = userTableInit();
    
    function updateUserTable(data) {
        userTable.ajax.reload( null, false );
        $(".dimmer.usertable").removeClass('active');
    }
    $('form.addUser').submit(function (e) {
        $(".dimmer.usertable").addClass('active');
        e.preventDefault();
        $.post('/user-api', {username: $('input[name="username"]').val(), fullname: $('input[name="fullname"]').val(), email: $('input[name="email"]').val()}, updateUserTable);
        this.reset();
    });

});

function userTableInit() {
    var table = $('table.usertable').DataTable( {
        "processing": true,
        "serverSide": true,
        'ajax': {
            'url': "/user-api",
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
                success: printTerms
            });
        }
    }).modal('show');
}
    