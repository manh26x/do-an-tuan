$(document).ready(() => {
    for(let i = 1; i <=3; i++) {
        $('#imageUpload'+i).change(function () {
            readURL(this, i);
        });
    }
});
function readURL(input, index) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview'+index).css('background-image', 'url('+e.target.result +')');
            $('#imagePreview'+index).hide();
            $('#imagePreview'+index).fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
