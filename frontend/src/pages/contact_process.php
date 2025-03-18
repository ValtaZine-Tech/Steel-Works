<?php
// contact_process.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize form inputs
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $contact = filter_input(INPUT_POST, 'contact', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    // Format the message
    $whatsapp_message = "Hello:\n\n";
    $whatsapp_message .= "Name: $name\n";
    $whatsapp_message .= "Contact: $contact\n";
    $whatsapp_message .= "Subject: $subject\n";
    $whatsapp_message .= "Message:\n$message";

    // URL encode the message
    $encoded_message = urlencode($whatsapp_message);
    
    // Replace with your WhatsApp number (include country code, remove spaces and dashes)
    $owner_whatsapp_number = "+256789874647"; // Example: +1234567890
    
    // Create WhatsApp URL
    $whatsapp_url = "https://wa.me/$owner_whatsapp_number?text=$encoded_message";
    
    // Redirect to WhatsApp
    header("Location: $whatsapp_url");
    exit;
}