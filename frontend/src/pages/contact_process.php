<?php
// header("Access-Control-Allow-Origin: http://localhost:5173");
// header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json");

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process form data
    // $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    // $contact = filter_var(trim($_POST['contact'] ?? ''), FILTER_SANITIZE_NUMBER_INT);
    // $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    // $message = htmlspecialchars(trim($_POST['message'] ?? ''));
    // $subject = htmlspecialchars(trim($_POST['subject'] ?? ''));

    // Validate required fields
    // $required = ['name', 'contact', 'email', 'message'];
    // foreach ($required as $field) {
    //     if (empty($_POST[$field])) {
    //         http_response_code(400);
    //         exit(json_encode(['error' => "Missing required field: $field"]));
    //     }
    // }

    // Save to CSV
    // $data = [
    //     'name' => $name,
    //     'contact' => $contact,
    //     'email' => $email,
    //     'message' => $message,
    //     'subject' => $subject,
    //     'timestamp' => date('Y-m-d H:i:s')
    // ];

    // $file = fopen('submissions.csv', 'a');
    // if (filesize('submissions.csv') === 0) {
    //     fputcsv($file, array_keys($data));
    // }
    // fputcsv($file, $data);
    // fclose($file);

    // Redirect to WhatsApp
//     $whatsappMessage = urlencode(
//         "Hello there, $message\n\nFrom\n$name,\n$contact,\n$email"
//     );
//     header("Location: https://wa.me/256789874647?text=$whatsappMessage");
//     exit();
// }

// http_response_code(405);
// exit(json_encode(['error' => 'Method not allowed']));


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