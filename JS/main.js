class Modal {
    constructor () {
        var vid;
        axios.get('http://demo6669321.mockable.io/videos')
            .then(function (response) {
                console.log(response.data.videos[0].id);
                console.log(response.data.videos[0].title);
                vid = response.data.videos;
            })
            .catch(function (error) {
                console.log((error))
            });
        console.log(vid[0]);

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
        this.content.setAttribute("src","https://www.youtube.com/embed/".concat(videos[0].id));
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
