package com.my.profile.pages

import androidx.compose.runtime.Composable
import com.my.profile.components.AdminPageLayout
import com.my.profile.util.*
import com.varabyte.kobweb.compose.css.CSSLengthOrPercentageNumericValue
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.Color.white
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.px

@Page
@Composable
fun homePage() {
    homeScreen()
}

@Composable
fun homeScreen(){
    AdminPageLayout(
        content = {
            homeContent()
        }
    )
}

@Composable
fun homeContent() {
    Column(
        modifier = Modifier
            .width(RIGHT_CONTENT_WIDTH)
            .fillMaxHeight()
            .padding(RIGHT_CONTENT_PADDING)
            .backgroundColor(white),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Image(
            src = Res.Image.logo,
            alt = "Profile Logo",
            modifier = Modifier.size(PROFILE_IMAGE_SIZE)
        )

        profileInfoArea()
    }
}

@Composable
fun profileInfoArea(){
    Column(
        modifier = Modifier
            .width(600.px)
            .fillMaxHeight(),
        horizontalAlignment = Alignment.CenterHorizontally,
    ){
        profileInfoItem(
            text = "김슬기",
            fontSize = 24.px,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.margin(top = 8.px)
        )

        Box(
            modifier = Modifier
                .width(168.px)
                .margin(bottom = 8.px, top = 4.px)
                .height(36.px)
                .textAlign(TextAlign.Center)
                .borderRadius(r = 100.px)
                .border(0.5.px, LineStyle.Solid, Color.gray)
                .backgroundColor(Color.gray),
            contentAlignment = Alignment.Center
        ){
            SpanText(
                modifier = Modifier
                    .fontSize(16.px)
                    .fontWeight(FontWeight.Bold)
                    .color(WHITE),
                text = "Android Developer"
            )
        }
        /*profileInfoItem(
            text = "Android Developer",
            fontSize = 20.px,
            fontWeight = FontWeight.SemiBold
        )*/
        profileInfoItem(
            text = "Email : tmfrl1590@gmail.com",
            fontSize = 16.px,
            fontWeight = FontWeight.Normal
        )
        profileInfoItem(
            text = "GitHub : https://github.com/tmfrl1590",
            fontSize = 16.px,
            fontWeight = FontWeight.Normal
        )
    }
}

@Composable
fun profileInfoItem(
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
            .padding(topBottom = 8.px)
    )
}
