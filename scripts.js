$(document).ready(function() {
    $('#btn-add').on('click', function() {
        const expenseName = $('#expense-name').val();
        const amount = $('#amount').val();
        if (expenseName.trim() ===''|| amount.trim() ==='') {
            $('#error-message').show();
        } else {
            $('#error-message').hide();
        }
    })
})
