/* =====================================================================
   Katie & Hugo — settings.
   Upload this file to GitHub ONCE, fill it in, and never overwrite it.
   New versions of index.html read their settings from here, so your
   endpoint survives every future update.

   There is no key here any more: the write key is derived in the browser
   from the answer to the riddle, so it exists only for guests who have
   already unlocked the site. Every real secret (SendGrid, Google) lives
   in Apps Script and never reaches a browser.
   ===================================================================== */
window.KH_CONFIG = {
  ENDPOINT: 'https://script.google.com/macros/s/AKfycbzQH-mpL6ZuhCD87keHVpon9LuLoO3YW52YpzYJi_YBEMjdtdAvotb7R0CpLHRNyrqR/exec',                          // the Apps Script /exec URL
  EMAIL:    'hello@katieandhugo.com'     // fallback address on the RSVP
};
