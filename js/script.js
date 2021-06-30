const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"xml",
    theme: 'dracula',
    placeholder: ":: HTML ::"
});

const cssEditor = CodeMirror(document.querySelector(".editor .code .css-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"css",
    theme: 'dracula',
    placeholder: ":: CSS ::"
});

const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"javascript",
    theme: 'dracula',
    placeholder: ":: Javascript ::"
});

function run(htmlEditor, cssEditor, jsEditor){

    let output = document.querySelector("#output");
    let txhtml = htmlEditor.getValue();
    let txcss = "<style>"+cssEditor.getValue()+"</style>";
    let txjs = jsEditor.getValue();
    
    output.contentDocument.body.innerHTML = txhtml+txcss; 
    if(txjs) { output.contentWindow.eval(txjs); }
}

document.querySelector("#btnRun").addEventListener("click", function(){
    run(htmlEditor, cssEditor, jsEditor);
});