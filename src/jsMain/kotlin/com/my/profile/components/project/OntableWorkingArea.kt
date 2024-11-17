package com.my.profile.components.project

import androidx.compose.runtime.Composable
import com.my.profile.components.customDivider
import com.my.profile.util.HORIZONTAL_DIVIDER_TOP_BOTTOM_MARGIN
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.silk.components.layout.HorizontalDivider
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px

@Composable
fun ontableWorkingArea() {
    Column(
        modifier = Modifier
            .fillMaxWidth()
    ) {
        SpanText(
            text = " - 약 5개 매장, 30대의 태블릿에서 운영되는 테이블 오더 시스템 개발 및 유지보수",
        )
        SpanText(
            text = " - WebSocket을 활용한 실시간 주문 처리 시스템 개발",
        )
        SpanText(
            text = " - 매장별 주문 현황을 실시간 모니터링 할 수 있는 통합 관리 시스템 구축",
        )
        customDivider()
    }
}