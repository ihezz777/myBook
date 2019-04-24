const Identity = value => ({
  map: fn => Identity(fn(value)),

  valueOf: () => value
});

const trace = x => {
  console.log(x);
  return x;
};

const u = Identity('2');
const u1 = (Identity('h') + Identity('i'));

const f = n => n + 1;
const g = n => n * 2;

const r1 = u.map(x => f(g(x)));
const r2 = u.map(g).map(f);

r1.map(trace); // 5
r2.map(trace); // 5
trace(u1)