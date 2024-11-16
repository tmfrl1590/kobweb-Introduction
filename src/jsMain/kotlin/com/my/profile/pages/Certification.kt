package com.my.profile.pages

import androidx.compose.runtime.Composable
import com.my.profile.components.AdminPageLayout
import com.my.profile.ui.white
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.layout.HorizontalDivider
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.H1
import org.jetbrains.compose.web.dom.H2
import org.jetbrains.compose.web.dom.H3
import org.jetbrains.compose.web.dom.Text

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
            .width(700.px)
            .fillMaxHeight()
            .padding(40.px)
            .backgroundColor(white),
    ) {
        H2 {
            SpanText(
                text = "자격증",
                modifier = Modifier
                    .fontWeight(FontWeight.Bold)
                    .fontSize(32.px)
            )
        }
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
        HorizontalDivider(
            modifier = Modifier
                .fillMaxWidth()
        )
    }
}

@Composable
fun certificationItemTitle(
    title: String,
){
    H3 {
        SpanText(
            text = title,
            modifier = Modifier
                .fontWeight(FontWeight.Bold)
                .fontSize(24.px)
        )
    }
}

@Composable
fun certificationItemOrganization(
    text: String,
){
    SpanText(
        text = text,
        modifier = Modifier
            .fontSize(16.px)
            .padding(bottom = 5.px)
    )
}
