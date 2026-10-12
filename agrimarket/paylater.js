
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {id: "mangga", name: "Mangga", price: 450.00},
        {id: "bawang", name: "Bawang", price: 400.00},
        {id: "kalamansi", name: "Kalamansi", price: 400.00},
        {id: "kalabasa", name: "Kalabasa", price: 500.00},
        {id: "pakwan", name: "Pakwan", price: 450.00},
        {id: "papaya", name: "Papaya", price: 350.00},
        {id: "repolyo", name: "Repolyo", price: 450.00},
        {id: "saging", name: "Saging", price: 450.00},
        {id: "sibuyas", name: "Sibuyas", price: 750.00}
    ];

    const listCart = document.querySelector(".ListCart");
    const payLaterInput = document.getElementById("payLaterDays");
    const placeOrderBtn = document.getElementById("placeOrderBtn");

    const allowedDays = ["1 Day", "3 Days", "5 Days", "7 Days"];
    let cart = [];

    // Add product to cart
    products.forEach(product => {
        const btn = document.getElementById(product.id);
        if (!btn) return;

        btn.addEventListener("click", () => {
            const existing = cart.find(item => item.name === product.name);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({...product, quantity: 1});
            }
            updateCartDisplay();
        });
    });

    // Update cart display
    function updateCartDisplay() {
        listCart.innerHTML = "";
        if (cart.length === 0) {
            listCart.innerHTML = "<p>Your cart is empty</p>";
            return;
        }

        cart.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("cart-item");
            div.innerHTML = `
                <p>${item.name} - ${item.price} x ${item.quantity} 
                <button class="remove-btn" data-name="${item.name}">Remove</button></p>
            `;
            listCart.appendChild(div);
        });

        // Remove item functionality
        const removeButtons = document.querySelectorAll(".remove-btn");
        removeButtons.forEach(button => {
            button.addEventListener("click", () => {
                const name = button.getAttribute("data-name");
                cart = cart.filter(item => item.name !== name);
                updateCartDisplay();
            });
        });
    }

    // Place your orders
    placeOrderBtn.addEventListener("click", () => {
        const payLater = payLaterInput.value.trim();

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        if (!allowedDays.includes(payLater)) {
            alert("Please select a valid Pay Later day!");
            return;
        }

        // Send orders to PHP
        fetch("add_order.php", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ cart, pay_later: payLater })
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
            cart = [];
            updateCartDisplay();
            payLaterInput.value = "";
        })
        .catch(err => {
            console.error(err);
            alert("Failed to place order. Check console for details.");
        });
    });
});




