import Script from 'next/script'

const anchorInlineScript = `document.querySelectorAll('a').forEach((anchor) => {
  const selector = anchor.href.split('/').at(-1)

  if (!selector?.startsWith('#')) return

  const target = document.querySelector(selector)

  anchor.addEventListener('click', (event) => {
    event.preventDefault()

    if (selector === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})`

export const AnchorScript = () => {
  return <Script id="anchor-script">{anchorInlineScript}</Script>
}
