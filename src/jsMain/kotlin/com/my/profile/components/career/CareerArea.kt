package com.my.profile.components.career

import androidx.compose.runtime.Composable
import com.my.profile.components.descriptionRow
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.silk.components.text.SpanText

@Composable
fun careerArea(
    modifier: Modifier = Modifier,
    projectDescription: String,
    roleDescription: String,
    content: @Composable () -> Unit,
){
    Column(
        modifier = modifier
    ) {
        descriptionRow(
            title = "프로젝트",
            description = projectDescription
        )
        descriptionRow(
            title = "역할",
            description = roleDescription
        )
        descriptionRow(
            title = "주요 업무 : ",
        )
        content()
    }
}



@Composable
fun OnderDescription(){
    SpanText(
        text = " · Java에서 Kotlin + Compose 마이그레이션하여 코드 간결성 향상"
    )
    SpanText(
        text = " · MVVM 패턴과 멀티모듈 아키텍처 도입으로 프로젝트 구조 개선 및 유지보수성 개선"
    )
    SpanText(
        text = " · 테스트 코드 도입으로 앱 안정성 향상"
    )
    SpanText(
        text = " · 스마트로 PG 연동을 통한 카드형 온누리 상품권 결제 구현\n"
    )
    SpanText(
        text = " · Coroutine 기반 비동기 처리로 결제 API 요청 속도 개선 및 결제 안정성 향상\n"
    )
}

@Composable
fun OntableDescription(){
    SpanText(
        text = " · 테이블 오더 앱 및 마스터 태블릿 앱 개발, 운영, 유지보수"
    )
    SpanText(
        text = " · WebSocket을 활용한 실시간 주문 처리 시스템 구축"
    )
}

@Composable
fun aproDescription(){
    SpanText(
        text = " · Onvif 프로토콜을 활용한 CCTV 통신 시스템 개발"
    )
    SpanText(
        text = " · 코드 리뷰 도입으로 코드 품질 향상"
    )
    SpanText(
        text = " · 아프로제어 앱 개발 및 유지보수"
    )
}