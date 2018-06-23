var vid = new Array();
function pinvideos() {
    axios.get('http://demo6669321.mockable.io/videos')
        .then(function (response) {
            inserir(response.data.videos);
        })
        .catch(function (error) {
            console.log((error))
        });
}
pinvideos();
function inserir(valor) {
    var i = 0;
    while (i < valor.length){
        this.vid.push(valor[i]);
        i++;
    }
    console.log(this.vid[1]);
    console.log(this.vid.length);
}

class Modal {

    constructor () {
        this.modalContainer = document.createElement('div');
        this.modalContainer.className = 'modal';
        document.body.appendChild(this.modalContainer);

        const contentContainer = document.createElement('div');
        contentContainer.className = 'container';
        this.modalContainer.appendChild(contentContainer);

        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.className = 'close-button';
        contentContainer.appendChild(closeButton);
        closeButton.addEventListener('click', this.close.bind(this));
        this.content = document.createElement('iframe');
        contentContainer.appendChild(this.content);
        this.content.setAttribute("src","https://www.youtube.com/embed/");
        this.content.setAttribute("src","https://www.youtube.com/embed/");
        this.content.setAttribute("height","315");
        this.content.setAttribute("width","560");
        this.content.setAttribute("frameborder","0");
        this.content.setAttribute("allow","encrypted-media");
        this.content.setAttribute("allowfullscreen", "true");
    }

    open () {
        this.modalContainer.classList.add('open');
    }

    close () {
        this.modalContainer.classList.remove('open');
        this.content.setAttribute()
    }
}

let i = 0,
    m = new Modal();

document.getElementById('btmmodal').addEventListener('click', () => {

    m.open();
});
//paginação
function listItems(items, pageActual, limitItems){
    let result = [];
    return result;
};