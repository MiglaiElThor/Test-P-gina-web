const redirections = {
    'jurado': 'jurado.html',

};

function handleRedirect() {
    const input = document.getElementById('redirectInput');
    const keyword = input.value.toLowerCase().trim();
    
    if (redirections.hasOwnProperty(keyword)) {
        window.location.href = redirections[keyword];
    }
    
    input.value = '';
    return false;
}