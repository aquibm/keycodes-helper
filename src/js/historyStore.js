class HistoryStore {
    constructor() {
        this.history = []
    }

    addItem(item) {
        const index = this.history.findIndex(i => i.code === item.code)

        if (index < 0) {
            this.history = [item, ...this.history]
            return
        }

        this.history = [
            item,
            ...this.history.slice(0, index),
            ...this.history.slice(index + 1, this.history.length)
        ]
    }

    first() {
        return this.history[0] || {}
    }

    get() {
        return this.history
    }
}

export default HistoryStore
