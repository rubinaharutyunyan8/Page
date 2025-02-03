<?php
$file = "/home/p9sbav7hz4ag/subscribers.txt";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // echo json_encode(["status" => "success", "message" => "Subscription successful!"]);
    // return
    $email = trim($_POST['email']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die(json_encode(["status" => "error", "message" => "Invalid email format."]));
    }

    $date = date("M d, Y");
    $entry = "$date | $email" . PHP_EOL;

    // uniqure email
    // if (file_exists($file)) {
    //     $subscribers = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    //     foreach ($subscribers as $subscriber) {
    //         if (strpos($subscriber, $email) !== false) {
    //             die(json_encode(["status" => "error", "message" => "Email already subscribed."]));
    //         }
    //     }
    // }

    if (file_put_contents($file, $entry, FILE_APPEND | LOCK_EX)) {

        // Send to Zapier Webhook
        $zapierWebhook = "https://hooks.zapier.com/hooks/catch/21554992/2f7kv8x";
        $zapierData = json_encode(["email" => $email]);

        $ch = curl_init($zapierWebhook);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $zapierData);
        curl_exec($ch);
        curl_close($ch);

        echo json_encode(["status" => "success", "message" => "Subscription successful!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to save email. Try again later."]);
    }
} else {
    // Block direct access
    die(json_encode(["status" => "error", "message" => "Invalid request."]));
}
?>