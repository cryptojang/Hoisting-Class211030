console.log(x);

var x = "Hi!";

console.log(x);

/// var 변수의 경우 var x;가 앞에 붙어버리는 게 호이스팅! 근데 let은 다른다?
// let 은 에러뜸: 이니시에이팅 전에 x 접근 불가능 에러 뜸: reference 에러. 참조 에러.
// let 호이스팅이 안 되는 건 아닌데 초기화는안 됨. var은 undefined로 초기화(이니시)됨
//let, const 호이스팅 일어나긴 하지만 var랑 조금 다르다. let 처럼 차라리 에러 뜨는 게 개발자 입장 더 좋음
