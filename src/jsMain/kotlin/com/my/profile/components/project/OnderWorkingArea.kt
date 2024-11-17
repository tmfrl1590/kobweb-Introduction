package com.my.profile.components.project

import androidx.compose.runtime.Composable
import com.my.profile.components.customDivider
import com.my.profile.components.descriptionRow
import com.my.profile.util.HORIZONTAL_DIVIDER_TOP_BOTTOM_MARGIN
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.silk.components.layout.HorizontalDivider
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.H6

@Composable
fun onderWorkingArea() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
    ) {
        onderWorkingAreaTitle(
            text = "문제"
        )
        descriptionRow(
            title = "· 복잡한 코드 구조",
            description = " : 단일 액티비티에 비즈니스 로직이 집중되어 코드 복잡도가 높음",
        )
        descriptionRow(
            title = "· 유지보수 어려움",
            description = " : 서버 응답 코드와 컬럼명이 하드코딩되어 있고, 개발 문서가 없어 유지보수에 제약",
        )
        descriptionRow(
            title = "· 쿠폰 발급 제한",
            description = " : 쿠폰 발급이 매장에 한정되어, 통합관리자가 유연하게 운영할 수 없는 구조",
        )
        descriptionRow(
            title = "· API 중단",
            description = " : 제로페이 기반 모바일 온누리 상품권 API가 갑자기 중단되어 결제 기능이 중단됨",
        )
        onderWorkingAreaTitle(
            text = "해결"
        )
        SpanText(
            text = "· Java 기반 프로젝트를 Kotlin 및 Jetpack Compose로 100% 마이그레이션하여 코드 간결성과 유지보수성 향상",
        )
        SpanText(
            text = "· MVVM 패턴과 멀티모듈 아키텍처를 도입하여 프로젝트 구조 모듈화 및 유지보수성 개선",
        )
        SpanText(
            text = "· 하드코딩된 서버 응답 코드를 Enum 클래스로 리팩토링하여 코드 가독성과 유지보수성 개선",
        )
        SpanText(
            text = "· 테스트 코드를 도입하여 앱의 안정성을 높이고, 배포 시 발생할 수 있는 문제를 최소화",
        )
        SpanText(
            text = "· 쿠폰 발급 주체를 통합관리자와 매장 모두 발급 가능하도록 재설계",
        )
        SpanText(
            text = "· 스마트로 PG 연동을 통한 카드형 온누리 상품권 결제 시스템 구현",
        )
        SpanText(
            text = "· Coroutine 기반의 비동기 네트워크 통신으로 결제 API 요청 속도를 개선하고, 결제 실패 시 오류 처리 로직을 추가하여 결제 안정성 향상",
        )
        customDivider()
    }
}

@Composable
private fun onderWorkingAreaTitle(
    text: String,
) {
    H6 {
        SpanText(
            text = text,
            modifier = Modifier
                .fontWeight(FontWeight.Bold)
                .fontSize(20.px)
        )
    }
}