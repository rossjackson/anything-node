import { filter, from, map } from 'rxjs'

const observable = () => {
    const array = [2, 3, 9, 8, 4, 1, 5, 6, 7]

    const obsFrom = from(array).pipe(
        filter((e) => e % 2 === 0),
        map((e) => e * e)
    )

    obsFrom.subscribe(console.log)
}

observable()
