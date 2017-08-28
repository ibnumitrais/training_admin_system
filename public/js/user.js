$(document).ready(function () {

    $('.dropdown.default').dropdown();

    $('.dropdown.filter').dropdown({
        onChange: function(value, text, $choice) {
            $.get('/user-api',{ filter: value}, printTerms);
        },
    });

    $.get('/user-api',{ filter: $('.dropdown.filter').dropdown('get value')}, printTerms);

    $('form.addUser').submit(function (e) {
        $(".dimmer.usertable").addClass('active');
        e.preventDefault();
        $.post('/user-api', {filter: $('.dropdown.filter').dropdown('get value'), username: $('input[name="username"]').val(), fullname: $('input[name="fullname"]').val(), email: $('input[name="email"]').val()}, printTerms);
        this.reset();
    });

});
    
function printTerms(terms) {
    $('table>tbody').empty();
    
    $.each(terms, function () {
        var tr = $('<tr>').appendTo('table>tbody');
        $('<td>').text(this.user_account_name).appendTo(tr);
        $('<td>').text(this.user_full_name).appendTo(tr);
        $('<td>').text(this.user_email).appendTo(tr);
        $('<td><div class="ui icon tiny buttons">\
            <button data-userid="'+this.user_id+'" data-header="Delete user #'+this.user_id+'" data-modalid="delete-user" data-content="Apakah Anda yakin ingin menghapus User dengan nama '+this.user_full_name+'?" onclick="remove(this)" class="ui red button"><i class="trash icon"></i></button>\
        </div>').appendTo(tr);
    });
    $(".dimmer.usertable").removeClass('active');
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
    