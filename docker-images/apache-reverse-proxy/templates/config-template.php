<?php
	$ip_stat = getenv('STATIC_APP');
	$ip_dyna = getenv('DYNAMIC_APP');
?>


<VirtualHost *:80>
	ServerName demo.res.ch

	#ErrorLog ${APACHE_LOG_DIR}/error.log
	#CustomLog ${APACHE_LOG_DIR}/access.log combined

	ProxyPass 	'/api/finnish/' 'http://<?php print "$ip_dyna"?>/api/finnish/'
	ProxyPassReverse	'/api/finnish/' 'http://<?php print "$ip_dyna"?>/api/finnish/'

	ProxyPass 	'/' 'http://<?php print "$ip_stat"?>/'
	ProxyPassReverse 	'/' 'http://<?php print "$ip_stat"?>/'
</VirtualHost>