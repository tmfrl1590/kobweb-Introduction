package com.my.profile.components.project

import androidx.compose.runtime.Composable
import com.my.profile.components.customDivider
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.silk.components.text.SpanText

@Composable
fun aproWorkingArea() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
    ) {
        SpanText(
            text = "· 축사의 CCTV, 환기 시스템, 천장 개폐 등 다양한 IoT 기기를 통합 관리하는 스마트팜 솔루션 개발",
        )
        SpanText(
            text = "· Onvif 프로토콜을 활용하여 하이크비전, 다후아, 한화 등 다양한 제조사의 CCTV를 연동하는 CCTV 통합 시스템 구축",
        )
        SpanText(
            text = "· 코드리뷰 프로세스 도입을 통해 코드 품질 개선 및 유지보수성 향상",
        )
        SpanText(
            text = "· 고객층 연령대를 고려한 UI/UX 개선",
        )
        customDivider()
    }
}