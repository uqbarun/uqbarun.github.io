// https://www.freeformatter.com/javascript-escape.html#before-output
var asciiart = "              |\\    |\\                       \r\n              | \\   | \\                      \r\n              |  \\  |  \\                     \r\n               |  \\ |  \/                     \r\n                \\  \\| \/._                    \r\n               _..\\ \\ \/@@@@o...__            \r\n             @@@@@\/ _    T@@@@@@@@           \r\n              @@@|  `*`   T@@@@@@            \r\n              @@\/          d@@@@@            \r\n               @    `-____@@@@@@             \r\n                @          @@@@              \r\n                 @         @@@               \r\n                   @      @@                 \r\n                     @@@@@                   \r\n                      `^\u2019                    \r\n   ,-,,-, ___  \/-\/    ____ _____  ,-,,-,,---,\r\n  \/ \/\/ \/\/ _  \/\/ _ `,,=== \/\/ ___\/ \/ \/\/ \/\/ _  \/\r\n \/ \/\/ \/\/ \/\/ \/\/ \/\/ \/\/ \/\/ \/\/ \/    \/ \/\/ \/\/ \/\/ \/ \r\n \\___\/ \\_, \/\/_.__\/ \\_,_\/\/_\/     \\___\/\/_\/\/_\/  \r\n        \u2018-\u2019                                  \r\n    por una comunidad digitalmente segura    \r\n            #SigueElConejoBlanco             ";
console.log(asciiart);
(function() {
 
  const secret_b64 = "SkNVTjI1e1MxZ3UzXzRsX2MwbjNqMF9kM2J1Z2czcn0=";
  
  const decoded = atob(secret_b64);

  console.log(`%c${decoded}`, "color: #00ffcc; font-weight: bold; font-size: 14px;");
})();

