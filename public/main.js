getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/1.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/3.html")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let div = document.createElement('div')
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let dom = request.responseXML
            let text = dom.getElementsByTagName('warning')[0].textContent
            let p = document.createElement('p')
            p.innerHTML = text.trim()
            document.body.appendChild(p)
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const bool = JSON.parse(request.response)
            console.log(`我是请求的json:${bool}`);
        }
    }
    request.send()
}
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "/page2.json");
    request.onreadystatechange = () => {
        if (request.readyState === '4' && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            })
        }
    }
    request.send();
}