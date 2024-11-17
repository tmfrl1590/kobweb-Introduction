package com.my.profile.navigation

sealed class Screen(val route: String){
    data object Home: Screen(route = "/")
    data object Introduction: Screen(route = "/introduction")
    data object Career: Screen("/career")
    data object Project: Screen("/project")
    data object Certification: Screen("/certification")
}