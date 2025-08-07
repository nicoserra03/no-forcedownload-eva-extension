function actualizarEnlaces() {
    const links = document.querySelectorAll('a[href*="forcedownload="]');
    links.forEach(link => {
        try {
            const url = new URL(link.href);
            if (url.searchParams.get("forcedownload") !== "0") {
                url.searchParams.set("forcedownload", "0");
                link.href = url.toString();
            }
        } catch (e) {
            //LINK NO VALIDO
        }
    });
}

window.addEventListener("DOMContentLoaded", actualizarEnlaces);

const observer = new MutationObserver(actualizarEnlaces);
observer.observe(document.body, { childList: true, subtree: true });
