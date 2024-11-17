package com.my.profile

import androidx.compose.runtime.Composable
import com.my.profile.util.BACKGROUND_COLOR
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.minHeight
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.core.App
import com.varabyte.kobweb.silk.SilkApp
import com.varabyte.kobweb.silk.style.common.SmoothColorStyle
import com.varabyte.kobweb.silk.style.toModifier
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.vh


@App
@Composable
fun AppEntry(content: @Composable () -> Unit) {
    SilkApp {
        Box(
            modifier = SmoothColorStyle
                .toModifier()
                .minHeight(100.vh)
                .padding(topBottom = 100.px)
                .backgroundColor(BACKGROUND_COLOR),
            contentAlignment = Alignment.Center
        ) {
            content()
        }
    }
}
