<?php
$lat = $_GET['lat'];
$lon = $_GET['long'];
$radius = $_GET['radius'];
$uom = $_GET['uom'];
$response = $_GET['response'];
$callback = $_GET['callback'];

$url = 'http://api.sfpark.org/sfpark/rest/availabilityservice?lat='.$lat.'&long='.$lon.'&radius='.$radius.'&uom='.$uom.'&response=json';


$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, false);
//$json = curl_exec($ch);

if ($response == "jsonp") {
	echo $callback.'(';
	curl_exec($ch);
	echo ')';
} else {
	curl_exec($ch);
}
// close cURL resource, and free up system resources
curl_close($ch);
?>