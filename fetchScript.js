// from web dev simplified ... https://www.youtube.com/watch?v=cuEtnrL9-H0

/* 
these comments are included due to initial call to api failed due to chromium corb policy

see documentation on CORB at https://www.chromium.org/Home/chromium-security/corb-for-developers
and https://www.chromium.org/Home/chromium-security/extension-content-script-fetches

solution found at: 
https://stackoverflow.com/questions/54301686/how-to-fixed-set-the-requests-mode-to-no-cors
https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors

other helpful fetch info:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://developer.mozilla.org/en-US/docs/Web/API/Request/mode

*/
console.log(fetch('https://n161.tech/t/dummyapi/explorer#user', {
    mode: "no-cors"
}))

