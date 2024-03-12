document.addEventListener("DOMContentLoaded", function() {
    // Show popup when the button is clicked
    var showCustomerBtns = document.querySelectorAll('.show-customer-btn');
    showCustomerBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var customerName = this.getAttribute('data-customer-name'); // Add data-customer-name attribute to the button if needed
            var customerEmail = this.getAttribute('data-customer-email'); // Add data-customer-email attribute to the button if needed
            var customerPhone = this.getAttribute('data-customer-phone'); // Add data-customer-phone attribute to the button if needed

            // Populate the popup with customer information
            var popupBox = document.querySelector('.popup-box');
            popupBox.innerHTML = `
                <h2>Podatki stranke</h2>
                <p>Ime in priimek: ${customerName}</p>
                <p>Email: ${customerEmail}</p>
                <p>Telefon: ${customerPhone}</p>
                <button class="close-popup-btn red-button">Zapri</button>
            `;

            var popupContainer = document.getElementById('popupContainer');
            popupContainer.style.display = 'block';

            // Close popup when the close button is clicked
            var closePopupBtn = document.querySelector('.close-popup-btn');
            closePopupBtn.addEventListener('click', function() {
                popupContainer.style.display = 'none';
            });
        });
    });

    var deleteOrderBtns = document.querySelectorAll('.delete-order-btn');
    deleteOrderBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var orderId = this.getAttribute('data-order-id'); // Add data-order-id attribute to the button if needed
            // Show confirmation dialog
            var confirmation = confirm('Ali ste prepričani, da želite izbrisati naročilo?');
            if (confirmation) {
                var formData = new FormData();
                formData.append('order_id', orderId);
                // Send AJAX request to delete the order
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'info/izbrisinarocilo.php', true);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        document.cookie = "obvestilo=Naročilo izbrisano!; expires=Sat, 31 Dec 9999 23:59:59 GMT; path=/";
                        location.reload();
                        // Reload the page
                        window.location.reload();
                    }
                };
                xhr.send(formData);
            }
        });
    });
});
