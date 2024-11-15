package com.my.profile.navigation

sealed class Screen(val route: String){
    data object Home: Screen(route = "/")
    data object Introduction: Screen(route = "/introduction")
    data object Screen2: Screen("/screen2")
    data object Screen3: Screen("/screen3")
}