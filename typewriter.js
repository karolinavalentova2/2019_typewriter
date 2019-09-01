
function startTypewriter() {
    const textElement = document.getElementById('typewriter');
    let content = textElement.textContent;

    textElement.innerText = '';

    let letterNumber = 0;
    let stopAt = content.length;

    textElement.style.display = 'block';

    let startWriting = setInterval(() => {
        // if the letterNumber equals stopAt it means we added all the letters from the array, so we stop the interval
        if(letterNumber === stopAt) {
            //Repeat everything in 3 seconds
            setTimeout(() => {
                //Do everything again
                startTypewriter();
            }, 3000);

            //Stop and delete the interval
            clearInterval(startWriting);
        } else {
            textElement.textContent = `${ textElement.textContent + content.charAt(letterNumber)}`;
            letterNumber++;
        }
    }, 200);
}

