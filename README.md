Install then run `npm run cc`

**Expected result** (as in previous NodeJS version e.g., v18.17.0):

```
  basic test
    ✓ add correctly


  1 passing (4ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.js |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
```

**Actual result**:

a warning followed by passing test but 0% coverage

```
Transformation error for /home/meng/git/nyc-repro/src/index.js ; return original code
The "mod" argument must be an instance of Module. Received an instance of Module


  basic test
    ✓ add correctly


  1 passing (3ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
```
