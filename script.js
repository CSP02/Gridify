window.onload = () => {
    const alignContent = document.getElementById('align_content');
    const justifyContent = document.getElementById('justify_content');
    const justifyItems = document.getElementById('justify_items');
    const alignItems = document.getElementById('align_items');
    const alignContentContainer = document.getElementById('align_content_container');
    const justifyContentContainer = document.getElementById('justify_content_container');
    const alignItemsContainer = document.getElementById('align_items_container');
    const justifyItemsContainer = document.getElementById('justify_items_container');
    const alignContentControls = alignContent.getElementsByTagName('input');
    const justifyContentControls = justifyContent.getElementsByTagName('input');
    const alignItemsControls = alignItems.getElementsByTagName('input');
    const justifyItemsControls = justifyItems.getElementsByTagName('input');
    const templateColControls = document.getElementsByClassName('grid_template_col');
    const templateRowControls = document.getElementsByClassName('grid_template_row');
    const templateContainer = document.getElementById('grid_template_container');

    for (let i = 0; i < alignContentControls.length; i++) {
        alignContentControls[i].addEventListener('change', (event) => {
            console.log(alignContentControls[i])
            alignContentContainer.style.alignContent = event.target.value;
        });
    }

    for (let i = 0; i < justifyContentControls.length; i++) {
        justifyContentControls[i].addEventListener('change', (event) => {
            justifyContentContainer.style.justifyContent = event.target.value;
        });
    }

    for (let i = 0; i < alignItemsControls.length; i++) {
        alignItemsControls[i].addEventListener('change', (event) => {
            alignItemsContainer.style.alignItems = event.target.value;
        });
    }

    for (let i = 0; i < justifyItemsControls.length; i++) {
        justifyItemsControls[i].addEventListener('change', (event) => {
            justifyItemsContainer.style.justifyItems = event.target.value;
        });
    }

    for(let i = 0; i < templateColControls.length; i++) {
        templateColControls[i].addEventListener('change', (event) => {
            let Col1 = templateColControls[0].value ? templateColControls[0].value + 'px' : '';
            let Col2 = templateColControls[1].value ? templateColControls[1].value + 'px' : '';
            let Col3 = templateColControls[2].value ? templateColControls[2].value + 'px' : '';
            let Col4 = templateColControls[3].value ? templateColControls[3].value + 'px' : '';
            let Col5 = templateColControls[4].value ? templateColControls[4].value + 'px' : '';
            templateContainer.style.gridTemplateColumns = `${Col1} ${Col2} ${Col3} ${Col4} ${Col5}`;
        });
    }

    for(let i = 0; i < templateRowControls.length; i++) {
        templateRowControls[i].addEventListener('change', (event) => {
            let Row1 = templateRowControls[0].value ? templateRowControls[0].value + 'px' : '';
            let Row2 = templateRowControls[1].value ? templateRowControls[1].value + 'px' : '';
            let Row3 = templateRowControls[2].value ? templateRowControls[2].value + 'px' : '';
            let Row4 = templateRowControls[3].value ? templateRowControls[3].value + 'px' : '';
            let Row5 = templateRowControls[4].value ? templateRowControls[4].value + 'px' : '';
            templateContainer.style.gridTemplateRows = `${Row1} ${Row2} ${Row3} ${Row4} ${Row5}`;
        });
    }
}