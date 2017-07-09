import HistoryStore from './history'

class App {
    constructor(mount) {
        if (!mount) throw Error('Must specify an element to mount the app')

        this.mount = mount
        this.handleKeydown = this.handleKeydown.bind(this)
        this.historyStore = new HistoryStore()

        window.addEventListener('keydown', this.handleKeydown)
    }

    handleKeydown(event) {
        const key = {
            code: event.keyCode,
            name: event.key
        }

        this.historyStore.addItem(key)
        this.render()
    }

    render() {
        const { code, name } = this.historyStore.first()

        this.mount.innerHTML = `
            <div class="key">
                <h1 class="key__code">${code}</h1>
                <h2 class="key__name">${name}</h2>
            </div>
        `
    }
}

export default App
