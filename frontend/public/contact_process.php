<?php
if (isset($_POST['submit'])) {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $contact = filter_var(trim($_POST['contact'] ?? ''), FILTER_SANITIZE_NUMBER_INT);
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));
    $subject = htmlspecialchars(trim($_POST['subject'] ?? ''));
    
    $whatsappMessage = urlencode(
        "Hello there, $message\n\nFrom\n$name,\n$contact,\n$email"
    );
    header("Location: https://wa.me/256789874647?text=$whatsappMessage");
} else {
    echo "
        <script>
            alert('Error!')
            window.location=history.go(-1)
        </script>
    ";
}
?>