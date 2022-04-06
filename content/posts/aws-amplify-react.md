+++ 
draft = false
date = 2022-04-07T00:05:17+09:00
title = "AWS Amplify로 React 앱 CI/CD 자동화하기"
description = "AWS Amplify 서비스를 알아봅시다."
authors = ["Jinwoo Hyun"]
featuredImage = "https://images.velog.io/images/primadonna/post/3713cfb4-3f33-43b7-84d0-a94ff05228ea/image.png"
externalLink = ""
slug = ""
tags = ["Amplify"]
categories = ["AWS"]
series = []
+++

# 개요

AWS의 Amplify 서비스를 이용하여 React 앱을 Github와 연동해 자동 배포해주는 CI/CD를 하는 과정입니다.

# 시작하기

![](https://images.velog.io/images/primadonna/post/cf1038ab-20b2-4922-8b47-5b03ac0c8dc4/image.png)

서버에 이미 빌드되어있는 React 앱을 배포할 것이기 때문에 **Deliver** 항목의 **Get started**를 눌러 시작합니다.

# Github 연동

![](https://images.velog.io/images/primadonna/post/0881481e-fbf9-4159-978e-386c492b76bf/image.png)

간편하게 Github에 있는 Repository를 이용하여 진행하였습니다.

![](https://images.velog.io/images/primadonna/post/24771cc0-02b6-42b4-a767-469f11e7170f/image.png)

권한을 부여해주고

![](https://images.velog.io/images/primadonna/post/b9e6a584-84f2-419d-8ad8-a79a6eda75cf/image.png)

**main(master)** 브랜치와 연결하여 진행하였습니다.

![](https://images.velog.io/images/primadonna/post/fff594e8-50b2-4997-b7ae-09f79f965f30/image.png)

자동배포에 필요한 설정파일이 xml 파일 형태로 제공됩니다.

필요에 따라 수정가능하지만 일단 기본 형태로 진행하였습니다.

![](https://images.velog.io/images/primadonna/post/10379dca-23c9-4f56-a425-f2308dc81053/image.png)

![](https://images.velog.io/images/primadonna/post/79566607-592b-4ad2-ae9b-6746f59e0a89/image.png)

정상적으로 연동이 되었고, AWS 자체에서 도메인도 자동 생성해주었습니다.

# 도메인 연결

![](https://images.velog.io/images/primadonna/post/0a38fa2f-77e7-4c56-a4bc-4e8cf70015de/image.png)

도메인 관리 탭을 열어보면 자동 생성된 도메인이 있지만, 이미 도메인을 구입해둔 상황이였기 때문에 커스텀 도메인을 연결해보도록 하겠습니다.

도메인을 Amazon Route53과 미리 연결해준터라 **도메인 찾기** 버튼을 누르니 자동 연결되었습니다.

![](https://images.velog.io/images/primadonna/post/0ae8d593-ffeb-4d67-8530-cfa08f1dbb82/image.png)

도메인을 연결해주면 자동으로 무료 HTTPS 인증서도 발행해주고 있습니다.

![](https://images.velog.io/images/primadonna/post/16787c4d-ba49-49c8-b38f-a153aa1f9b70/image.png)

저장 후 진행하다보면 도메인 설정을 위해 추가 작업을 해주어야하는데

**작업 > DNS 레코드 보기**를 누르면

![](https://images.velog.io/images/primadonna/post/ae731eee-55a6-4e6f-bb8a-a762ca91f9ab/image.png)

DNS 공급자를 제공해주는 CDN 주소로 변경하여야 합니다.

Route53 에서 해당 도메인에 레코드를 제공받은 대로 **A** 레코드와 **CNAME** 레코드를 추가해줍니다.

![](https://images.velog.io/images/primadonna/post/92bda526-4246-413e-9da1-fcbb011059f1/image.png)

이후 도메인을 확인해보면 HTTPS 인증서가 생성된 것을 확인할 수 있습니다.

![](https://images.velog.io/images/primadonna/post/8ef68ec8-ac42-490c-9515-7f1cecb934d4/image.png)

# 후기

이 외에도 AWS Amplify에서 제공해주는 몇 가지 기능들이 있기는한데 현재 필요하지는 않은 기능들이라 나중에 시도해볼 예정입니다.

![](https://images.velog.io/images/primadonna/post/e879d167-fc24-48f5-84b8-4acb1d9a4ad6/image.png)