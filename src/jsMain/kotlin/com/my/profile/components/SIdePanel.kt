import androidx.compose.runtime.Composable
import com.my.profile.navigation.Screen
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.px

@Composable
fun SidePanel() {
    SidePanelInternal()
}

@Composable
private fun SidePanelInternal() {
    Column(
        modifier = Modifier
            .padding(leftRight = 40.px, topBottom = 50.px)
            .width(300.px)
            .fillMaxHeight()
            //.position(Position.Fixed)
            .backgroundColor(Color.gray)
            .zIndex(9)
    ) {
        NavigationItems(
        )
    }
}

@Composable
fun NavigationItems() {
    val context = rememberPageContext()

    NavigationItem(
        modifier = Modifier.margin(bottom = 24.px),
        title = "홈",
        selected = context.route.path == Screen.Home.route,
        //icon = Res.PathIcon.home,
        onClick = {
            context.router.navigateTo(Screen.Home.route)
        }
    )

    NavigationItem(
        modifier = Modifier.margin(bottom = 24.px),
        title = "자기소개",
        selected = context.route.path == Screen.Introduction.route,
        //icon = Res.PathIcon.home,
        onClick = {
            context.router.navigateTo(Screen.Introduction.route)
        }
    )
    NavigationItem(
        modifier = Modifier.margin(bottom = 24.px),
        title = "경력",
        selected = context.route.path == Screen.Screen2.route,
        //icon = Res.PathIcon.home,
        onClick = {
            context.router.navigateTo(Screen.Screen2.route)
        }
    )
    NavigationItem(
        modifier = Modifier.margin(bottom = 24.px),
        title = "자격증",
        selected = context.route.path == Screen.Certification.route,
        //icon = Res.PathIcon.home,
        onClick = {
            context.router.navigateTo(Screen.Certification.route)
        }
    )
}

@Composable
private fun NavigationItem(
    modifier: Modifier = Modifier,
    selected: Boolean = false,
    title: String,
    //icon: String,
    onClick: () -> Unit
) {
    Row(
        modifier = Modifier
            .then(modifier)
            .cursor(Cursor.Pointer)
            .onClick { onClick() },
        verticalAlignment = Alignment.CenterVertically
    ) {
        SpanText(
            modifier = Modifier
                //.id(Id.navigationText)
                //.fontFamily(FONT_FAMILY)
                .fontSize(16.px)
                .color(if(selected) Color.red else Color.black)
            ,
            text = title
        )
    }
}