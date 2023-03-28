// Set your Razorpay key ID.
$("input[name='expiry-data']").mask("00 / 00");
var razorpay = new Razorpay({
  key_id: 'your-key-id',
  key_secret: 'your-key-secret'
});

// Handle form submission.
$('#submit-payment').on('click', function(event) {
  event.preventDefault();

  // Disable the submit button to prevent multiple submissions.
  $('#submit-payment').prop('disabled', true);

  // Get the UPI ID entered by the user.
  var upiId = $('#upi-id').val();

  // Create a Razorpay order.
  razorpay.orders.create({
    amount: 1000, // Amount in paise.
    currency: 'INR',
    notes: {
      upi_id: upiId
    }
  }, function(order) {
    // Redirect the user to the UPI payment page.
    window.location.href = 'upi://' + upiId + '?amount=10.00';
  });
});
