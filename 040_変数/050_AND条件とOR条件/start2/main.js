const a = 0;
const b = 1;
const c = 3;
const d = 0;
console.log(a && b && c); // falsyが見つかったら結果として返す　見つからない場合は最後の値
console.log(a || b || c); // truesyが見つかったら結果として返す
console.log((a || b) && c); // 見てわかるようにグループ化
console.log((a || b) && (c || d));
//||

