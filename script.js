const addressBar = document.querySelector('.address-bar');
const content = document.querySelector('.content');

function loadUrl(url) {
    // Add https:// if not present and not starting with http://
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }
    content.innerHTML = `<iframe src="${url}" width="100%" height="100%" frameborder="0"></iframe>`;
    addressBar.value = url;
}

// Load Google initially
loadUrl('https://www.google.com');

addressBar.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        loadUrl(this.value);
    }
});

document.getElementById('reload').addEventListener('click', function() {
    const iframe = content.querySelector('iframe');
    if (iframe) {
        iframe.src = iframe.src;
    }
});
