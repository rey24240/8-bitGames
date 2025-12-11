// ytgame.js - Standalone stub for Hill Climb Racing Lite
// This provides basic functionality when not running in YouTube context

var ytgame = {
    system: {
        onAudioEnabledChange: function(callback) {
            // Simulate audio enabled by default
            setTimeout(() => callback(true), 100);
            return { remove: function() {} };
        },
        onPause: function(callback) {
            return { remove: function() {} };
        },
        onResume: function(callback) {
            return { remove: function() {} };
        },
        getLanguage: function() {
            return Promise.resolve('en');
        }
    },
    game: {
        saveData: function(data) {
            try {
                localStorage.setItem('hcr-lite-save', JSON.stringify(data));
                return Promise.resolve();
            } catch (e) {
                return Promise.reject(e);
            }
        },
        loadData: function() {
            try {
                const saved = localStorage.getItem('hcr-lite-save');
                return Promise.resolve(saved ? JSON.parse(saved) : null);
            } catch (e) {
                return Promise.reject(e);
            }
        }
    }
};

// Add JsToDef communication stub
window.JsToDef = {
    send: function(message, data) {
        console.log('JsToDef.send:', message, data);
        // This would normally communicate with the Defold engine
        // For now, just log it
    }
};
