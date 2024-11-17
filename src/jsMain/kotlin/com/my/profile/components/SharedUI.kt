package com.my.profile.components

import androidx.compose.runtime.Composable
import com.my.profile.components.career.boldText
import com.my.profile.components.career.notBoldText
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.padding
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

@Composable
fun descriptionRow(
    title: String,
    description: String = "",
){
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 6.px)
    ) {
        boldText(
            text = title,
            fontSize = 16.px,
        )
        notBoldText(
            text = description,
            fontSize = 16.px,
        )
    }
}