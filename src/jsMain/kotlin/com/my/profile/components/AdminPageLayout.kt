package com.my.profile.components

import sidePanel
import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.width
import org.jetbrains.compose.web.css.px


@Composable
fun AdminPageLayout(content: @Composable () -> Unit) {
    Row(
        modifier = Modifier
            .width(1000.px)
            .fillMaxHeight(),
        horizontalArrangement = Arrangement.Center
    ) {
        sidePanel()
        content()
    }
}