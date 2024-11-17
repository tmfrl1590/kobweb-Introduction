package com.my.profile.pages

import androidx.compose.runtime.Composable
import com.my.profile.components.AdminPageLayout
import com.my.profile.components.pageTitle
import com.my.profile.components.career.*
import com.my.profile.ui.white
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.layout.HorizontalDivider
import org.jetbrains.compose.web.css.px

@Page
@Composable
fun careerPage() {
    career()
}

@Composable
fun career(){
    AdminPageLayout(
        content = {
            careerContent()
        }
    )
}

@Composable
fun careerContent() {
    Column (
        modifier = Modifier
            .width(700.px)
            .fillMaxHeight()
            .padding()
            .padding(40.px)
            .backgroundColor(white),
    ) {
        pageTitle(title = "경력")
        theDreamakers()
        miraeCNC()
    }
}

@Composable
fun theDreamakers(){
    companyInfoArea(
        companyName = "(주)더드림메이커스",
        position = "연구원 | R&D 연구 개발부서",
        date = "2023.09 ~ 2024.09",
    )
    careerArea(
        projectDescription = " : 온누리 상품권 기반의 전통시장 이커머스 플랫폼 온누리오더 (온더)",
        roleDescription = " : Kotlin 기반 Android 및 백엔드 개발",
        content = {
            OnderDescription()
        }
    )
    HorizontalDivider(modifier = Modifier.fillMaxWidth().margin(topBottom = 28.px))
    careerArea(
        projectDescription = " : 온테이블 (테이블오더)",
        roleDescription = " : Kotlin 기반 Android 및 백엔드 개발",
        content = {
            OntableDescription()
        }
    )
    HorizontalDivider(modifier = Modifier.fillMaxWidth().margin(topBottom = 28.px))
}

@Composable
fun miraeCNC(){
    companyInfoArea(
        companyName = "미래씨엔씨",
        position = "대리 | 개발팀",
        date = "2020.11 ~ 2023.07",
    )
    careerArea(
        projectDescription = " : Onvif 기반 CCTV 통신 개발 (아프로제어)",
        roleDescription = " : Java 기반 Android 개발 담당",
        content = {
            aproDescription()
        }
    )
}
