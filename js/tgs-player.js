class TgsPlayer extends HTMLElement {
    static get observedAttributes() {
        return ['src', 'once', 'onclick', 'autoplay'];
    }

    constructor() {
        super();
        this._loadTgSticker();
    }

    async _loadTgSticker() {
        if (!window.RLottie) {
            const script = document.createElement('script');
            script.src = '/js/tgsticker.js';
            script.async = false;
            await new Promise((resolve) => {
                script.onload = resolve;
                document.head.appendChild(script);
            });
        }
    }

    // if exist onclick attribute, set the onclick event
    setPlayOnClick(picture) {
        if (this.hasAttribute('onclick')) {
            picture.onclick = () => {
                RLottie.playOnce(picture);
            };
        }
    }

    connectedCallback() {
        const picture = document.createElement('picture');
        
        const source = document.createElement('source');
        source.type = 'application/x-tgsticker';
        source.srcset = this.getAttribute('src') || '';
        
        picture.appendChild(source);
        this.appendChild(picture);
        this.setPlayOnClick(picture);

        // init RLottie after loading the script
        this._loadTgSticker().then(() => {
            RLottie.init(picture, {
                maxDeviceRatio: 2,
                cachingModulo: 3,
                noAutoPlay: !this.hasAttribute('autoplay'),
                playOnce: this.hasAttribute('once'),
            });
        });
    }
}

customElements.define('tgs-player', TgsPlayer);