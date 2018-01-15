(function ($) {
    function Product(brand, name, image, description, type) {
        this.brand = brand;
        this.name = name;
        this.image_link = image;
        this.description = description;
        this.product_type = type;
    }

    function fillDiv(product) {
        $('.results').append(
            '<div class="productDiv">' +
            '<h3>' + product.name + '</h3>' +
            '<img src="' + product.image_link + '">' +
            '<p><span class="span">Product brand:</span> ' + product.brand + '</p>' +
            '<p><span class="span">Product type:</span> ' + product.product_type + '</p>' +
            '<p class="productDescription"><span class="span">Product description:</span> ' + product.description + '</p>' +
            '<hr>' +
            '</div>');
    }

    function makeupSearch(brand, type) {
        $('.results').empty();
        $.ajax({
            type: 'GET',
            url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=' + brand + '&product_type=' + type,
            data: {
                brand: brand,
                type: type
            },
            success: function (data) {
                for (let i = 0; i < data.length; i++) {
                    let product = new Product(data[i].brand, data[i].name, data[i].image_link, data[i].description, data[i].product_type);
                    fillDiv(product);
                }
                if (data.length == 0) {
                    $('.results').html('<h3>There are no such products in our database. Please try again with other products.</h3>');
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    $('#srcbtn').click(function (e) {
        e.preventDefault();
        let brandInput = $('#brandInput').val();
        let typeInput = $('#typeInput').val();
        makeupSearch(brandInput, typeInput);
    });

    $(document).keyup(function (e) {
        e.preventDefault();
        if (e.which == 13) {
            $('#srcbtn').click();
            return false;
        }
    });

    if ($('#back-to-top').length) {
        let scrollTrigger = 100,
            backToTop = function () {
                let scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
})(jQuery);