const menuItems = $(".ah-category-option-text input");
$(menuItems).each(function() {
    $(this).on("click", function(event) {
        event.preventDefault();
        location.href = `./menu#${event.target.value}`;
    })
})
