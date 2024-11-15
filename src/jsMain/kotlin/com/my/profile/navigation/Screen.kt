package com.my.profile.navigation

sealed class Screen(val route: String){
    data object Home: Screen(route = "/")
    data object Screen1: Screen(route = "/screen1")
    data object Screen2: Screen("/screen2")
    data object Screen3: Screen("/screen3")
}