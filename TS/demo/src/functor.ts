interface Functor<T> {
  map<U>(f: (x: T) => U): Functor<U>
}

class Box<T> implements Functor<T> {
  value: T
  constructor(x: T) {
    this.value = x
  }
  map<U>(f: (x: T) => U): Box<U> {
    return new Box(f(this.value))
  }
  toString(): string {
    return `Box(${this.value.toString()})`
  }
}

const box = <T> (x: T): Box<T> => new Box(x)

const trim = (x: string) => x.trim()
const len = (x: string) => {
  console.log(x);
  return x.length}
const inc = (x: number) => x+1

console.log(box( '42' )
  .map(trim)
  .map(len)
  .map(inc))
