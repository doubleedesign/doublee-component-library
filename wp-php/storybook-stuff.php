<?php
$storybook = 'http://localhost:6006';
if($_SERVER['HTTP_ORIGIN'] === $storybook) {
	header("Access-Control-Allow-Origin: " . $storybook);
	require_once('mock-functions.php');
} ?>
<script src="https://kit.fontawesome.com/93a0f466ec.js" crossorigin="anonymous"></script>
