package com.my.profile.pages

import androidx.compose.runtime.Composable
import com.my.profile.components.AdminPageLayout
import com.my.profile.ui.white
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
fun introductionPage() {
    introduction()
}

@Composable
fun introduction(){
    AdminPageLayout(
        content = {
            introductionContent()
        }
    )
}

@Composable
fun introductionContent() {
    Column (
        modifier = Modifier
            .width(700.px)
            .fillMaxHeight()
            .padding(40.px)
            .backgroundColor(white),
    ) {
        introductionItem(
            title = "사용자 입장에서 문제를 해결하기 위해 여러 방향에서 고민합니다.",
            description = "개발자는 문제를 해결하는 사람이라고 생각하며, 이를 위해 프로젝트를 전체적으로 이해하는 것이 중요하다고 생각합니다. 이전 회사에서 Android와 백엔드 개발을 모두 담당하며 요구사항 분석, DB 설계, 개발, 배포까지 프로젝트 전 과정을 경험했습니다. 이를 통해 프로젝트의 전반적인 흐름을 이해하게 되었고, 다양한 관점에서 문제를 해결하는 역량을 키울 수 있었습니다.\n" +
                    "\n" +
                    "프로젝트 진행 중에 앱에서 서버와 통신하는 과정에서 서버에서 내려오는 데이터의 null 처리가 되지 않아 앱이 크래시되는 문제가 있었습니다. 이럴 때마다 앱을 업데이트하기에는 사용자에게 번거로움이 생길 것 같아서, 서버에서 null 처리를 하도록 요청하여 앱의 불필요한 업데이트 없이 문제를 해결할 수 있었습니다.\n" +
                    "\n" +
                    "이처럼 Android에만 국한되지 않고, 사용자 입장에서 최선의 해결책을 찾기 위해 여러 방면에서 고민하고 있습니다."
        )
        introductionItem(
            title = "최신기술을 빠르게 습득하고 실무에 적용할 수 있습니다.",
            description = "이전 회사에서 이커머스 앱을 개발하며 화면 수와 UI 복잡성이 증가하게 되면서 반복 작업과 코드량이 많아지는 문제를 겪었습니다. 이 문제를 해결하기 위해 JetPack Compose를 도입하여 점진적으로 적용했고, UI 컴포넌트 재사용성을 높여 개발 속도와 유지보수 효율성을 개선한 경험이 있습니다. 이를 통해 코드량을 줄이고, 복잡한 UI 요구사항도 해결할 수 있었습니다."
        )
        introductionItem(
            title = "안정적이고 신뢰할 수 있는 코드를 작성합니다.",
            description = "안정적이고 신뢰할 수 있는 코드를 작성하기 위해서 테스트 코드 작성을 중요하게 생각합니다. Unit Test, UI Test 작성으로 코드의 안정성을 높이려고 노력하고 있습니다. 실제로 테스트 코드 작성을 통해 비즈니스 로직이 수정될 때, 예상하지 못한 오류를 미리 발견하고 해결한 경험이 많습니다. 이를 통해 테스트 코드 작성의 중요성을 느끼게 되었습니다.\n" +
                    "\n"
        )
        introductionItem(
            title = "투명한 소통과 효율적인 협업을 중요시합니다.",
            description = "프로젝트 진행 중 발생한 문제나 실수를 솔직하게 공유하는 문화를 중요하게 생각합니다. 이전에 프로젝트 진행 중에, 외부 API 명세가 변경되서 관련 작업을 해야했지만 이를 미루다 잊어버린 적이 있었고, 이를 급하게 해결하는 과정에서 팀원들에게 공유하지 않아 일정이 늦어진 일이 있었습니다. 이를 통해 문제가 생기면 빠르게 공유하여 함께 해결하는 것이 중요하다는 것을 깨달았습니다. 그 이후로는 문제가 생기면 팀원들과 즉시 공유하여 함께 해결하고 프로젝트를 원활하게 마무리 할 수 있었습니다.\n" +
                    "\n"
        )
        introductionItem(
            title = "사용자 중심의 UI/UX 설계를 통해 직관적인 인터페이스를 구현합니다.",
            description = "사용자 중심의 UI/UX 설계를 통해 누구나 쉽게 사용할 수 있는 직관적인 인터페이스 구현에 노력하고 있습니다. 스마트팜 IoT 프로젝트에서 고령층 사용자의 불편을 해결하기 위해 버튼의 위치와 크기, 텍스트 크기를 키우는 등 UI를 개선한 경험이 있으며, 이를 통해 사용자 중심의 UI/UX 설계가 중요하다는 것을 느끼게 되었습니다."
        )
    }
}

@Composable
fun introductionItem(
    title: String,
    description: String,
){
    introductionItemTitle(
        title = title
    )
    introductionItemDescription(
        description = description
    )
    HorizontalDivider(
        modifier = Modifier
            .fillMaxWidth()
            .margin(topBottom = 20.px)
    )
}

@Composable
fun introductionItemTitle(
    title: String,
){
    H3 {
        SpanText(
            text = title,
            modifier = Modifier
                .fontWeight(FontWeight.Bold)
        )
    }
}

@Composable
fun introductionItemDescription(
    description: String,
){
    SpanText(
        text = description,
        modifier = Modifier
            .lineHeight(1.5)
    )
}