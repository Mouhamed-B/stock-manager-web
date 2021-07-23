var i = 0
function switchInput(a,b) {
    i++
    $(a).on('click focus',function (e) {
        e.stopPropagation()
        let attr = $(this).attr('readonly')
        if (attr !== typeof undefined && attr !== false) {
            $(this).removeAttr('readonly')
        }           
        $(b)
            .attr('readonly','readonly')
            .attr('name','')
        if ($(this).attr('id')=='idcat') {
            $(this).attr('name','idcat')
        } else {
            $(this).attr('name','libellec')
        } 
    })
    if (i<2) {
        switchInput(b,a)
    }       
}
$('document').ready(function() {
    $('table a.nav-link').click(function () {
        $('table a.nav-link').removeClass('active')
        $('table a.nav-link').attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
    })
    switchInput('select#idcat','input#libellec')
})