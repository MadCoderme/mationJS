var editor = null
var media_recorder = null

require.config({ paths: { 'vs': 'https://cdn.bootcdn.net/ajax/libs/monaco-editor/0.20.0/min/vs' } });

require(['vs/editor/editor.main'], function () {
    editor = monaco.editor.create(document.getElementById('container'), {
        value: 
`(async() => {
    const scene = createScene('render-canvas', {
        background: 'black',
        dimension: [854, 480]
    })
    startRecording()

    // Your Codes here

    stopRecording()
})()`,
        language: 'javascript',
        theme: 'vs-dark'
    });
});


document.getElementById('btn-run').addEventListener('click', () => {
    eval(editor.getValue())
})