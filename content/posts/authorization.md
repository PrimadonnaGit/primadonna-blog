+++
title = "사용자 인증방식의 종류"
date = "2022-04-05"
description = "사용자 인증방식의 종류에 대해서 알아보자"
categories = ["Authorization"]
externalLink = ""
featuredImage = "https://images.unsplash.com/photo-1519400197429-404ae1a1e184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
+++



# ID/Password

가장 기본이 되는 인증 방식. 대부분 Password를 암호화하여 DB와 대조하는 방식으로 사용된다.

# Cookie/Session 

서버에서 사용자의 정보를 세션에 기록하여 인증

__세션 인증 방식의 특징__
1. HTTP 요청 중 쿠키가 탈취당해도, 쿠키 (세션 ID)는 의미 있는 값이 아니기 때문에 세션 하이재킹 공격에 노출될 가능성이 있음. -> HTTPS 사용 or 세션 유효기간
2. 세션 저장소를 사용함. -> 대부분 메모리에 저장하여 RAM에 부하가 생길 가능성 있음
3. 서버 확장시 세션 정보의 동기화 문제
4. 서버 / 세션 저장소의 부하
5. 웹 / 앱 간 상이한 쿠키-세션 처리 로직
6. 클라이언트의 상태를 유지하므로, Stateful

## Basic Auth

HTTP 헤더에 `<id>:<password>` 값을 base64로 인코딩하여 담아 전송하는 방식.

```
Authorization : Basic Base64(id:password)
```

### 동작 방식

1. 서버는 클라이언트에게 `401 (Unauthorized)` 응답 코드를 가지고 응답
2. 최소한 한 번의 시도에 포함된 `WWW-Authenticate(en-US)` 응답 헤더로 권한을 부여하는 방법에 대한 정보를 제공
3. 서버와 인증을 하기를 원하는 클라이언트는 `Authorization` 요청 헤더 필드에 인증 정보를 포함함으로써 인증을 수행


[__WWW-Authenticate(en-US)__](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate)
* HTTP WWW-Authenticate 응답 헤더는 리소스에 액세스하는 데 사용해야 하는 인증 방법을 정의. 
* 401 응답과 함께 보내짐
* `WWW-Authenticate: <type> realm=<realm>[, charset="UTF-8"]`


![](https://images.velog.io/images/primadonna/post/a2bf4883-32fd-4017-9e72-aa59e42d4c18/image.png)

중간에 패킷을 가로채 헤더를 Base64로 디코딩하면, ID와 Password가 그대로 노출되기 때문에 HTTPS(TLS)를 연결 위에서 써야함.



# Web-Token

__Self-Contained & Stateless__
* 서버의 상태를 저장하지 않음
* 토큰 자체로 정보를 가지고 있어 별도의 인증 서버가 필요 없음
* 요청을 받은 서버 자체에서 인증 프로세스를 수행할 수 있음
* JSON 포맷으로 통신하기 때문에 어떤 Client(web, app, ...) 에서도 이용할 수 있음



## JWT

`.` 를 구분자로 `header`, `payload`, `signature` 세 파트를 각각 다른 방법으로 인코딩하여 HTTP 헤더에 담아 전송하는 방식.

```
Authorization: JWT <header>.<payload>.<signature>
```

* JSON 포맷을 이용한 Web Token
* _Claim based Token_
* 두 개체에서 JSON 객체를 이용해 Self-contained 방식으로 정보를 안전하게 전달
* 회원 인증, 정보 전달에 주로 사용

>`Claim` : 사용자에 대한 프로퍼티 / 속성
`Self-contained` : 자체 포함, 즉 토큰 자체가 정보, key-value 형태


[참고](https://sanghaklee.tistory.com/47)

## OAuth

인증 및 인가를 위한 오픈 프로토콜, 사용자가 Facebook이나 트위터 같은 인터넷 서비스의 기능을 다른 애플리케이션 (데스크톱, 웹, 모바일 등)에서도 사용할 수 있게 한 것.

>인증 (Authentication) : 본인 여부를 확인 하는 것
인가 (Authorization) : 서비스나 시스템에 접근 할 수 있도록 권한을 부여하는 것


### OAuth 1.0 대표 용어

* `User` : Service Provider에 계정을 가지고 있으면서, Consumer를 이용하려는 사용자
* `Service Provider` : OAuth를 사용하는 Open API를 제공하는 서비스
* `Consumer` : OAuth 인증을 사용해 Service Provider의 기능을 사용하려는 애플리케이션이나 웹 서비스
* `Request Token` : Consumer가 Service Provider에게 접근 권한을 인증받기 위해 사용하는 값. 인증이 완료된 후에는 Access Token으로 교환
* `Access Token` : 인증 후 Consumer가 Service Provider의 자원에 접근하기 위한 키를 포함한 값

### OAuth Dance, OAuth 1.0 인증 과정

OAuth를 이용해 사용자 인증 하는 과정을 OAuth Dance라 한다.

![](https://images.velog.io/images/primadonna/post/8c057714-c152-42ff-bc74-5a21caf7a1b7/image.png)

1. Request Token의 요청과 발급
2. 사용자 인증 페이지 호출
3. 사용자 로그인 완료
4. 사용자 권한 요청 및 수락
5. Access Token 발급
6. Access Token을 이용해 서비스 정보 요청


### SAML (Security Assertion Markup Language)

SSO (Single Sign On)이 필요할 때 많이 쓰이는 인증방식.

#### SAML의 인증 절차

![](https://images.velog.io/images/primadonna/post/e66e7331-e0d8-4fa4-b9a3-37336d398cde/image.png)

* Request : User가 로그인 버튼을 클릭
* Validation: SAML과 Identity Provider가 인증을 위해 연결됨
* Login: User의 ID와 비밀번호를 입력
* Token creation: User가 올바른 정보를 입력하면, SAML 토큰이 Service Provider에게 제공되어 서버에 로그인하는 것을 허가함.

> OAuth와 SAML의 차이
SAML은 Authentication에 특화되어 있는 프로토콜. (집 키)
OAuth는 Authorization에 특화. 권한을 부여하는 것에 집중되어 있음. (집의 규칙)



#### 참고 자료

* [서버인증방식종료_세션/쿠키,토큰방식](https://cornswrold.tistory.com/503)
* [[Security] 사용자 인증방식 종류와 결정](https://hyeonyeee.tistory.com/72)
* [OAuth와 춤을](https://d2.naver.com/helloworld/24942)
* [Okta](https://www.okta.com/identity-101/saml-vs-oauth/)
