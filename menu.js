var menu2 = document.getElementById('menu-item-2');
var menubar_2_item = document.getElementById('menubar-2-item');

menubar_2_item.onclick = () => {
    if(menu2.classList.contains('menu-item-2-active')){
        menu2.classList.remove('menu-item-2-active');
    } else {
        menu2.classList.add('menu-item-2-active');
    }
}