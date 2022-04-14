export function createCard() {

    // todo
    const NFT = document.createElement('div')
    NFT.className = 'NFT'
        //top
    const NFTtop = document.createElement('div')
    NFTtop.className = 'NFT-top'
    NFT.appendChild(NFTtop)


    const mountNode = document.querySelector("#app")
    mountNode.appendChild(NFT)

    const imagen = document.createElement('img')
    imagen.src = './img/image-equilibrium.jpg'
    NFTtop.appendChild(imagen)

    const NFTvista = document.createElement('div')
    NFTvista.className = 'NFT-vista'
    NFTtop.appendChild(NFTvista)

    const imagenvista = document.createElement('img')
    imagenvista.src = './img/icon-view.svg'
    NFTvista.appendChild(imagenvista)



    //center
    const NFTcenter = document.createElement('div')
    NFTcenter.className = 'NFT-center'
    NFT.appendChild(NFTcenter)

    const NFTcentertop = document.createElement('div')
    NFTcentertop.className = 'NFT-center-top'
    NFTcenter.appendChild(NFTcentertop)

    const NFTcentertop1 = document.createElement('p')
    NFTcentertop1.textContent = "Equilibrium #3429"
    NFTcentertop.appendChild(NFTcentertop1)

    const NFTcentertop2 = document.createElement('p')
    NFTcentertop2.textContent = "Our Equilibrium collection promotes balance and calm."
    NFTcentertop.appendChild(NFTcentertop2)

    const NFTcenterbottom = document.createElement('div')
    NFTcenterbottom.className = 'NFT-center-bottom'
    NFTcenter.appendChild(NFTcenterbottom)

    const NFTcenterbottom1 = document.createElement('div')
    NFTcenterbottom.appendChild(NFTcenterbottom1)

    const imagen3 = document.createElement('img')
    imagen3.src = './img/icon-ethereum.svg'
    NFTcenterbottom1.appendChild(imagen3)

    const span = document.createElement('span')
    span.className = "NFT-center-bottom-L1"
    span.textContent = '0.041 ETH'
    NFTcenterbottom1.appendChild(span)

    const NFTcenterbottom2 = document.createElement('div')
    NFTcenterbottom.appendChild(NFTcenterbottom2)

    const imagen4 = document.createElement('img')
    imagen4.src = './img/icon-clock.svg'
    NFTcenterbottom2.appendChild(imagen4)

    const span2 = document.createElement('span')
    span2.className = "NFT-center-bottom-L2"
    span2.textContent = '3 days left'
    NFTcenterbottom2.appendChild(span2)


    //bottom

    const NFTbottom = document.createElement('div')
    NFTbottom.className = 'NFT-bottom'
    NFT.appendChild(NFTbottom)

    const imagen5 = document.createElement('img')
    imagen5.src = './img/image-avatar.png'
    NFTbottom.appendChild(imagen5)

    const NFTbottoml = document.createElement('div')
    NFTbottoml.className = 'NFT-bottom-l'
    NFTbottom.appendChild(NFTbottoml)

    const span3 = document.createElement('span')
    span3.textContent = 'Creation of'
    NFTbottoml.appendChild(span3)

    const span4 = document.createElement('span')
    span4.textContent = 'Jule Wyvern'
    NFTbottoml.appendChild(span4)
    return NFT
}