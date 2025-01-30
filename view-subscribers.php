<?php
// Secure Access with a Password
$admin_password = 'TVCT3q$AyV4z';

if (!isset($_GET['password']) || $_GET['password'] !== $admin_password) {
    die("Unauthorized Access");
}

// Read and Display Subscribers
$file = "/home/p9sbav7hz4ag/subscribers.txt";
if (file_exists($file)) {
    echo nl2br(htmlspecialchars(file_get_contents($file)));
} else {
    echo "No subscribers yet.";
}
?>