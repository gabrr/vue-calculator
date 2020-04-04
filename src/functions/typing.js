export const typing = () => {
    document.addEventListener("keypress", e => {
        window.console.log(e.key)
        return e.key
    })
}