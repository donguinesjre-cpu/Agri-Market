<?php
$conn = new mysqli('localhost', 'root', '', 'dborders');


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// input from JavaScript
$data = json_decode(file_get_contents("php://input"), true);

//  pay_later
$cart = $data['cart'] ?? [];
$pay_later = $data['pay_later'] ?? '';

if (empty($cart)) {
    echo "❌ Your cart is empty!";
    exit;
}

// Loop through each item in the cart and insert into DB
foreach ($cart as $item) {
    $product_name = $item['name'] ?? '';
    $price = $item['price'] ?? 0;
    $quantity = $item['quantity'] ?? 1;
    $order_date = date('Y-m-d H:i:s');


    $pay_later_value = !empty($pay_later) ? $pay_later : 'No';

    if (empty($product_name) || $price <= 0) {
        continue;
    }

    // Prepare SQ
    $stmt = $conn->prepare("INSERT INTO orders (product_name, price, quantity, pay_later, order_date) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sdiss", $product_name, $price, $quantity, $pay_later_value, $order_date);
    $stmt->execute();
}


$conn->close();

echo "✅ Orders placed successfully!";
?>
