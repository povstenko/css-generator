function range_border_radius_change() {
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