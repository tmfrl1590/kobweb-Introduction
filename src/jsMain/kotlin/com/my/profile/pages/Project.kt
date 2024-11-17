package com.my.profile.pages

import androidx.compose.runtime.Composable
import com.my.profile.components.AdminPageLayout
import com.my.profile.components.pageTitle
import com.my.profile.components.project.aproWorkingArea
import com.my.profile.components.project.onderWorkingArea
import com.my.profile.components.project.ontableWorkingArea
import com.my.profile.components.project.projectDescriptionArea
import com.my.profile.ui.white
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.core.Page
import org.jetbrains.compose.web.css.px

@Page
@Composable
fun projectPage() {
    project()
}

@Composable
fun project() {
    AdminPageLayout(
        content = {
            projectContent()
        }
    )
}

@Composable
fun projectContent() {
    Column(
        modifier = Modifier
            .width(700.px)
            .fillMaxHeight()
            .padding(40.px)
            .backgroundColor(white),
    ) {
        pageTitle(title = "프로젝트")

        onderProjectInfoArea()
        ontableProjectInfoArea()
        aproProjectInfoArea()
    }
}

@Composable
fun onderProjectInfoArea(){
    projectDescriptionArea(
        projectTile = "온누리 상품권 기반의 전통시장 이커머스 플랫폼 온누리오더 온더",
        companyName = "(주)더드림메이커스",
        projectDuration = "2024.01 ~ 2024.05",
        projectDescription1 = " : 전통시장과 상점가에서 사용되는 온누리 상품권 기반의 이커머스 플랫폼(온더)으로,\n   상용화를 목표로 개발된 프로젝트\n",
        projectDescription2 = " : 온더는 R&D 연구개발 과정에서 개발되었으나, 쿠폰 도메인 문제와 복잡한 코드 구조\n   등으로 인해 상용화에 어려움이 있었고, 이를 해결하기 위해 재개발이 결정됨",
    )
    onderWorkingArea()
}

@Composable
fun ontableProjectInfoArea(){
    projectDescriptionArea(
        projectTile = "테이블오더 온테이블",
        companyName = "(주)더드림메이커스",
        projectDuration = "2024.06 ~ 2024.08",
        projectDescription1 = " : 테이블 오더 시스템 (온테이블)",
        projectDescription2 = " : 온더 서비스만으로는 경쟁력이 부족하다는 판단에, 매장에서 쉽게\n  사용할 수 있는 테이블 오더 서비스를 추가로 제공하기 위해 개발을 결정하게 됨",
    )
    ontableWorkingArea()
}

@Composable
fun aproProjectInfoArea(){
    projectDescriptionArea(
        projectTile = "CCTV 기반 ONVIF 통신 체계 구축",
        companyName = "미래씨엔씨",
        projectDuration = "2020.11 ~ 2023.07",
        projectDescription1 = " : 스마트팜 IoT 통합 관리 솔루션",
        projectDescription2 = " : 하이크비전 CCTV 수급 문제로 다양한 제조사의 CCTV를\n 연동할 필요성이 생겨서 진행하게 됨",
    )
    aproWorkingArea()
}