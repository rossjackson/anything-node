import path from 'path'
import { Worker } from 'worker_threads'

const worker = new Worker(path.resolve('src/workerThreads/workerThreads.js'), {
    workerData: { start: 42 },
})

worker.on('message', (data) => {
    console.log(`worker => main: ${data}`)
})
