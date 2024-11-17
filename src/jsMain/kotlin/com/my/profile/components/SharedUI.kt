package com.my.profile.components

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.H2

@Composable
fun pageTitle(
    title: String,
) {
    H2 {
        SpanText(
            text = title,
            modifier = Modifier
                .fontWeight(FontWeight.Bold)
                .fontSize(32.px)
        )
    }
}