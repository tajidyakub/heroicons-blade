/**
 * Fetch and replacing the icons during the event
 * DOMContentLoaded with window.fetch.
 */

 const request = (url) => {
    return new Request(url, {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Accept': 'image/svg+xml',
            'User-Agent': 'tj/heroicons-blade https://github.com/tajidyakub/heroicons-blade.git'
        },
    })
}

/**
 * Insert the <path> section of the fetched svg text file
 * into the designated Element.
 * 
 * @param {string} svg 
 * @param {Element} el 
 */
const insertPath = (svgText, el) => {
    
    let newEl = document.createElement('div')
    newEl.innerHTML = svgText
    
    // Standard style
    el.style.display = 'inline'
    el.style.marginBottom = '.2rem'

    newEl.querySelectorAll('path').forEach(p => {
        el.appendChild(p)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    document
        .querySelectorAll('svg[data-group="heroicons"]')
            .forEach(heroIcon => {
                
                let iconPropName = heroIcon.dataset.name
                let iconPropNameSplitted = iconPropName.split(":")
                let iconType = iconPropNameSplitted[0]
                let iconName = iconPropNameSplitted[1]
                let iconPath = `/icons/${iconType}/${iconName}.svg`
                
                window.fetch(request(iconPath))
                    .then(res => {
                        if (res.ok) {
                                return res.text()
                            }
                            console.error('Failed to fetch the svg icon.')
                    })
                    .then(data =>  insertPath(data, heroIcon))
                    .catch(err => console.error(err.message))
    })
})