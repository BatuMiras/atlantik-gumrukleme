function searchFunction () {
    
    let input, filter, ul, li, a, i, txtValue;
    
    input = document.querySelector("#inputBtn");
    filter = input.value.toUpperCase();
    ul = document.querySelector("#myList");
    li = ul.getElementsTagName ("li");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}