function formatHTML() {
    var input = document.getElementById('input').value;
    var formattedHTML = input.trim();

    // Quitar la primera y última comilla, si existen
    if (formattedHTML.startsWith('"') && formattedHTML.endsWith('"')) {
        formattedHTML = formattedHTML.substring(1, formattedHTML.length - 1);
    }

    document.getElementById('output').textContent = formattedHTML;
}

function beautifyHTML() {
    var html = document.getElementById('output').textContent;
    var beautifiedHTML = html
        .replace(/<\//g, '\n</')
        .replace(/></g, '>\n<')
        .replace(/<script/g, '\n<script')
        .replace(/<\/script>/g, '</script>\n')
        .replace(/<form/g, '\n<form')
        .replace(/<\/form>/g, '</form>\n')
        .replace(/<iframe/g, '\n<iframe')
        .replace(/<\/iframe>/g, '</iframe>\n')
        .split('\n')
        .map(line => line.trim()) // Eliminar espacios en blanco al inicio y al final de cada línea
        .join('\n');

    document.getElementById('output').textContent = beautifiedHTML;
}

function copyToClipboard() {
    var textArea = document.createElement('textarea');
    var content = document.getElementById('output').textContent;
    content = content.replace(/\n\s*\n/g, '\n'); // Eliminar saltos de línea adicionales
    textArea.value = content.trim(); // Eliminar espacios en blanco al inicio y al final
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}


