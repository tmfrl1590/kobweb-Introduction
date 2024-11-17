package com.my.profile.components.career

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.CSSLengthOrPercentageNumericValue
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.silk.components.text.SpanText

@Composable
fun boldText(
    text: String,
    fontSize: CSSLengthOrPercentageNumericValue,
    modifier: Modifier = Modifier,
){
    SpanText(
        text = text,
        modifier = modifier
            .fontSize(fontSize)
            .fontWeight(FontWeight.Bold)
    )
}

@Composable
fun notBoldText(
    text: String,
    fontSize: CSSLengthOrPercentageNumericValue,
    modifier: Modifier = Modifier,
){
    SpanText(
        text = text,
        modifier = modifier
            .fontSize(fontSize)
    )
}