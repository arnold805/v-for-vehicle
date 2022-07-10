export default function CsrfToken() {
    return (
      document.querySelector("meta[name='csrf-token']").getAttribute("content")
    )
}