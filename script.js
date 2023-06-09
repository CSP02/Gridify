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
    const gridColGap = document.getElementById('grid_column_gap');
    const gridRowGap = document.getElementById('grid_row_gap');
    const gridGap = document.getElementById('grid_gap');
    const gridTemAreasUserIn = document.getElementById('grid_template_areas_user_in');
    const gridTempAreasContainer = document.getElementById('grid_template_areas_container');
    const justifySelf = document.getElementById('grid_justify_self');
    const justifySelfControls = justifySelf.getElementsByTagName('input');
    const alignSelf = document.getElementById('grid_align_self');
    const alignSelfControls = alignSelf.getElementsByTagName('input');
    const gridColumnRowStartEnd = document.getElementById('grid_column_row_start_end');
    const gridColumnRowStartEndControls = gridColumnRowStartEnd.getElementsByTagName('input');
    const gridContainerColRow = document.getElementById('grid_col_row_container');

    gridTemAreasUserIn.value = 'blue blue blue blue purple\nteal teal teal yellow yellow\nteal teal teal yellow yellow\norange orange orange orange orange'
    gridColGap.addEventListener('change', (event) => {
        templateContainer.style.columnGap = event.target.value + 'px';
    });

    gridRowGap.addEventListener('change', (event) => {
        templateContainer.style.rowGap = event.target.value + 'px';
    })

    gridGap.addEventListener('change', (event) => {
        templateContainer.style.gap = event.target.value + 'px';
    });

    for(let i = 0; i < gridColumnRowStartEndControls.length; i++){
        const control = gridColumnRowStartEndControls[i];
        const teal = gridContainerColRow.getElementsByClassName('teal')[0];
        control.addEventListener('change', (event) => {
            
            teal.style.setProperty(`${control.id}`, event.target.value)
            document.getElementById('grid_area_eq').value = teal.style.gridArea ? teal.style.gridArea : '';
            document.getElementById('grid_col_eq').value = teal.style.gridColumn ? teal.style.gridColumn : '';
            document.getElementById('grid_row_eq').value = teal.style.gridRow ? teal.style.gridRow : '';
        })
    }

    gridTemAreasUserIn.addEventListener('input', (event) => {
        gridTempAreasContainer.style.gridTemplateAreas = "";
        event.target.value.split('\n').forEach(line => {
            gridTempAreasContainer.style.gridTemplateAreas += `"${line}"`;
        })
    });

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

    for (let i = 0; i < justifySelfControls.length; i++) {
        justifySelfControls[i].addEventListener('change', (event) => {
            justifySelf.getElementsByClassName("teal")[0].style.justifySelf = event.target.value;
        });
    }

    for (let i = 0; i < alignSelfControls.length; i++) {
        alignSelfControls[i].addEventListener('change', (event) => {
            alignSelf.getElementsByClassName("teal")[0].style.alignSelf = event.target.value;
        });
    }

    for (let i = 0; i < templateColControls.length; i++) {
        templateColControls[i].addEventListener('change', (event) => {
            let Col1 = templateColControls[0].value ? templateColControls[0].value + 'px' : '';
            let Col2 = templateColControls[1].value ? templateColControls[1].value + 'px' : '';
            let Col3 = templateColControls[2].value ? templateColControls[2].value + 'px' : '';
            let Col4 = templateColControls[3].value ? templateColControls[3].value + 'px' : '';
            let Col5 = templateColControls[4].value ? templateColControls[4].value + 'px' : '';
            templateContainer.style.gridTemplateColumns = `${Col1} ${Col2} ${Col3} ${Col4} ${Col5}`;
        });
    }

    for (let i = 0; i < templateRowControls.length; i++) {
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