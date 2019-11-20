<?php 

header('Access-Control-Allow-Origin: https://www.lianatech.com'); 
header('Content-Type: application/json');
/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/
$rssUrl = 'https://www.lianatech.com/blog.rss';

$xml = simplexml_load_file($rssUrl);

$returnJSON = [];

// latest 3 articles 
for ($i=0; $i < 3; $i++) {
  $date = strtotime($xml->channel->item[$i]->pubDate);
  $formattedDate = date('d-m-Y', $date);
  
  $returnJSON[$i] = array(
    'title' => (string) $xml->channel->item[$i]->title,
    'pubDate' => (string) $formattedDate,
    'link' => (string) $xml->channel->item[$i]->link
  );
  
}

echo json_encode($returnJSON);

?>