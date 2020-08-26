function solution(s){
    return s.substr (Math.ceil(s.length/2) -1 , s.length % 2 === 1 ? 1 : 2);
};

// s.substr() ㅡ s 값의 특정 부분("어디에서 어디까지" 위치) 추출

// Math.ceil(s.length/2) -1 ㅡ 가운데 값의 위치 값

// s.length % 2 ㅡ s의 길이값에 (% 2)를 통해 나온 값이 1 = 홀수, 0 = 짝수로 구분

// s.length % 2 === 1 ? 1 : 2 ㅡ 결과값이 1(홀수)일때 참은 1, 0(짝수)일때는 2