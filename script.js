function orderProduct(productName) {
    const orderDetails = `注文内容: ${productName}`;
    document.getElementById('order-details').innerText = orderDetails;
    document.getElementById('products').style.display = 'none';
    document.getElementById('order-confirmation').style.display = 'block';
}

function closeConfirmation() {
    document.getElementById('order-confirmation').style.display = 'none';
    document.getElementById('products').style.display = 'block';
}
