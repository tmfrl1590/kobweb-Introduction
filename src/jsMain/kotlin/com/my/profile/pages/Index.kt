package com.my.profile.pages

import androidx.compose.runtime.Composable
import com.my.profile.components.AdminPageLayout
import com.my.profile.ui.white
import com.my.profile.util.Res
import com.varabyte.kobweb.compose.css.CSSLengthOrPercentageNumericValue
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.*
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.px

@Page
@Composable
fun HomePage() {

    HomeScreen()
}

@Composable
fun HomeScreen(){
    AdminPageLayout(
        content = {
            HomeContent()
        }
    )
}

@Composable
fun HomeContent() {
    Box(
        modifier = Modifier
            .width(700.px)
            .fillMaxHeight()
            .padding()
            .backgroundColor(white),
        contentAlignment = Alignment.Center
    ) {
        Row(
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            ProfileInfoArea()

            Image(
                src = Res.Image.logo,
                alt = "Varabyte Logo",
                modifier = Modifier.size(200.px)
            )
        }
    }
}

@Composable
fun ProfileInfoArea(){
    Column{

        ProfileInfoItem(
            text = "김슬기",
            fontSize = 60.px,
            fontWeight = FontWeight.Bold
        )
        ProfileInfoItem(
            text = "Android Developer",
            fontSize = 28.px,
            fontWeight = FontWeight.SemiBold
        )
        ProfileInfoItem(
            text = "이메일  tmfrl1590@gmail.com",
            fontSize = 20.px,
            fontWeight = FontWeight.Normal
        )
    }
}

@Composable
fun ProfileInfoItem(
    modifier: Modifier = Modifier,
    text: String,
    fontSize: CSSLengthOrPercentageNumericValue,
    fontWeight: FontWeight,
){
    SpanText(
        text = text,
        modifier = modifier
            .fontSize(fontSize)
            .fontWeight(fontWeight)
            .padding(topBottom = 12.px)
    )
}
