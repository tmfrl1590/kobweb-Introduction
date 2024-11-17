package com.my.profile.components.career

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.padding
import org.jetbrains.compose.web.css.px

@Composable
fun companyInfoArea(
    companyName: String,
    position: String,
    date: String,
){
    Column {
        boldText(
            text = companyName,
            fontSize = 20.px,
            modifier = Modifier.padding(bottom = 6.px)
        )
        notBoldText(
            text = position,
            fontSize = 12.px,
            modifier = Modifier.padding(bottom = 6.px)
        )
        notBoldText(
            text = date,
            fontSize = 12.px,
            modifier = Modifier.padding(bottom = 6.px)
        )
    }
}