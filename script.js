function updateResult() {
    var htmlCode = document.getElementById("html-code").innerText;
    var cssCode = document.getElementById("css-code").innerText;
    var jsCode = document.getElementById("js-code").innerText;
    var resultContainer = document.getElementById("result-container");

    resultContainer.innerHTML = `<style>${cssCode}</style><script>${jsCode}</script>${htmlCode}`;
}

var codeEditors = document.getElementsByClassName("code-editor");
for (var i = 0; i < codeEditors.length; i++) {
    codeEditors[i].addEventListener("input", updateResult);
}

updateResult();
