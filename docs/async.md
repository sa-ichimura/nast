Typescript async/awaitの概要
# Promise
- タスクを表す単なるオブジェクト
- then関数にコールバックスタックを渡すことタスクを対話することができる
Promiseを使わないパターン
```
setTimeout(function() {
    console.log('First');
    setTimeout(function() {
        console.log('Second');
        setTimeout(function() {
            console.log('Third');
            setTimeout(function() {
                console.log('Fourth');
            }, 500);
        }, 1000);
    }, 500);
}, 1000);
```

Promiseで書き換える
```
const resolver = (msg, timeout) => new Promise((resolve) => {
    console.log(msg);
    setTimeout(resolve, timeout);
});
resolver('First', 500)
    .then(() => resolver('Second', 500))
    .then(() => resolver('Third', 1000))
    .then(() => resolver('Fourth', 500));
```

# async await
- 非同期なコードを同期的に書くことができる

### await
- Promiseを受け取り、タスクを完了するまで待機する

### saync
- メソッドに少なくとも1つのawaitがある場合関数の前にasyncをつける必要がある

Promiseで書き換えた例をasync/awitを使って書き換える
```
const resolver = (msg, timeout) => new Promise((resolve) => {
    console.log(msg);
    setTimeout(resolve, timeout);
});
async function run() {
    await resolver('First', 1000);
    await resolver('Second', 500);
    await resolver('Third', 1000);
    await resolver('Fourth', 500);
}
run();
```