/* تحليلات صديقة للخصوصية — Cloudflare Web Analytics (بدون كوكيز، بدون تتبّع شخصي).
   للتفعيل: ضع توكن موقعك بين علامتي التنصيص في TOKEN أدناه.
   احصل على التوكن مجاناً من: Cloudflare Dashboard → Analytics & Logs → Web Analytics → Add a site.
   يبقى الملف بلا أي أثر ما دام TOKEN فارغاً. */
(function () {
  var TOKEN = ""; // <-- ضع التوكن هنا، مثال: "abc123..."
  if (!TOKEN) return;
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", JSON.stringify({ token: TOKEN }));
  document.head.appendChild(s);
})();
