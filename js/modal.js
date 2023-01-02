// SETTINGS
let settingsBtn = document.querySelector('.settings-btn');
let settingsBg = document.querySelector('.settings-bg');
let settingsClose = document.querySelector('.settings-close')

// SETTINGS RESTART
let settingsBtnRestart = document.querySelector('.settings-btn-restart');
let settingsBgRestart = document.querySelector('.settings-bg-restart');
let settingsCloseRestart = document.querySelector('.no-settings');

// VISUAL SETTINGS RESTART
let VsmBtnRestart = document.querySelector('.vsm-btn-restart');
let VsmBgRestart = document.querySelector('.vsm-bg-restart');
let VsmCloseRestart = document.querySelector('.no-vsm');

// CONTROLS
let WindowBtnControls = document.querySelector('.controls-btn');
let ModalOverlayControls = document.querySelector('.controls-bg');
let CloseWindowControls = document.querySelector('.close-controls');

// CONTROLS RESTART

// REPLAYS
let WindowBtnReplays = document.querySelector('.replays-btn');
let ModalOverlayReplays = document.querySelector('.replays-bg');
let CloseWindowReplays = document.querySelector('.close-replays');

// LEADERBOARD
let WindowBtnLeaderboard = document.querySelector('.leaderboard-btn');
let ModalOverlayLeaderboard = document.querySelector('.leaderboard-bg');
let CloseWindowLeaderboard = document.querySelector('.close-leaderboard');

// USERS
let WindowBtnFriends = document.querySelector('.friends-btn');
let ModalOverlayFriends = document.querySelector('.friends-bg');
let CloseWindowFriends = document.querySelector('.close-friends');

// SKINS
let WindowBtnSkins = document.querySelector('.skins-btn');
let ModalOverlaySkins = document.querySelector('.skins-bg');
let CloseWindowSkins = document.querySelector('.close-skins');

// DELETE REPLAY
let ModalDeleteReplayBtn = document.querySelectorAll('.icon-trash');
let ModalOverlayDeleteReplay = document.querySelectorAll('.delete-replay-bg');
let CloseDeleteReplay = document.querySelectorAll('.no-delete-replay');

// COLOR PICKER
let colorPickerBtn = document.querySelector('.color-picker-btn');
let colorPickerOverlay = document.querySelector('.color-picker-overlay');
let colorPickerClose = document.querySelector('.color-picker-close')

// SETTINGS
settingsBtn.addEventListener('click', function() {
  settingsBg.classList.add('settings-bg-active');
});

settingsClose.addEventListener('click', function(){
    settingsBg.classList.remove('settings-bg-active');
});

// SETTINGS RESTART
settingsBtnRestart.addEventListener('click', function() {
  settingsBgRestart.classList.add('settings-bg-active-restart');
});

settingsCloseRestart.addEventListener('click', function() {
  settingsBgRestart.classList.remove('settings-bg-active-restart');
});

// VISUAL SETTINGS RESTART
VsmBtnRestart.addEventListener('click', function() {
  VsmBgRestart.classList.add('vsm-bg-active-restart');
});

VsmCloseRestart.addEventListener('click', function() {
  VsmBgRestart.classList.remove('vsm-bg-active-restart');
});

// CONTROLS
WindowBtnControls.addEventListener('click', function() {
  ModalOverlayControls.classList.add('controls-bg-active');
});

CloseWindowControls.addEventListener('click', function(){
    ModalOverlayControls.classList.remove('controls-bg-active');
});

// REPLAYS
WindowBtnReplays.addEventListener('click', function() {
  ModalOverlayReplays.classList.add('replays-bg-active');
});

CloseWindowReplays.addEventListener('click', function(){
    ModalOverlayReplays.classList.remove('replays-bg-active');
});

// LEADERBOARD
WindowBtnLeaderboard.addEventListener('click', function() {
  ModalOverlayLeaderboard.classList.add('leaderboard-bg-active');
});

CloseWindowLeaderboard.addEventListener('click', function(){
    ModalOverlayLeaderboard.classList.remove('leaderboard-bg-active');
});

// FRIENDS
WindowBtnFriends.addEventListener('click', function() {
  ModalOverlayFriends.classList.add('friends-bg-active');
});

CloseWindowFriends.addEventListener('click', function(){
    ModalOverlayFriends.classList.remove('friends-bg-active');
});

// SKINS
WindowBtnSkins.addEventListener('click', function() {
  ModalOverlaySkins.classList.add('skins-bg-active');
});

CloseWindowSkins.addEventListener('click', function(){
    ModalOverlaySkins.classList.remove('skins-bg-active');
});

// DELETE REPLAY
ModalDeleteReplayBtn.addEventListener('click', function() {
  ModalOverlayDeleteReplay.classList.add('delete-replay-bg-active');
});

CloseDeleteReplay.addEventListener('click', function(){
  ModalOverlayDeleteReplay.classList.remove('delete-replay-bg-active');
});

// COLOR PICKER
colorPickerBtn.addEventListener('click', function() {
    colorPickerOverlay.classList.add('color-picker-overlay-active');
});
  
colorPickerClose.addEventListener('click', function(){
    colorPickerOverlay.classList.remove('color-picker-overlay-active');
});
