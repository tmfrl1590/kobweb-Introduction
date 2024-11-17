package com.my.profile.components

import androidx.compose.runtime.Composable
import com.my.profile.components.career.boldText
import com.my.profile.components.career.notBoldText
import com.my.profile.util.HORIZONTAL_DIVIDER_TOP_BOTTOM_MARGIN
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.layout.HorizontalDivider
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.Color
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

@Composable
fun customDivider(){
    HorizontalDivider(
        modifier = Modifier
            .fillMaxWidth()
            .backgroundColor(Color.lightgray)
            .margin(topBottom = HORIZONTAL_DIVIDER_TOP_BOTTOM_MARGIN)
    )
}