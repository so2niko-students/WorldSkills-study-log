const onSquareClick = ({ srcElement }) => {
    const toggler = {
        r : 'g',
        g : 'b',
        b : 'r'
    };
    if(srcElement.classList.contains('cell')){
        const prevColor = srcElement.dataset.rgb || 'b';
        const nextColor = toggler[prevColor];
        srcElement.innerText = nextColor;
        srcElement.dataset.rgb = nextColor;
    }
}

const onWheel = ({ srcElement, wheelDelta}) => {
    if(srcElement.classList.contains('cell')){
        const color = srcElement.dataset.rgb || 'r';
        let colorNum = Number(srcElement.dataset[color] || 0);
        
        if(wheelDelta > 0){
            colorNum = (colorNum + 10) % 256;
        }else{
            colorNum -= 10;
            if(colorNum < 0){
                colorNum = 256 + colorNum;
            }
        }

        srcElement.dataset[color] = colorNum;
        
        const r = srcElement.dataset.r || 0;
        const g = srcElement.dataset.g || 0;
        const b = srcElement.dataset.b || 0;

        srcElement.style.backgroundColor = `rgb(${ r },${ g }, ${ b })`;
    }
}

const onClickResetCells = () => {
    dom.cells.forEach(el => {
        el.dataset.r = 0;
        el.dataset.g = 0;
        el.dataset.b = 0;
        el.dataset.rgb = 'r';
        el.innerText = '';
        el.style.backgroundColor = 'white';

    });
}

const dom = {
    table : document.querySelector('.table'),
    cells : [...document.querySelectorAll('.cell')],
    btnReset : document.querySelector('.btn-reset'),
};

dom.table.addEventListener('click', onSquareClick);
dom.table.addEventListener('wheel', onWheel);
dom.btnReset.addEventListener('click', onClickResetCells);

//380974562233