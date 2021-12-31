var hotItem = document.querySelectorAll('li.hot');
if (hotItem.length > 0) {
    for (var i = 0; i < hotItem.length; i++) {
        hotItem[i].className = 'cool';
    }
}