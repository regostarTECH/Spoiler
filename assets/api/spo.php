<?php
// Spoiler 
function parseSpoilers($text) {
    // xavfsizlik uchun HTMLni qisman qochirish
    $text = htmlspecialchars($text, ENT_QUOTES, 'UTF-8');

    // :spo: → <span class="spoiler">
    $text = preg_replace('/:spo:/i', '<span class="spoiler">', $text);

    // :*spo: yoki :/spo: → </span>
    $text = preg_replace('/:\/?spo:|\:\*spo:/i', '</span>', $text);

    return nl2br($text); // agar yangi qatorlar ham bo‘lsa <br> qo‘shadi
    // Masalan, DBdan olingan matn
    $post_text = "Salom dunyo men bugun bir qiz bilan :spo:maroqli suxbat:*spo: qurdim.";

    // Spoiler bilan formatlangan holda chiqarish
    echo parseSpoilers($post_text);
}
?>
