document.addEventListener('DOMContentLoaded', function() {
    const inputCode = document.getElementById('input');
    const outputCode = document.getElementById('output');
    const uglifyButton = document.getElementById('button');

    uglifyButton.addEventListener('click', function() {
        const code = inputCode.value;
        const uglifiedCode = uglify(code);
        outputCode.value = uglifiedCode;
    });

    inputCode.addEventListener('click', function() {
        this.select();
    });

    outputCode.addEventListener('click', function() {
        this.select();
    });

    function uglify(code) {
        return code.replace(/\s/g, '');
    }
});