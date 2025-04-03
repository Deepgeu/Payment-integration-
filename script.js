document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookTitle = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;

    // Initialize Razorpay payment
    const options = {
        key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
        amount: price * 100, // Amount is in paise
        currency: 'INR',
        name: 'Book Store',
        description: `Purchase of ${bookTitle} by ${author}`,
        handler: function(response) {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            // You can also send the payment ID to your server for verification
        },
        prefill: {
            name: '',
            email: '',
            contact: ''
        },
        theme: {
            color: '#F37254'
        }
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
});
