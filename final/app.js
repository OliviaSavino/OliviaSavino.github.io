function updateVolume(
  volumeControl,
  volumePercent,
  analyser,
  bufferLength,
  dataArray
) {
  analyser.getByteFrequencyData(dataArray);
  const average = dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
  const volumeValue = (average * 100) / 128;
  volumeControl.value = volumeValue;
  volumePercent.textContent = `${Math.round(volumeValue)}%`;
  requestAnimationFrame(() =>
    updateVolume(
      volumeControl,
      volumePercent,
      analyser,
      bufferLength,
      dataArray
    )
  );
}

async function startMonitoring() {
  const volumeControl = document.getElementById("volume");
  const volumePercent = document.getElementById("volumePercent");
  let analyser, bufferLength, dataArray;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    microphone.connect(analyser);

    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    updateVolume(
      volumeControl,
      volumePercent,
      analyser,
      bufferLength,
      dataArray
    );
  } catch (err) {
    alert("Please allow microphone access to use this feature.");
    console.error("Error accessing the microphone", err);
  }
}

document.addEventListener("DOMContentLoaded", startMonitoring);
