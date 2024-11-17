package com.my.profile.pages

import androidx.compose.runtime.Composable
import com.my.profile.components.AdminPageLayout
import com.my.profile.ui.white
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Text

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
    Box(
        modifier = Modifier
            .width(700.px)
            .fillMaxHeight()
            .padding()
            .backgroundColor(white),
        contentAlignment = Alignment.Center
    ) {
        Text("프로젝트 Content")
    }
}