package com.my.profile.pages

import androidx.compose.runtime.Composable
import com.my.profile.components.AdminPageLayout
import com.my.profile.components.customDivider
import com.my.profile.components.pageTitle
import com.my.profile.util.WHITE
import com.my.profile.util.HORIZONTAL_DIVIDER_TOP_BOTTOM_MARGIN
import com.my.profile.util.RIGHT_CONTENT_PADDING
import com.my.profile.util.RIGHT_CONTENT_WIDTH
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.layout.HorizontalDivider
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.H3

@Page
@Composable
fun certificationPage() {
    certification()
}

@Composable
fun certification(){
    AdminPageLayout(
        content = {
            certificationContent()
        }
    )
}

@Composable
fun certificationContent() {
    Column (
        modifier = Modifier
            .width(RIGHT_CONTENT_WIDTH)
            .fillMaxHeight()
            .padding(RIGHT_CONTENT_PADDING)
            .backgroundColor(WHITE),
    ) {
        pageTitle(title = "자격증")
        certificationItem(
            title = "정보처리기사",
            organization = "한국산업인력공단",
            date = "취득일 : 2023.06"
        )
        certificationItem(
            title = "리눅스 마스터 2급",
            organization = "한국정보통신진흥협회",
            date = "취득일 : 2020.01.03"
        )
    }
}

@Composable
fun certificationItem(
    title: String,
    organization: String,
    date: String,
){
    Column(
        modifier = Modifier
            .fillMaxWidth()
    ) {
        certificationItemTitle(
            title = title
        )
        certificationItemOrganization(
            text = organization
        )
        certificationItemOrganization(
            text = date
        )
        customDivider()
    }
}

@Composable
private fun certificationItemTitle(
    title: String,
){
    H3 {
        SpanText(
            text = title,
            modifier = Modifier.fontWeight(FontWeight.Bold)
        )
    }
}

@Composable
private fun certificationItemOrganization(
    text: String,
){
    SpanText(
        text = text,
        modifier = Modifier
            .fontSize(16.px)
            .padding(bottom = 6.px)
    )
}
