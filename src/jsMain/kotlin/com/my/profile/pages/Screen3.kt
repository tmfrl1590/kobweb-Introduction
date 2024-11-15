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
fun Screen3Page() {
    Screen3()
}

@Composable
fun Screen3(){
    AdminPageLayout(
        content = {
            Screen3Content()
        }
    )
}

@Composable
fun Screen3Content() {
    Box(
        modifier = Modifier
            .width(700.px)
            .fillMaxHeight()
            .padding()
            .backgroundColor(white),
        contentAlignment = Alignment.Center
    ) {
        Text("자격증 Content")
    }
}
