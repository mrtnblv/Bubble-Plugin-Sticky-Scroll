function(instance, properties, context) {
    const style = document.createElement('style');
    style.innerHTML = `
        #${properties.element_id} {
            position: sticky;
            top: ${properties.offset}px;
            z-index: 999 !important;
        }
    `;
    document.head.appendChild(style);
}