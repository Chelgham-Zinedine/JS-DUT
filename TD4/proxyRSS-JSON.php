<?php
/**
 *
 * M413 - TD4 - proxyRSS-XML
 *
 *
 * @author Jean-Michel Bruneau
 * @copyright UCA - IUT -INFO
 * @version 1.0
 * @date 2021-02-14
 *
 */

// Get URL
$url = filter_input( INPUT_POST, 'url', FILTER_VALIDATE_URL);
if ( $url != '') {
	// Creates a new DOMDocument object
	$myRSSDoc = new DOMDocument();
	if ( $myRSSDoc->load( $url)) {
		// Dumps the internal XML tree back into a string
		$xml = $myRSSDoc->saveXML();
		// Interprets a string of XML into an SimpleXMLElement object
		$simpleXMLElement = simplexml_load_string( $myRSSDoc->saveXML());
		// Encode the oject in JSON format
		$json = json_encode( $simpleXMLElement);
		// Display JSON data
		header('Content-Type: application/json; charset=utf-8');
		echo $json;
	} else {
		echo "Reading error…";
	}
} else {
	echo "Empty URL…";
}

?>
