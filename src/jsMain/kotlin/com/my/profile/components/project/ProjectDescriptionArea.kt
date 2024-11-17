package com.my.profile.components.project

import androidx.compose.runtime.Composable
import com.my.profile.components.descriptionRow
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.layout.HorizontalDivider
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.H3

@Composable
fun projectDescriptionArea(
    projectTile: String,
    companyName: String,
    projectDuration: String,
    projectDescription1: String,
    projectDescription2: String,
){
    Column(
        modifier = Modifier.fillMaxWidth()
    ) {
        projectTitle(projectTile = projectTile)
        companyName(companyName = companyName)
        projectDuration(projectDuration = projectDuration)

        descriptionRow(
            title = "프로젝트 설명",
            description = projectDescription1,
        )
        descriptionRow(
            title = "프로젝트 배경",
            description = projectDescription2,
        )
        HorizontalDivider(
            modifier = Modifier
                .fillMaxWidth()
                .margin(topBottom = 20.px)
        )
    }
}

@Composable
private fun projectTitle(
    projectTile: String,
){
    H3 {
        SpanText(
            text = projectTile,
            modifier = Modifier
                .fontWeight(FontWeight.Bold)
        )
    }
}

@Composable
private fun companyName(
    companyName: String,
){
    SpanText(
        text = companyName,
        modifier = Modifier
            .color(Color.lightgray)
            .fontSize(12.px)
    )
}

@Composable
private fun projectDuration(
    projectDuration: String,
){
    SpanText(
        text = projectDuration,
        modifier = Modifier
            .color(Color.lightgray)
            .fontSize(12.px)
            .padding(bottom = 10.px)
    )
}