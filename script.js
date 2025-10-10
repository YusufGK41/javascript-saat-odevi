let userName = prompt("Lütfen adınızı giriniz: ");

if (!userName || userName.trim() === "") {
  userName = "Ziyaretçi";
}

let kAdi = document.getElementById("userName");
kAdi.innerHTML = `Merhaba, ${userName}! Hoş geldiniz!`;

function showTime() {
  // 1. ZAMAN BİLGİLERİNİ YAKALAMA
  let now = new Date(); // Her saniye yeni zamanı yakalar

  // 2. GÜN DİZİSİ
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  // 3. SAAT VE GÜNÜ HESAPLAMA
  let today = days[now.getDay()];
  let timeString = now.toLocaleTimeString("tr-TR"); // Otomatik formatlı saat

  // 4. DOM'A YAZDIRMA (liveClock)
  let clockElement = document.getElementById("liveClock");
  clockElement.innerHTML = `${timeString} ${today}`;
}

// Fonksiyonu hemen bir kez çalıştırır ve sonra her saniye tekrarlar
showTime();
setInterval(showTime, 1000);
