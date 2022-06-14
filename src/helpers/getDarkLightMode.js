export function GetDarkLightMode() {
    const activeColor = localStorage.getItem('chakra-ui-color-mode')
    return activeColor
}
