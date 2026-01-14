<?php

include_once __DIR__ . '/dompdf/autoload.inc.php';
$dompdf = new Dompdf\Dompdf();

$dompdf->loadHTML( file_get_contents('https://cristally.store/next.php#') );
$dompdf->setPaper('A4', 'p');
$dompdf->render();
//$dompdf->stream();
// Просмотр PDF в браузере вместо загрузки
$dompdf->stream("dompdf_outFRK.pdf", array("Attachment" => false));

?>
