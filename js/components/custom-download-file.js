const document1 = document.getElementById("document-1");
const document2 = document.getElementById("document-2");
const document3 = document.getElementById("document-3");
const document4 = document.getElementById("document-4");
const document5 = document.getElementById("document-5");

document1.addEventListener("click", function () {
    downloadFile("file-upload", "Информационная клаузула.pdf");
});

document2.addEventListener("click", function () {
    downloadFile("file-upload", "Согласия.pdf");
});

document3.addEventListener("click", function () {
    downloadFile("file-upload", "Список документов для подачи 1.pdf");
});

document4.addEventListener("click", function () {
    downloadFile("file-upload", "Список документов для подачи 2.pdf");
});

document5.addEventListener("click", function () {
    downloadFile("file-upload", "Список документов для подачи 1.pdf");
});

function downloadFile(filePath, fileName) {
    var downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", filePath);
    downloadLink.setAttribute("download", fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
