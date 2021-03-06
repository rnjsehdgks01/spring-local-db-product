var main = {
    init : function () {
        var _this = this;
        $('#btn-delete').on('click', function () {
            _this.delete();
        });
    },

    delete : function () {
        var id = $("#upper-content").data("id")

        $.ajax({
            type: 'DELETE',
            url: '/products/' + id,
            dataType: 'json',
            contentType:'application/json; charset=utf-8',
        }).done(function() {
            alert('product deleted successfully');
            window.location.href = '/products';
        }).fail(function (error) {
            alert('product delete failed');
        });
    }
};

main.init();