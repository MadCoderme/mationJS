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

document.getElementById('btn-gen').addEventListener('click', () => {
    var chunks = [];
    var canvas_stream = document.getElementById('render-canvas').captureStream(60)
    media_recorder = new MediaRecorder(canvas_stream, { mimeType: "video/webm; codecs=vp9" })
    media_recorder.ondataavailable = (evt) => { 
        chunks.push(evt.data) 
    }
    media_recorder.onstop = () => {
        var blob = new Blob(chunks, { type: "video/webm" });
        const recording_url = URL.createObjectURL(blob)
        let vid = document.getElementById('result')
        vid.src = recording_url
        vid.style.display = 'block'
    }

    eval(editor.getValue())

})