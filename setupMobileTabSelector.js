// Deprecated file. Use utils/setupMobileTabSelector.js instead.
// To avoid double-binding issues, this file becomes a no-op shim.
(function() {
    if (typeof window === 'undefined') return;
    if (window.setupMobileTabSelector) {
        // already provided by utils/setupMobileTabSelector.js
        return;
    }
    // Define a safe no-op to prevent runtime errors if referenced directly.
    window.setupMobileTabSelector = function noopSetupMobileTabSelector() { /* no-op (deprecated) */ };
})();
