package com.my.profile.pages

import androidx.compose.runtime.Composable
import com.my.profile.components.AdminPageLayout
import com.my.profile.ui.white
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Text

@Page
@Composable
fun Screen2Page() {
    Screen2()
}

@Composable
fun Screen2(){
    AdminPageLayout(
        content = {
            Screen2Content()
        }
    )
}

@Composable
fun Screen2Content() {
    Box(
        modifier = Modifier
            .width(700.px)
            .fillMaxHeight()
            .padding()
            .backgroundColor(white),
        contentAlignment = Alignment.Center
    ) {
        Text("경력 Content")
    }
}