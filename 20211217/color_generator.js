const generator = {
    btn : document.querySelector('.btn-generate'),
    inp : document.querySelector('.inp-phone'),
    onGenerate : () => {
        const phone = generator.inp.value;
        const cLen = Math.floor(phone.length / 3);
        const r = phone.slice(0, cLen) % 256;
        const g = phone.slice(cLen, -cLen) % 256;
        const b = phone.slice(-cLen) % 256;
        document.body.style.backgroundColor = `rgb(${ r },${ g },${ b })`;
    }
}

generator.btn.addEventListener('click', generator.onGenerate);