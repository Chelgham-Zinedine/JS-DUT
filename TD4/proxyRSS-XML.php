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
 * Ne pas modifier ce fichier !!!
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
		// Display the XML data
		header( 'content-type: text/xml; charset=utf-8');
		echo $xml;
	} else {
		echo "Reading error…";
	}
} else {
	echo "Empty URL…";
}
?>