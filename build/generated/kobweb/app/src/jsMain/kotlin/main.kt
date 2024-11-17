import androidx.compose.runtime.CompositionLocalProvider
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.RoutePrefix
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.silk.defer.renderWithDeferred
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.renderComposable

public fun main() {
    RoutePrefix.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.register("/") { com.my.profile.pages.homePage() }
        ctx.router.register("/career") { com.my.profile.pages.careerPage() }
        ctx.router.register("/certification") { com.my.profile.pages.certificationPage() }
        ctx.router.register("/introduction") { com.my.profile.pages.introductionPage() }
        ctx.router.register("/project") { com.my.profile.pages.projectPage() }

    }
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
    }

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    router.navigateTo(window.location.href.removePrefix(window.location.origin),
            UpdateHistoryMode.REPLACE)

    val root = document.getElementById("root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    AppGlobals.initialize(mapOf("title" to "이력서"))
    renderComposable(rootElementId = "root") {
        com.my.profile.AppEntry {
            router.renderActivePage { renderWithDeferred { it() } }
        }
    }
}
