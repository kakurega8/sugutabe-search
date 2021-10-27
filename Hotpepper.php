<?php

$latitude =  $_POST['latitude']; 
$longitude = $_POST['longitude'];
$range = $_POST['range'];
$start = $_POST['start'];
$keyword = $_POST['keyword'];
$name = $_POST['name'];

$query = [
    'key' => 'b14ddec752a05c06', 
    'lat' => $latitude, 
    'lng' => $longitude, 
    'range' => $range,
    'start' => $start,
    'keyword' => $keyword,
    'name_any' => $name,
    'format' => 'json', 
];

$url = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?';
$url .= http_build_query($query);
$response = file_get_contents($url);
$json = json_encode($response);

echo ($json);
