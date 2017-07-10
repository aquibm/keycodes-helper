import IdbKvStore from 'idb-kv-store'

import App from './app'
import '../css/style.css'

const db = new IdbKvStore('key_history')

const root = document.getElementById('root')
new App(root, db)
