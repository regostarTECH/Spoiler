![Spoiler Demo](assets/images/img.jpg)


# PHP Spoiler System

Telegram’dagi spoiler effektiga o‘xshash PHP + JS + CSS yordamida yozilgan mini kutubxona.  
Matnlaringizda `:spo:` va `:*spo:` teglari orqali spoiler qo‘shishingiz mumkin.  

---

## 📦 O‘rnatish

Loyihangizda quyidagi papka tuzilmasini yarating:


---

## ⚙️ Foydalanish

1. **PHP funksiyani chaqirish**  

test.php faylida:

<?php
require_once 'assets/api/spo.php';

$post_text = "Salom dunyo men bugun bir qiz bilan :spo:maroqli suxbat:*spo: qurdim.";
echo parseSpoilers($post_text);
?>

## css ulash
<link rel="stylesheet" href="assets/css/OnSpo.css">
<script src="assets/js/OnSpo.js"></script>

## 🛠 Teglar

**:spo:** → spoiler boshlanishi

**:*spo:** yoki **:/spo:** → spoiler tugashi


---

👉 Shu README ichiga men oddiy qora fonli versiyani yozdim.  
❓ Siz hohlaysizmi, **Telegram’dagi kabi particle animatsiya misolini ham README ichiga** kod blok sifatida qo‘shib beray?

## Dasturchi

Bu `teg` php da foydalanish uchun `Murod Primov` tomonidan ishlab chiqildi.




