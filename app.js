/**
 * Crowi::app.js
 *
 * @package Crowi
 * @author  Sotaro KARASAWA <sotarok@crocos.co.jp>
 */

var crowi = new (require('./lib/crowi'))(__dirname, process.env);

crowi.start()
  .catch(crowi.exitOnerror);
