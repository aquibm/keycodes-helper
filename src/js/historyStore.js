class HistoryStore {
    constructor(db) {
        this.history = []
        this.db = db
    }

    addItem(item) {
        const index = this.history.findIndex(i => i.code === item.code)

        if (index < 0) {
            this.history = [item, ...this.history]
        } else {
            this.history = [
                item,
                ...this.history.slice(0, index),
                ...this.history.slice(index + 1, this.history.length)
            ]
        }

        this.db.set('history', this.history)
    }

    first() {
        return this.history[0] || {}
    }

    get() {
        return this.history
    }

    hydrate() {
        return this.db
            .get('history')
            .then(history => history && (this.history = history))
            .catch(() => console.info('Could not hydrate history'))
    }
}

export default HistoryStore
