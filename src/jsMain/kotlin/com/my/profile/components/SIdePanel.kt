import androidx.compose.runtime.Composable
import com.my.profile.navigation.Screen
import com.my.profile.util.SIDE_PANEL_WIDTH
import com.my.profile.util.SIDE_PANEL_SELECTED
import com.my.profile.util.WHITE
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.px

@Composable
fun sidePanel() {
    sidePanelInternal()
}

@Composable
private fun sidePanelInternal() {
    Column(
        verticalArrangement = Arrangement.spacedBy(20.px),
        modifier = Modifier
            .width(SIDE_PANEL_WIDTH)
            .fillMaxHeight()
            .backgroundColor(WHITE)
            .padding(top = 20.px)
    ) {
        navigationItems()
    }
}

@Composable
fun navigationItems() {
    val context = rememberPageContext()

    navigationItem(
        title = "Home",
        selected = context.route.path == Screen.Home.route,
        onClick = {
            context.router.navigateTo(Screen.Home.route)
        }
    )

    navigationItem(
        title = "Introduce",
        selected = context.route.path == Screen.Introduction.route,
        onClick = {
            context.router.navigateTo(Screen.Introduction.route)
        }
    )
    navigationItem(
        title = "Career",
        selected = context.route.path == Screen.Career.route,
        onClick = {
            context.router.navigateTo(Screen.Career.route)
        }
    )
    navigationItem(
        title = "Project",
        selected = context.route.path == Screen.Project.route,
        onClick = {
            context.router.navigateTo(Screen.Project.route)
        }
    )
    navigationItem(
        title = "Certification",
        selected = context.route.path == Screen.Certification.route,
        onClick = {
            context.router.navigateTo(Screen.Certification.route)
        }
    )
}

@Composable
private fun navigationItem(
    selected: Boolean = false,
    title: String,
    onClick: () -> Unit
) {
    Box(
        modifier = Modifier
            .width(160.px)
            .margin(leftRight = 20.px)
            .height(48.px)
            .textAlign(TextAlign.Center)
            .borderRadius(r = 100.px)
            .border(0.5.px, LineStyle.Solid, if (selected) SIDE_PANEL_SELECTED else Color.lightgray)
            .cursor(Cursor.Pointer)
            .backgroundColor(if(selected) SIDE_PANEL_SELECTED else WHITE)
            .onClick { onClick() },
        contentAlignment = Alignment.Center
    ){
        SpanText(
            modifier = Modifier
                .fontSize(16.px)
                .color(if(selected) WHITE else Color.black),
            text = title
        )
    }
}