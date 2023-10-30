<?php
$storybook = 'http://localhost:6006';
if($_SERVER['HTTP_ORIGIN'] === $storybook) {
	header("Access-Control-Allow-Origin: " . $storybook);
	require_once('mock-functions.php');
}
