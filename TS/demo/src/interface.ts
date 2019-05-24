interface IPerson {
  /** id. */
  id: number,
  name: string;
  age: number;
  birthday?: string;
  readonly sex: string;
  [prop: string]: any;
}

interface IPersonFun {
  // 声明函数类型
  // (参数: 参数类型): 返回值类型
  (person: IPerson): IPerson
}

let persones:IPerson[] = []

function addPerson(person: IPerson): void {
  if (!persones.some(x => x.id === person.id)) {
    persones.push(person)
    console.log(`用户已添加：`, persones)
  } else {
    console.log(`用户已存在：`, persones)
  }
}

const setPerson: IPersonFun = function setPerson(person) {
  let index = persones.length && persones.findIndex(x => x.id === person.id)
  if(index !== -1) {
    persones[index] = person
  }
  console.log(persones)
  return person
}

addPerson({
  id: 1,
  name: 'he',
  age: 26,
  sex: '男',
  occupation: 'web'
})
setPerson({
  id: 1,
  name: 'he777',
  age: 26,
  sex: '女',
  occupation: 'web'
})

