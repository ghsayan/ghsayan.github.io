function input(n){
    document.form.field.value = document.form.field.value + n
}
function result(){
    document.form.field.value=eval(document.form.field.value)
}
function erase(){
    document.form.field.value=""
}
function backspace(){
    document.form.field.value=document.form.field.value.substring(0,document.form.field.value.length-1)
}
function neg(){
    document.form.field.value=document.form.field.value*(-1)
}