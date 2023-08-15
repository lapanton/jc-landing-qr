export const trimAudio = (audioBlob, callback) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
        const audioData = event.target.result;

        audioContext.decodeAudioData(audioData, (buffer) => {
            let duration = buffer.duration;

            if (duration <= 60) {
                callback(audioBlob);  // If duration is less than or equal to 60 seconds, return original blob
                return;
            }

            // If duration exceeds 60 seconds, process the buffer
            const numberOfChannels = buffer.numberOfChannels;
            let newBuffer = audioContext.createBuffer(numberOfChannels, audioContext.sampleRate * 60, audioContext.sampleRate);

            for (let channel = 0; channel < numberOfChannels; channel++) {
                let oldBufferData = buffer.getChannelData(channel);
                let newBufferData = newBuffer.getChannelData(channel);
                for (let i = 0; i < oldBufferData.length && i < newBufferData.length; i++) {
                    newBufferData[i] = oldBufferData[i];
                }
            }

            const bufferToWave = (buf, len) => {
                const numOfChan = buf.numberOfChannels;
                const length = len * numOfChan * 2 + 44;
                const buffer = new ArrayBuffer(length);
                const view = new DataView(buffer);
                const channels = [];
                let i;
                let sample;
                let offset = 0;
                let pos = 0;

                // write WAVE header
                setUint32(0x46464952);                         // "RIFF"
                setUint32(length - 8);                         // file length - 8
                setUint32(0x45564157);                         // "WAVE"

                setUint32(0x20746d66);                         // "fmt " chunk
                setUint32(16);                                 // length = 16
                setUint16(1);                                  // PCM (uncompressed)
                setUint16(numOfChan);
                setUint32(buf.sampleRate);
                setUint32(buf.sampleRate * 2 * numOfChan);     // avg. bytes/sec
                setUint16(numOfChan * 2);                      // block-align
                setUint16(16);                                 // 16-bit (hardcoded in this demo)

                setUint32(0x61746164);                         // "data" - chunk
                setUint32(length - pos - 4);                   // chunk length

                // write interleaved data
                for (i = 0; i < buf.getChannelData(0).length && i < len; i++) {
                    for (let channel = 0; channel < numOfChan; channel++) {
                        sample = Math.max(-1, Math.min(1, buf.getChannelData(channel)[i]));
                        sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767)|0;  // convert to 16-bit signed int
                        view.setInt16(pos, sample, true);                                   // little endian
                        pos += 2;
                    }
                }

                // create Blob
                return new Blob([buffer], {type: "audio/wav"});

                function setUint16(data) {
                    view.setUint16(pos, data, true);
                    pos += 2;
                }

                function setUint32(data) {
                    view.setUint32(pos, data, true);
                    pos += 4;
                }
            };

            const trimmedAudioBlob = bufferToWave(newBuffer, audioContext.sampleRate * 60); // 60 seconds
            callback(trimmedAudioBlob);
        });
    };

    fileReader.readAsArrayBuffer(audioBlob);
}