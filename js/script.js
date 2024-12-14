// coding implementation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let keyword = document.getElementById("key").value.trim();
    let priceFrom = document.getElementById("from").value.trim();
    let priceTo = document.getElementById("to").value.trim();

    let hasError = false;
    let errorMessage = "";

    // validate bo trong
    if (!keyword) {
        errorMessage += "Keyword không được để trống.\n";
        hasError = true;
    }

    // validate gia phai la so
    if (priceFrom && isNaN(priceFrom)) {
        errorMessage += "Price From phải là số.\n";
        hasError = true;
    }
    if (priceTo && isNaN(priceTo)) {
        errorMessage += "Price To phải là số.\n";
        hasError = true;
    }
    if (priceTo < priceFrom) {
        errorMessage += "Price From phải nhỏ hơn hoặc bằng Price To.\n";
        hasError = true;
    }

    if (hasError) {
        alert(errorMessage);
    } else {
        event.target.submit();
        alert('Đang tìm kiếm')
    }
});
// end coding implementation