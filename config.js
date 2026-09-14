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
  ENDPOINT: 'https://script.google.com/macros/s/AKfycbx5E5oAe_Eaw-QF1F6rmP0TpvfulXxQBdpl_07JKXp_6BH4DNnZLTouFX8PAH5OgP_n/exec',                          // the Apps Script /exec URL
  EMAIL:    'hello@katieandhugo.com'     // fallback address on the RSVP
};
