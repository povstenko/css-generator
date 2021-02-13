function border_radius_change() {
    let tl_r = document.getElementById('tl-range').value;
    let tr_r = document.getElementById('tr-range').value;
    let bl_r = document.getElementById('bl-range').value;
    let br_r = document.getElementById('br-range').value;

    let tl_t = document.getElementById('tl-text');
    let tr_t = document.getElementById('tr-text');
    let bl_t = document.getElementById('bl-text');
    let br_t = document.getElementById('br-text');

    let ex = document.getElementById('example');
    let code = document.getElementById('code');

    tl_t.value = tl_r;
    tr_t.value = tr_r;
    bl_t.value = bl_r;
    br_t.value = br_r;

    ex.style.borderRadius = tl_r + 'px ' + tr_r + 'px ' + br_r + 'px ' + bl_r + 'px';
    code.value = 'border-radius: ' + tl_r + 'px ' + tr_r + 'px ' + br_r + 'px ' + bl_r + 'px;';
}

function background_color_change() {
    let r = document.getElementById('bcr-text').value;
    let g = document.getElementById('bcg-text').value;
    let b = document.getElementById('bcb-text').value;
    let a = document.getElementById('bca-text').value;

    let ex = document.getElementById('example');
    let code = document.getElementById('code');

    ex.style.backgroundColor = 'rgba('+r+', '+g+', '+b+', '+a+')';
    code.value = 'background-color: rgba('+r+', '+g+', '+b+', '+a+');';
}

function font_color_change() {
    let r = document.getElementById('fcr-text').value;
    let g = document.getElementById('fcg-text').value;
    let b = document.getElementById('fcb-text').value;
    let a = document.getElementById('fca-text').value;

    let text = document.getElementById('text');
    let code = document.getElementById('code');

    text.style.color = 'rgba('+r+', '+g+', '+b+', '+a+')';
    code.value = 'color: rgba('+r+', '+g+', '+b+', '+a+');';
}